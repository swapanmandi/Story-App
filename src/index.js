import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Laoyouts/Navbar';
import Footer from './Laoyouts/footer';
import LeftAside from './Laoyouts/leftAside';
import RightAside from './Laoyouts/rightAside';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <LeftAside/>
    <RightAside/>
    <App />
    <Footer/>
  </React.StrictMode>
);

reportWebVitals();
