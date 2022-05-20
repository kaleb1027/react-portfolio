import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
    <React.StrictMode>
      <Header />
      <App />
      <Footer />
    </React.StrictMode>,
    document.getElementById('root')
  );