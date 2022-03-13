import React from "react";
import './App.css'
import Slider from 'components/Sliders/Sliders'
import Header from 'components/Header/Header'
import Footer from "components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Slider />
    </div>
  );
}

export default App;
