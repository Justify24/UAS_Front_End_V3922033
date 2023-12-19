import React from 'react';
// import NavbarKurir from '../components/navbarkurir';
import Footer from '../components/footer';
import Hero from '../components/hero';
import NavbarAdmin from '../components/navbaruseradmin';

function DashboardAdmin() {
  return (
    <div>
      <NavbarAdmin />
      <Hero />
      {/* Jika Anda ingin menggunakan komponen FormEditPerbaikan, tambahkan di sini */}
      {/* <FormEditPerbaikan /> */}
      <Footer />
    </div>
  );
}

export default DashboardAdmin;
