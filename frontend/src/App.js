import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      {/* <Navbar /> */}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
