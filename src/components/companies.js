import React from 'react';
import Header from './header';
import Footer from './footer.js';
import './companies.css';
import Building from './Building-bro.png';

function Companies() {
    return (
        <div className="comapnies-page">
            <Header />
            <div className="companies-hero">

                <div className="breadcrumb"></div>

                <div className="hero-content">
                    <div className="hero-left">
                        <img src={Building} className="hero-image" alt="Building" />
                    </div>

                    <div className="hero-center">
                        <div >
                            <h1 className="hero-heading">
                                Find Your <br />
                                <span>Dream Company</span>
                            </h1>
                        </div>
                        
                        <div><h4>Explore top companies, discover their culture, and find the perfect place to grow your career.</h4></div>
                        <div></div>
                    </div>

                    <div className="hero-right">
                        <img src={Building} className="hero-image" alt="Building" />
                    </div>
                </div>

            </div>

            <div className="companies-filters">

            </div>

            <Footer />
        </div>

    )
}

export default Companies;