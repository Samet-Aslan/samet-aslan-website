import React from 'react';
import 'bulma/css/bulma.css';
import Cover from "./components/Cover.js";
import Footer from './components/Footer.js';
import MyParticles from './components/MyParticles.js';
import TechStackSection from './components/TechStackSection.js';
import ProjectSection from './components/ProjectsSection.js';
import Navigation from './components/Navigation.js';


function App() {
  return (
    <div className="App">
      <MyParticles/>
      <Cover/>
      <TechStackSection/>
      <ProjectSection/>
      <Footer/>
    </div>
  );
}

export default App;
