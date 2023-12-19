import axios from "axios";
import { useState } from "react";

function Formpengajuankonsultasi() {
  const [nama, setNama] = useState("");
  const [jenis_perangkat, SetJenisPerangkat] = useState("");
  const [keluhan, SetKeluhan] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (nama === "" || jenis_perangkat === "" || keluhan === "") {
      alert("Data gagal diajukan, data tidak boleh kosong");
    } else {
      try {

        await axios.post('http://localhost:8080/insert-konsultasiperangkat', {
          nama: nama,
          jenis_perangkat: jenis_perangkat,
          keluhan: keluhan,
        });

        alert("Data berhasil Diajukan");
        window.location.href = '/konsultasiperangkat';

        // Redirect atau navigasi ke halaman perbaikan setelah pengajuan berhasil
        // window.location.href = '/perbaikan';
      } catch (error) {
        console.error('Error adding data ajuan:', error);
        alert("Data gagal ditambahkan, terjadi kesalahan");
      }
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
      <style>
        {`
          .form-ajuanperbaikan {
            width: 100%; /* Ubah lebar formulir */
            max-width: px; /* Batasi lebar maksimum */
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
            font-weight: bold; /* Menjadikan teks tebal */
          }

          .label-ajuanperbaikan {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
            color: #555;
          }

          .input-form {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 3px;
            margin-bottom: 15px;
          }

          .button-submit {
            padding: 8px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            display: block;
            margin: 0 auto;
          }

          .button-submit:hover {
            background-color: #0056b3;
          }

          .input-form.keluhan {
            /* Mengatur input keluhan menjadi textarea */
            height: 100px;
            padding: 8px;
            border-radius: 3px;
            resize: vertical; /* Memperbolehkan perubahan tinggi vertikal */
          }
        `}
      </style>
      <form className='form-ajuanperbaikan' onSubmit={handleFormSubmit}>
        <caption className='table-caption'>Ajuan Konsultasi</caption>
        <div>
          <label className='label-ajuanperbaikan'>Nama:</label>
          <input
            type='text'
            className='input-form'
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder='Masukkan nama'
          />
        </div>
        <div>
          <label className='label-ajuanperbaikan'>Pilih Jenis Perangkat:</label>
          <select
            className='input-form'
            value={jenis_perangkat}
            onChange={(e) => SetJenisPerangkat(e.target.value)}
          >
            <option value=''>Pilih jenis perangkat</option>
            <option value='laptop'>Laptop</option>
            <option value='komputer'>Komputer</option>
            <option value='lain-lain'>Lain-lain</option>
          </select>
        </div>
        <div>
          <label className='label-ajuanperbaikan'>Keluhan Perangkat:</label>
          <textarea
            className='input-form keluhan' /* Menambahkan kelas 'keluhan' untuk input keluhan */
            value={keluhan}
            onChange={(e) => SetKeluhan(e.target.value)}
            placeholder='Masukkan Jenis Kerusakan'
            rows='10' /* Menentukan jumlah minimal baris */
            maxLength='1000' /* Menentukan panjang maksimum teks */
          ></textarea>
        </div>
        <div>
          <button type='submit' className='button-submit'>Ajukan</button>
        </div>
      </form>
    </div>
  );
}

export default Formpengajuankonsultasi;
