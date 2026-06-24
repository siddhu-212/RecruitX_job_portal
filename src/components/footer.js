import React from 'react';
import './footer.css';
import logo from './logo.png';
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_div">

                <div className="footer-left">

                    <div className="footer-logo"><img src={logo} className="footer-logo_icon" alt="logo" /></div>
                    <div className="footer-description">
                        <p>Your trusted partner in finding the right job and building the right career.</p>
                    </div>
                    <div className="footer-social">
                        <div className="footer-social_icon"><FaLinkedinIn /></div>
                        <div className="footer-social_icon"><FaTwitter /></div>
                        <div className="footer-social_icon"><FaInstagram /></div>
                        <div className="footer-social_icon"><FaFacebookF /></div>
                    </div>

                </div>

                <div className="footer-right">

                    <div className="footer-column">
                        <h5>Quick Links</h5>
                        <a className="footer-text">Home</a>
                        <a className="footer-text">Jobs</a>
                        <a className="footer-text">Companies</a>
                        <a className="footer-text">About Us</a>
                        <a className="footer-text">Contact</a>
                    </div>

                    <div className="footer-column">
                        <h5>For Candidates</h5>
                        <a className="footer-text">Browse Jobs</a>
                        <a className="footer-text">Upload Resume</a>
                        <a className="footer-text">Career Advice</a>
                        <a className="footer-text">Login</a>
                        <a className="footer-text">Sign Up</a>
                    </div>

                    <div className="footer-column">
                        <h5>For Employers</h5>
                        <a className="footer-text">Post a Job</a>
                        <a className="footer-text">Browse Candidate</a>
                        <a className="footer-text">Pricing</a>
                        <a className="footer-text">Employer Login</a>
                    </div>

                    <div className="footer-column">
                        <h5>Support</h5>
                        <a className="footer-text">Help Center</a>
                        <a className="footer-text">Terms of Use</a>
                        <a className="footer-text">Privacy Policy</a>
                        <a className="footer-text">Contact Us</a>
                    </div>

                </div>
            </div>

            <hr className="footer-divider" />
            <div className="footer-bottom">
                © 2026 RecruitX. All rights reserved.
            </div>

        </footer>
    )
}

export default Footer;