import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BlobCursor } from "./components/Mouse";
import { Particles } from "./components/Particles";
import React from 'react';
import './footer.scss'
import './particle.scss'
import './contact.scss'



const App =() =>{
  
  return (
    <div className="App">
      <Particles /> 
      <BlobCursor />
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
