import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.scss';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store/configureStore';

const userInfo = localStorage.getItem('user-info');
let store;
if (userInfo) store = configureStore({ token: JSON.parse(userInfo).token });
else store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
