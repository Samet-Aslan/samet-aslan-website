import React from 'react';
import 'bulma/css/bulma.css';
import Navigation from "./components/Navigation.js";
import Cover from "./components/Cover.js";
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Cover/>
      <Footer/>
    </div>
  );
}

export default App;
