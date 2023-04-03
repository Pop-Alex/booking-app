import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {PlaceProvider} from './context'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PlaceProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </PlaceProvider>
  </React.StrictMode>
);


