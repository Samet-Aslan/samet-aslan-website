import React from 'react';
import 'bulma/css/bulma.css';
import Navigation from "./components/Navigation.js";
import Cover from "./components/Cover.js";
import Footer from './components/Footer.js';
import MyParticles from './components/MyParticles.js';


function App() {
  return (
    <div className="App">
      <MyParticles/>
      <Cover/>
      <Footer/>
    </div>
  );
}

export default App;
