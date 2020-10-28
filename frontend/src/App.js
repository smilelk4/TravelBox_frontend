import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { ProtectedRoute, PrivateRoute } from '../src/utils/route-util';
import { Redirect, Route } from 'react-router-dom';
import { restoreUserStore } from './actions/userAction';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import MyBox from './components/MyBox';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.userInfo);
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  // useEffect(() => {
  //   if (!isLoggedIn && userInfo) {
  //     dispatch(restoreUserStore(userInfo.token)); 
  //   }
  // }, [isLoggedIn, userInfo, dispatch]);
  useEffect(() => {
    console.log('1111', userInfo)
    if (!isLoggedIn && userInfo) {
      dispatch(restoreUserStore(userInfo.token)); 
    }
  }, [userInfo, dispatch]);

  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path='/' render={props =>
          <>
            <Header />
            <Main />
            <Footer />
          </>
        } />
        <Route 
          path='/my-box'
          render={props => <MyBox {...props} />}
        />
        {/* <PrivateRoute 
          path = '/'
          isLoggedIn = {isLoggedIn}
          component={MyBox}
        /> */}
      </Switch>
    </div>
  );
}

export default App;
