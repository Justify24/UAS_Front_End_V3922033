import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import TablePerbaikan from '../components/tableperbaikan';
import TableKonsultasiPerangkat from '../components/tablekonsultasiperangkat';
// import NavbarLanding from '../components/navbar';
import Footer from '../components/footer';
import NavbarUser from '../components/navbaruser';

function KonsultasiPerangkat() {
    return (
        
      <div>
        <NavbarUser />

        <TableKonsultasiPerangkat />
          
        <Footer />
  
      </div>
    );
  }
  
  export default KonsultasiPerangkat;