import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { BlobCursor } from "./components/Mouse";
import { Particles } from "./components/Particles";
import React from 'react';
import './footer.scss'
import './particle.scss'
import './contact.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Experience } from './components/Experience';
import Home from './components/Home';



const App =() =>{
  
  return (
    <BrowserRouter>
    <div className="App">
      <Particles /> 
      <BlobCursor />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/experience" element={<Experience />}/>
      </Routes>
      <Footer />

    </div>
    </BrowserRouter>
  );
}

export default App;
