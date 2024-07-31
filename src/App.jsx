import React from 'react';
import Navbar from './pages/navbar/Navbar';
import Hero from './pages/hero/Hero';
import About from './pages/about/About';
import Maximize from './pages/maximize/Maximize';
import Join from './pages/join/Join';
import Footer from './pages/footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Maximize/>
      <Join/>
      <Footer/>
    </>
  );
}

export default App;
