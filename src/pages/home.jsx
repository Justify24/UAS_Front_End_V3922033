import React from 'react';
// import './App.css'; // Pastikan Anda telah mengimpor file CSS Anda dengan benar
import NavbarLanding from '../components/navbar';
import Hero from '../components/hero';
import About from '../components/about';
import Keunggulan from '../components/keunggulan';
import Fitur from '../components/fitur';
import Testimoni from '../components/testimoni';
import Footer from '../components/footer';
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

function Home() {
  return (
    <div>
      <NavbarLanding />

      <Hero />

      <About />

      <Keunggulan />

      <Fitur />

      <Testimoni />
        
      <Footer />

      
    </div>
  );
}

export default Home;

