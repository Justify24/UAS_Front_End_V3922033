import React from 'react';
import NavbarKurir from '../components/navbarkurir';
import Footer from '../components/footer';
import Hero from '../components/hero';

function DashboardKurir() {
  return (
    <div>
      <NavbarKurir />
      <Hero />
      {/* Jika Anda ingin menggunakan komponen FormEditPerbaikan, tambahkan di sini */}
      {/* <FormEditPerbaikan /> */}
      <Footer />
    </div>
  );
}

export default DashboardKurir;
