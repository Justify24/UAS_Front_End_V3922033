import React from 'react';
// import NavbarKurir from '../components/navbarkurir';
import Footer from '../components/footer';
import Hero from '../components/hero';
import NavbarTeknisi from '../components/navbaruserteknisi';

function DashboardTeknisi() {
  return (
    <div>
      <NavbarTeknisi />
      <Hero />
      {/* Jika Anda ingin menggunakan komponen FormEditPerbaikan, tambahkan di sini */}
      {/* <FormEditPerbaikan /> */}
      <Footer />
    </div>
  );
}

export default DashboardTeknisi;
