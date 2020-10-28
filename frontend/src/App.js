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
import Collection from './components/Collection';
import Footer from './components/Footer';
import Error from './components/Error';

function App() {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.userInfo);
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn && userInfo) {
      dispatch(restoreUserStore(userInfo.token)); 
    }
  }, [isLoggedIn, userInfo, dispatch]);

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
          exact path='/my-box'
          render={props => isLoggedIn ? <MyBox {...props} /> : <Error />}
        />
        <Route 
          path='/my-collections/:id'
          render={props => <Collection {...props} />}
        />
        <Route path='*' render={props => <Error />} />
      </Switch>
    </div>
  );
}

export default App;
