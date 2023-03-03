import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Navbar from './Laoyouts/Navbar';
import Footer from './Laoyouts/footer';
import LeftAside from './Laoyouts/leftAside';
import RightAside from './Laoyouts/rightAside';
import Article from './Laoyouts/article';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LeftAside/>
    <RightAside/> 
    <BrowserRouter>
    <Article/>
    </BrowserRouter>
    <Footer/>
  </React.StrictMode>
);

reportWebVitals();
