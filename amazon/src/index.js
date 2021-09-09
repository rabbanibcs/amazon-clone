import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
// import {BrowserRouter as Router,  Switch,  Route} from "react-router-dom";


import {ContextProvider} from './ContextProvider';
ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
    <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
