import axios from "axios";
import { useState, useEffect } from "react";


function Formpengajuan() {
  const [nama, setNama] = useState("");
  const [model_perangkat, setModelperangkat] = useState("");
  const [jenis_kerusakan, SetJeniskerusakan] = useState("");
  const [tindakan, SetTindakan] = useState("");
  const [biaya, SetBiaya] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (nama === "" || model_perangkat === "" || jenis_kerusakan === ""|| tindakan === ""|| biaya === "") {
      alert("Data gagal diajukan, data tidak boleh kosong");
    } else {
      try {
        await axios.post('http://localhost:8080/insert-perbaikan', {
          nama: nama,
          model_perangkat: model_perangkat,
          jenis_kerusakan: jenis_kerusakan,
          tindakan: tindakan,
          biaya: biaya,
        });

        alert("Data berhasil Diajukan");

        window.location.href = '/perbaikan';
      } catch (error) {
        console.error('Error adding data ajuan:', error);
        alert("Data gagal ditambahkan, terjadi kesalahan");
      }
    }
  };

  return (
      <div>
        <form className='form-ajuanperbaikan' onSubmit={handleFormSubmit}>
          <caption className='table-caption'>Form Ajuan Perbaikan</caption>
          <div>
            <label className='label-ajuanperbaikan'></label>
            <input
            type='text'
            className='input-form'
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder='Masukkan nama'
            />
          </div>
          <div>
            <label className='label-ajuanperbaikan'></label>
            <input
            type='text'
            className='input-form'
            value={model_perangkat}
            onChange={(e) => setModelperangkat(e.target.value)}
            placeholder='Masukkan model Perangkat'
            />
          </div>
          <div>
            <label className='label-ajuanperbaikan'></label>
            <input
            type='text'
            className='input-form'
            value={jenis_kerusakan}
            onChange={(e) => SetJeniskerusakan(e.target.value)}
            placeholder='Masukkan Jenis Kerusakan'
            />
          </div>
          <div>
            <label className='label-ajuanperbaikan'></label>
            <input
            type='text'
            className='input-form'
            value={tindakan}
            onChange={(e) => SetTindakan(e.target.value)}
            placeholder='Masukkan Tindakan'
            />
          </div>
          <div>
            <label className='label-ajuanperbaikan'></label>
            <input
            type='text'
            className='input-form'
            value={biaya}
            onChange={(e) => SetBiaya(e.target.value)}
            placeholder='Biaya'
            />
          </div>
          <div>
            <button type='submit'>Ajukan</button>
          </div>
        </form>
      </div>
  );
}

export default Formpengajuan;