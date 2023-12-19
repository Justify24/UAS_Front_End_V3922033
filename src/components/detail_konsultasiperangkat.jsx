import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const styles = {
  formEditPerbaikan: {
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    width: '100%', // Mengatur lebar form menjadi 80% dari lebar layar
    // maxWidth: '1080px', // Batasan maksimum lebar form
  },
  tableCaption: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#555',
  },
  formControl: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    backgroundColor: '#f4f4f4',
    color: '#555',
  },
  btnSubmit: {
    padding: '8px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    display: 'block',
    margin: 'auto',
    marginTop: '10px',
  },
  btnSubmitHover: {
    backgroundColor: '#0056b3',
  },
};

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
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8080/update-konsultasiperangkat/${id}`, data);
      alert("Data berhasil diperbarui");
      window.location.href = '/konsultasiperangkat';
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
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form style={styles.formEditPerbaikan} onSubmit={handleFormSubmit}>
        <h3 style={styles.tableCaption}>Form Edit Perbaikan</h3>
        <div style={styles.formGroup}>
          <label style={styles.label}>Nama:</label>
          <input
            type='text'
            name='nama'
            value={data.nama}
            onChange={handleInputChange}
            style={styles.formControl}
            disabled
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Jenis Perangkat:</label>
          <input
            type='text'
            name='jenis_perangkat'
            value={data.jenis_perangkat}
            onChange={handleInputChange}
            style={styles.formControl}
            disabled
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Kerusakan yang dialami:</label>
          <input
            type='text'
            name='keluhan'
            value={data.keluhan}
            onChange={handleInputChange}
            style={styles.formControl}
            disabled
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Tindakan:</label>
          <textarea
            name='respond'
            value={data.respond}
            onChange={handleTextAreaChange}
            style={{ ...styles.formControl, height: '200px' }} // Modify height here
            rows='4'
            maxLength='500'
            disabled
          />
        </div>
      </form>
    </div>
  );
}

export default FormRespondKonsultasiPerangkat;
