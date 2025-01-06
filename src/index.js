import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import Store from './redux/store/Store';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={Store}>
  <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <App />
  </Provider>
  </BrowserRouter>
);


reportWebVitals();
