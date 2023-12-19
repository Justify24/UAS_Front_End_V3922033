import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import TablePerbaikan from '../components/tableperbaikan';
// import TableKonsultasiPerangkat from '../components/tablekonsultasiperangkat';
// import NavbarLanding from '../components/navbar';
import Footer from '../components/footer';
// import NavbarUser from '../components/navbaruser';
import TableKonsultasiPerangkatTeknisi from '../components/tablekonsultasiperangkatteknisi';
import NavbarTeknisi from '../components/navbaruserteknisi';

function KonsultasiPerangkatTeknisi() {
    return (
        
      <div>
        <NavbarTeknisi />

        <TableKonsultasiPerangkatTeknisi />
          
        <Footer />
  
      </div>
    );
  }
  
  export default KonsultasiPerangkatTeknisi;