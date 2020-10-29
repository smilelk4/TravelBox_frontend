import React from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useRestoreUser from './customHooks/useRestoreUser';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import MyBox from './components/MyBox';
import Collection from './components/Collection';
import Footer from './components/Footer';
import Error from './components/Error';

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  useRestoreUser();

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
