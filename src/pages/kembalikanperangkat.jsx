import React from 'react';
import NavbarKurir from '../components/navbarkurir';
import Footer from '../components/footer';
// import Hero from '../components/hero';
import TableJemputPerangkat from '../components/tablejemputperangkat';

function KembalikanPerangkat() {
  return (
    <div>
      <NavbarKurir />
      <TableJemputPerangkat />
      {/* Jika Anda ingin menggunakan komponen FormEditPerbaikan, tambahkan di sini */}
      {/* <FormEditPerbaikan /> */}
      <Footer />
    </div>
  );
}

export default KembalikanPerangkat;
