import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>  {/** Engloba todo el codigo que estara dentro de mis rutas. aparte que dentro habran rutas xd*/}
    <App />
  </BrowserRouter>
);
