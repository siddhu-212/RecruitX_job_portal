import React from 'react';
import logo from './logo.png';
import './header.css';
import { Link } from "react-router-dom";
import { Navlink } from "react-router-dom";

function Header() {
    return (
        <header className="Header">
            <div id="Navbar">
                <div id="logo">
                    <img src={logo} className="Header-logo" alt="logo" />
                </div >

                <div id="Navlinks">
                    <a className="Navlinks">Jobs</a>

                    <Link to="/companies" className="Navlinks">Companies</Link>                
                    <a className="Navlinks">About Us</a>
                
                    <a className="Navlinks">Contact </a>
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