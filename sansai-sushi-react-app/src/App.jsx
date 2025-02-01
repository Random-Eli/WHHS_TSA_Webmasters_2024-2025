import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Sourcing from './Pages/Sourcing'
import Catering from './Pages/Catering'
import References from './Pages/References'
import Footer from "./Footer"

function App() {
  return(
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path = "/" element={<Home />}/>
        <Route path = "/Menu" element={<Menu />}/>
        <Route path = "/Sourcing" element={<Sourcing />}/>
        <Route path = "/Catering" element={<Catering />}/>
        <Route path = "/References" element={<References />}/>
      </Routes>
      < Footer/>
    </div>
  
  );
}

export default App
