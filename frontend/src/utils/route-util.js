import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ path, isLoggedIn, component: Component }) => (
  <Route 
    path={path}
    render={props => isLoggedIn ? <Component {...props} /> : <Redirect to='/' />}
  />
);

export const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route 
    {...rest}
    render={props => rest.needLogin === true ?
      <Redirect to="/" /> : <Component {...props} />
    }
  />
);