import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function FormEditPerbaikan({ match }) {
  const { id } = useParams();
  const [data, setData] = useState({
    id: '',
    nama: '',
    model_perangkat: '',
    jenis_kerusakan: '',
    tindakan: '',
    biaya: '',
  });

  useEffect(() => {
    
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/perbaikan/${id}`);
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8080/update-perbaikan/${id}`, data);
      alert("Data berhasil diperbarui");
      // Redirect atau navigasi ke halaman tertentu setelah berhasil memperbarui data
      // window.location.href = '/perbaikan';
    } catch (error) {
      console.error('Error updating data:', error);
      alert("Data gagal diperbarui, terjadi kesalahan");
    }
  };

  return (
    <div>
      <form className='form-editperbaikan' onSubmit={handleFormSubmit}>
      <p> ID {id} </p>
        <caption className='table-caption'>Form Edit Perbaikan</caption>
        <div>
          <label>Nama:</label>
          <input
            type='text'
            name='nama'
            value={data.nama}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Model Perangkat:</label>
          <input
            type='text'
            name='model_perangkat'
            value={data.model_perangkat}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Jenis Kerusakan:</label>
          <input
            type='text'
            name='jenis_kerusakan'
            value={data.jenis_kerusakan}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Tindakan:</label>
          <input
            type='text'
            name='tindakan'
            value={data.tindakan}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Biaya:</label>
          <input
            type='text'
            name='biaya'
            value={data.biaya}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type='submit'>Perbarui</button>
        </div>
      </form>
    </div>
  );
}

export default FormEditPerbaikan;
