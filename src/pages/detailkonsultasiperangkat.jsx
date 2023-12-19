import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import TablePerbaikan from '../components/tableperbaikan';
// import TableKonsultasiPerangkat from '../components/tablekonsultasiperangkat';
import NavbarUser from "../components/navbaruser";
import Footer from '../components/footer';
import DetailRespondKonsultasiPerangkat from '../components/detail_konsultasiperangkat';

function DetailKonsultasiPerangkat() {
    return (
        
      <div>
        <NavbarUser />

        <DetailRespondKonsultasiPerangkat />
          
        <Footer />
  
      </div>
    );
  }
  
  export default DetailKonsultasiPerangkat;