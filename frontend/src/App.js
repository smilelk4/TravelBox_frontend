import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { ProtectedRoute, PrivateRoute } from '../src/utils/route-util';
import { restoreUser } from './actions/userAction';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import MyBox from './components/MyBox';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();
  const userToken = useSelector(state => state.userInfo.token);
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  useEffect(() => {
    console.log('useeffect from app');
    if (!isLoggedIn) {
      dispatch(restoreUser(userToken)); 
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
