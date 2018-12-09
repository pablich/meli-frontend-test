import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './app';
/* eslint-disable */
const element = (
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>
);

ReactDOM.render(
  element,
  document.getElementById('app'),
);
