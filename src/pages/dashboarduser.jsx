import React from 'react';
import NavbarUser from '../components/navbaruser';
import Footer from '../components/footer';
import Hero from '../components/hero';

function DashboardUser() {
  return (
    <div>
      <NavbarUser />
      <Hero />
      {/* Jika Anda ingin menggunakan komponen FormEditPerbaikan, tambahkan di sini */}
      {/* <FormEditPerbaikan /> */}
      <Footer />
    </div>
  );
}

export default DashboardUser;
