import React from 'react';
import logo from './logo.png';
import './header.css';

function Header() {
    return (
        <header className="Header">
            <div id="Navbar">
                <div id="logo">
                    <img src={logo} className="Header-logo" alt="logo" />
                </div >

                <div id="Navlinks">
                    <a>Jobs</a>

                    <a>Companies</a>
                
                    <a>About Us</a>
                
                    <a>Contact </a>
                </div>

                <div id="AuthButtons">
                    <button id="login-button">Login</button>
                    <button id="signup-button">Signup</button>
                </div>
            </div>

        </header>

    );
}
export default Header;