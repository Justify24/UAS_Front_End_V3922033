import React from 'react';
import Button from 'react-bootstrap/Button';

function Hero() {
  return (
    <div className="container-fluid px-4 py-5 my-5 text-center" style={{ marginTop: '60px' }}>
      <div className="lc-block mb-4">
        <h2 className="display-2 fw-bold">Solusi Masalah Perangkat Anda dengan <span className="text-primary">FixEr</span></h2>
      </div>
      <div className="lc-block col-lg-6 mx-auto mb-5">
        <p className="lead">Layanan Perbaikan Laptop dan Konsultasi secara online</p>
      </div>

      <div className="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <Button variant="primary" size="lg" className="px-4 me-3" href="#">
          Coba Sekarang
        </Button>
        <Button variant="outline-secondary" size="lg" className="px-4" href="#">
          Tentang Kami
        </Button>
      </div>
      <div className="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center">
      </div>
    </div>
  );
}

export default Hero;
