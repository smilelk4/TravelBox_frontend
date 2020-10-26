import React from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { ProtectedRoute, PrivateRoute } from '../src/utils/route-util';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  return (
    <div className="app">
      <Navbar />
      <Header />
      <Main />
      <Footer />

      <Switch>

      </Switch>
    </div>
  );
}

export default App;
