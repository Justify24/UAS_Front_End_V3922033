import React from 'react';
import { Container } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import logo from './img/logo_white.png';

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <div className="row">
          <div className="col-md-3">
            <h5>
              <img src={logo} alt="Logo" style={{ width: '150px', height: 'auto' }} />
            </h5>
          </div>
          <div className="col-md-3">
            <h5>Alamat</h5>
            <p>
              <FaMapMarkerAlt /> Alamat Anda di sini
            </p>
          </div>
          <div className="col-md-3">
            <h5>Kontak</h5>
            <p>
              <FaPhone /> Nomor Telepon Anda di sini
            </p>
            <p>
              <FaEnvelope /> Email Anda di sini
            </p>
          </div>
          <div className="col-md-3">
            {/* Tambahkan peta di sini */}
            <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.398739446101!2d111.45583531529538!3d-7.623533994536553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aa8b36a4471d3%3A0x22b724de4f1cf0db!2sSebelas%20Maret%20University%20Madiun%20Campus!5e0!3m2!1sen!2sid!4v1664445251996!5m2!1sen!2sid"
            width="100%"
            height="150"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            ></iframe>
          </div>
        </div>
        <hr className="mt-4 mb-3" style={{ borderColor: 'rgba(255,255,255,0.5)' }} />
        <p className="text-center">
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
