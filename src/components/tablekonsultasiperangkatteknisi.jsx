import React, { useState, useEffect } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';

// import FormEditPerbaikan from './form_updateperbaikan';

const TableKonsultasiPerangkatTeknisi = () => {
  const [dataKonsultasiPerangkat, setKonsultasiKerusakan] = useState([]);

  const getKonsultasiPerangkat = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/konsultasi-perangkat`);
      setKonsultasiKerusakan(response.data);
      console.log(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getKonsultasiPerangkat();
  }, []);

  const viewDetail = async (id_konsultasi) => {
    try {
      const detailResponse = await axios.get(`http://localhost:8080/konsultasi-perangkat`);
      console.log('Detail:', detailResponse.data);
      // Handle detailResponse.data, you can set it to state or show it in some other way
    } catch (error) {
      console.error('Error fetching detail:', error);
    }
  };

  // const deletePerbaikan = async (id) => {
  //   const shouldDelete = window.confirm('Apakah anda yakun ingin menghapus data ini?');

  //   if (shouldDelete) {
  //     try {
  //       await axios.delete(`http://localhost:8080/delete-perbaikan/${id}`);
  //       getKonsultasiKerusakan();
  //     } catch (error) {
  //       console.error('Error deleting Data Perbaikan: ', error); 
  //     }
  //   }
  // };

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
    <h2>Konsultasi Perangkat</h2>
    {/* <Link to="/ajuankonsultasiperangkat">
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-primary me-md-2"  type="button">Tambah</button>
        </div>
    </Link> */}
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Nama</th>
            {/* <th>Model Perangkat</th> */}
            {/* <th>Jenis Kerusakan</th> */}
            <th>Jenis Perangkat</th>
            <th>Keluhan</th>
            <th>Hasil</th>
            {/* <th>Biaya</th> */}
            <th>action</th>
            {/* <th>Status</th> */}
            {/* <th>Action</th>
            <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {dataKonsultasiPerangkat.map((item, index) => (
            <tr key={item.id_konsultasi} onClick={() => viewDetail(item.id_konsultasi)}>
              <td>{item.id_konsultasi}</td>
              <td>{item.nama}</td>
              {/* <td>{item.model_perangkat}</td> */}
              <td>{item.jenis_perangkat}</td>
              <td>{item.keluhan}</td>
              <td>{item.respond}</td>
              {/* <td>{item.biaya}</td> */}
              {/* <td>{item.biaya}</td>
              <td>{item.biaya}</td> */}
              <td>
              <a href={`/respondkonsultasi/${item.id_konsultasi}`} className='btn btn-primary me-md-2'>
                  Lakukan
                </a>
                <a href={`/detailkonsultasi/${item.id_konsultasi}`} className='btn btn-primary me-md-2'>
                  Detail
              </a>
              {/* <a href={`/updatekonsultasi/${item.id_konsultasi}`} className='btn btn-primary me-md-2'>
                  Edit
              </a> */}
                {/* <button on onClick={() => deletePerbaikan(item.id)} className='btn btn-primary me-md-2'>
                  delete
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableKonsultasiPerangkatTeknisi;
