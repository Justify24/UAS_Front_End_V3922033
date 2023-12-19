import React from 'react';
import NavbarKurir from '../components/navbarkurir';
import Footer from '../components/footer';
// import Hero from '../components/hero';
import TableAntarPerangkat from '../components/tableantarperangkat';

function AmbilPerangkat() {
  return (
    <div>
      <NavbarKurir />
      <TableAntarPerangkat />
      {/* Jika Anda ingin menggunakan komponen FormEditPerbaikan, tambahkan di sini */}
      {/* <FormEditPerbaikan /> */}
      <Footer />
    </div>
  );
}

export default AmbilPerangkat;
