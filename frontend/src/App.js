import React, { useEffect } from 'react';
import AOS from 'aos';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  // useEffect(() => {
  //   AOS.init({
  //     once: true,
  //     duration: 700,
  //     easing: 'ease-out-cubic'
  //   });
  // });

  return (
    <div className="app">
      <Navbar />
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
