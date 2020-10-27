import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { ProtectedRoute, PrivateRoute } from '../src/utils/route-util';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import MyBox from './components/MyBox';
import Footer from './components/Footer';

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  useEffect(() => {
    console.log('useeffect from app');
    if (!isLoggedIn) {

    }
  });

  return (
    <div className="app">
      {isLoggedIn ? (
        <>
          <Navbar />
          <MyBox />
        </>
      ) : (
        <>
          <Navbar />
          <Header />
          <Main />
          <Footer />
        </>
      )}

      <Switch>
        <PrivateRoute 
          path = '/my-box'
          isLoggedIn = {isLoggedIn}
          component={MyBox}
        />
      </Switch>
    </div>
  );
}

export default App;
