import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TablePerbaikan from '../components/tableperbaikan';
import NavbarLanding from '../components/navbar';
import Footer from '../components/footer';

function Perbaikan() {
    return (
        
      <div>
        <NavbarLanding />

        <TablePerbaikan />
          
        <Footer />
  
      </div>
    );
  }
  
  export default Perbaikan;