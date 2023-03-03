import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
       <>
            <div>
            <nav className="navbar">
                <a href="/" className="app-title">Short Kids Story</a>

                <ul className="navbar-nav">
                <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/latest" className="nav-link">Latest</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/categories" className="nav-link">Categories</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
               
              </nav>
            </div>
            
          
       
            </>
    );
    }


    // function Home() {
    //     return(
          
    //     )
    // }

export default Navbar;
