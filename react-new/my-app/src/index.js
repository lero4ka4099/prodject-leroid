import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import CounterProvider from "./components/dz-8/CounterProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <CounterProvider>
          <App />
      </CounterProvider>
  </BrowserRouter>
);
