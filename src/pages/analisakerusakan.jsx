import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import TablePerbaikan from '../components/tableperbaikan';
// import TableKonsiltasiPerangkat from '../components/tablekonsultasiperangkat';
import TableAnalisaPerangkat from '../components/tableanalisaperbaikan';
import NavbarUser from "../components/navbaruser";
import Footer from '../components/footer';

function AnalisaKerusakan() {
    return (
        
      <div>
        <NavbarUser />
          
        <TableAnalisaPerangkat />
          
        <Footer />
  
      </div>
    );
  }
  
  export default AnalisaKerusakan;