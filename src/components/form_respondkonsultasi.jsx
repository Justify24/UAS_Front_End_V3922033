import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function FormRespondKonsultasiPerangkat() {
  const { id } = useParams();
  const [data, setData] = useState({
    id_konsultasi: '',
    nama: '',
    jenis_perangkat: '',
    keluhan: '',
    respond: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/konsultasi-perangkat/${id}`);
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
      await axios.put(`http://localhost:8080/update-konsultasiperangkat/${id}`, data);
      alert("Data berhasil diperbarui");
      window.location.href = '/konsultasiperangkatteknisi';
    } catch (error) {
      console.error('Error updating data:', error);
      alert("Data gagal diperbarui, terjadi kesalahan");
    }
  };

  const handleTextAreaChange = (e) => {
    const textareaLineHeight = 24; // Set the line height of the textarea
    const minRows = 15; // Set the minimum rows

    const previousRows = e.target.rows;
    e.target.rows = minRows; // Reset rows to minRows

    const currentRows = ~~(e.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      e.target.rows = currentRows;
    }
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  // CSS Styles
  const styles = `
    .form-editperbaikan {
      margin: 20px;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f9f9f9;
    }

    .table-caption {
      text-align: center;
      margin-bottom: 20px;
      color: #333;
      font-size: 24px;
    }

    .form-group {
      margin-bottom: 15px;
    }

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
      color: #555;
    }

    .form-control {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }

    .form-control[disabled] {
      background-color: #f4f4f4;
      color: #555;
    }

    .btn-submit {
      padding: 8px 20px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }

    .btn-submit:hover {
      background-color: #0056b3;
    }
  `;

  return (
    <div>
      {/* <p>ID Konsultasi: {id}</p> */}
      <style>{styles}</style>
      <form className='form-editperbaikan' onSubmit={handleFormSubmit}>
        <h3 className='table-caption'>Form Edit Perbaikan</h3>
        <div className='form-group'>
          <label>Nama:</label>
          <input
            type='text'
            name='nama'
            value={data.nama}
            onChange={handleInputChange}
            className='form-control'
            disabled
          />
        </div>
        <div className='form-group'>
          <label>Jenis Perangkat:</label>
          <input
            type='text'
            name='jenis_perangkat'
            value={data.jenis_perangkat}
            onChange={handleInputChange}
            className='form-control'
            disabled
          />
        </div>
        <div className='form-group'>
          <label>Kerusakan yang dialami:</label>
          <input
            type='text'
            name='keluhan'
            value={data.keluhan}
            onChange={handleInputChange}
            className='form-control'
            disabled
          />
        </div>
        <div className='form-group'>
          <label>Tindakan:</label>
          <textarea
            name='respond'
            value={data.respond}
            onChange={handleTextAreaChange}
            className='form-control'
            rows='4'
            maxLength='500'
          />
        </div>
        <div className='form-group'>
          <button type='submit' className='btn-submit'>Perbarui</button>
        </div>
      </form>
    </div>
  );
}

export default FormRespondKonsultasiPerangkat;
