import React from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useRestoreUser from './customHooks/useRestoreUser';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import MyBox from './components/MyBox';
import DisplayCollection from './components/DisplayCollection';
import DisplayWish from './components/DisplayWish';
import CreateWish from './components/CreateWish';
// import Wish from './components/Wish';
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
          render={props => <DisplayCollection {...props} />}
        />
        <Route 
          path='/my-wishes/create'
          render={props => <CreateWish {...props} />}
        />
        <Route 
          exact path='/my-wishes/:id'
          render={props => <DisplayWish {...props} />}
        />
        <Route path='*' render={props => <Error {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
