import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { grommet, Grommet } from 'grommet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Grommet theme={grommet}>
    <App />
  </Grommet>
);