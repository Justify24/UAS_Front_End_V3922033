import React, { useState, useEffect } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';

// import FormEditPerbaikan from './form_updateperbaikan';

const TablePerbaikan = () => {
  const [dataPerbaikan, setDataPerbaikan] = useState([]);

  const getDataPerbaikan = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/perbaikan`);
      setDataPerbaikan(response.data);
      console.log(response);
    } catch (error) { 
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getDataPerbaikan();
  }, []);

  const viewDetail = async (id) => {
    try {
      const detailResponse = await axios.get(`http://localhost:8080/perbaikan`);
      console.log('Detail:', detailResponse.data);
      // Handle detailResponse.data, you can set it to state or show it in some other way
    } catch (error) {
      console.error('Error fetching detail:', error);
    }
  };

  const deletePerbaikan = async (id) => {
    const shouldDelete = window.confirm('Apakah anda yakun ingin menghapus data ini?');

    if (shouldDelete) {
      try {
        await axios.delete(`http://localhost:8080/delete-perbaikan/${id}`);
        getDataPerbaikan();
      } catch (error) {
        console.error('Error deleting Data Perbaikan: ', error); 
      }
    }
  };

  // const UpdateDataPerbaikan = async (event) => {
  //   event.preventDEfault();
  //   try {
  //     const putData = await axios.put(
  //       `http://localhost:8080/update-perbaikan/${id}`,
  //       {
  //         nama : nama,
  //         model_perangkat : model_perangkat,
  //         jenis_kerusakan : jenis_kerusakan,
  //         tindakan : tindakan,
  //         biaya : biaya
  //       }
  //     );
  //     alert(putData.data.messages)
  //     window.location.reload();
  //   } catch (error) {
  //     alert("Data gagal diubah")
  //   }
  // };

  // const showModal = (data) => {
  //   setId(data.nama);
  //   setModel_Perangkat(data.model_perangkat);
  //   setJenis_Kerusakan(data.jenis_kerusakan);
  //   setTindakan(data.tindakan);
  //   setBiaya(data.biaya);

  //   setShow(true);
  // }

  // const closeModal = () => {
  //   setId("");
  //   setModel_Perangkat("");
  //   setJenis_Kerusakan("");
  //   setTindakan("");
  //   setBiaya("");
  // }

  return (
    <div className="container mt-4">
    <h2>Data Perbaikan</h2>
    <Link to="/ajuanperbaikan">
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-primary me-md-2"  type="button">Tambah</button>
        </div>
    </Link>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Model Perangkat</th>
            <th>Jenis Kerusakan</th>
            <th>Tindakan</th>
            <th>Biaya</th>
            <th>action</th>
            {/* <th>Status</th> */}
            {/* <th>Action</th>
            <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {dataPerbaikan.map((item, index) => (
            <tr key={item.id} onClick={() => viewDetail(item.id)}>
              <td>{item.id}</td>
              <td>{item.nama}</td>
              <td>{item.model_perangkat}</td>
              <td>{item.jenis_kerusakan}</td>
              <td>{item.tindakan}</td>
              <td>{item.biaya}</td>
              {/* <td>{item.biaya}</td>
              <td>{item.biaya}</td> */}
              <td>
              <a href={`/editperbaikan/${item.id}`} className='btn btn-primary me-md-2'>
                  update
                </a>
                <button on onClick={() => deletePerbaikan(item.id)} className='btn btn-primary me-md-2'>
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePerbaikan;
