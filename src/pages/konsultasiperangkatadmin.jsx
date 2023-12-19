import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import TablePerbaikan from '../components/tableperbaikan';
// import TableKonsultasiPerangkat from '../components/tablekonsultasiperangkat';
// import NavbarLanding from '../components/navbar';
import Footer from '../components/footer';
// import NavbarUser from '../components/navbaruser';
import NavbarAdmin from '../components/navbaruseradmin';
import TableKonsultasiPerangkatAdmin from '../components/tablekonsultasiperangkatadmin';

function KonsultasiPerangkatAdmin() {
    return (
        
      <div>
        <NavbarAdmin />

        <TableKonsultasiPerangkatAdmin />
          
        <Footer />
  
      </div>
    );
  }
  
  export default KonsultasiPerangkatAdmin;