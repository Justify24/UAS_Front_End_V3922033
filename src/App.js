import React from 'react';
import './App.css'; // Pastikan Anda telah mengimpor file CSS Anda dengan benar
// import NavbarLanding from './components/navbar'; // Pastikan path sesuai dengan struktur proyek Anda\
// import Hero from './components/hero';
// import About from './components/about';
// import Keunggulan from './components/keunggulan';
// import Fitur from './components/fitur';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Testimoni from './components/testimoni';
// import Footer from './components/footer';
// import { Route, Routes} from "react-router-dom";
// import LoginPage from "./pages/login";
// import RegisterPage from './pages/register';
import Home from './pages/home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import Perbaikan from './pages/konsul_perbaikan';
import AjuanPerbaikan from './pages/ajuanperbaikan';
import EditPerbaikan from './pages/editperbaikan';
// import FormEditPerbaikan from './components/form_updateperbaikan';
import DashboardUser from './pages/dashboarduser';
import DashboardKurir from './pages/dashboardkurir';
import AmbilPerangkat from './pages/ambilperangkat';
import KembalikanPerangkat from './pages/kembalikanperangkat';
import AnalisaKerusakan from './pages/analisakerusakan';
import KonsultasiPerangkat from './pages/konsultasiperangkat';
import AjuanKonsultasiPerangkat from './pages/ajuankonsultasi';
import RespondKonsultasiPerangkat from './pages/respondkonsultasiperangkat';
import DetailKonsultasiPerangkat from './pages/detailkonsultasiperangkat';
import UpdateKonsultasiPerangkat from './pages/updatekonsultasiperangkat';
import LoginPageAdmin from './pages/loginadmin';
import LoginPageTeknisi from './pages/loginteknisi';
import RegisterPageAdmin from './pages/registeradmin';
import RegisterPageTeknisi from './pages/registerteknisi';
import DashboardAdmin from './pages/dashboardadmin';
import DashboardTeknisi from './pages/dashboardteknisi';
import KonsultasiPerangkatAdmin from './pages/konsultasiperangkatadmin';
import KonsultasiPerangkatTeknisi from './pages/konsultasiperangkatteknisi';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registrasi" element={<RegisterPage />} />
        <Route path="/perbaikan" element={<Perbaikan />} />
        <Route path='/ajuanperbaikan' element={<AjuanPerbaikan/>} />
        {/* <Route path='/editperbaikan/:id' element={<FormEditPerbaikan/>} /> */}
        <Route path='/editperbaikan/:id' element={<EditPerbaikan/>} />
        <Route path='/dashboarduser' element={<DashboardUser/>} />
        <Route path='/dashboardkurir' element={<DashboardKurir/>} />
        <Route path='/Ambilperangkat' element={<AmbilPerangkat/>} />
        <Route path='/Kembalikanperangkat' element={<KembalikanPerangkat/>} />
        <Route path='/analisakerusakan' element={<AnalisaKerusakan/>} />
        <Route path='/konsultasiperangkat' element={<KonsultasiPerangkat/>} />
        <Route path='/ajuankonsultasiperangkat' element={<AjuanKonsultasiPerangkat />} />
        <Route path='respondkonsultasi/:id' element={<RespondKonsultasiPerangkat />} />
        <Route path='detailkonsultasi/:id' element={<DetailKonsultasiPerangkat />} />
        <Route path='updatekonsultasi/:id' element={<UpdateKonsultasiPerangkat />} />
        <Route path="/loginadmin" element={<LoginPageAdmin />} />
        <Route path="/registeradmin" element={<RegisterPageAdmin />} />
        <Route path="/dashboardadmin" element={<DashboardAdmin />} />
        <Route path='/konsultasiperangkatadmin' element={<KonsultasiPerangkatAdmin />} />
        <Route path="/loginteknisi" element={<LoginPageTeknisi />} />
        <Route path="/registerteknisi" element={<RegisterPageTeknisi />} />
        <Route path="/dashboardteknisi" element={<DashboardTeknisi />} />
        <Route path='/konsultasiperangkatteknisi' element={<KonsultasiPerangkatTeknisi />} />
      

      </Routes>
    </Router>
  );
};

export default App;
