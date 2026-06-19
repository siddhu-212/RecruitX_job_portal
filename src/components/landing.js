import React from 'react';
import Header from './header';
import './landing.css';
import landing from './landing.png';
import Footer from './footer.js';
import { FaBriefcase } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaEllipsisH } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import google from './google_icon.webp';
import amazon from './amazon_icon.png';
import microsoft from './microsoft_icon.png';
import swiggy from './swiggy_icon.webp';


function Landing() {
    return (
        <div>
            <Header />
            <div className="landing-img-container">
                <img src={landing} className="landing-image" alt="landing-image" />

                <div className="title">
                    <h1>
                        Find Your <br />
                        Dream <span className="highlight">Job</span> Faster
                    </h1>
                </div>

                <div className="Description">
                    <p>
                        Discover thousands of job opportunites from<br />
                        top companies and build you future
                    </p>
                </div>

                
                <div className="JobButton-Container">
                    <button className="JobButton"><FaBriefcase /> Find Jobs</button>
                </div>

                <div className="stats-section">
                    <div className="card1">
                        <div className="card1-icon">
                            <FaBriefcase />
                        </div>
                        <div className="card1-text">
                            <span>
                                10,000+ <br />
                                <span className="card-text"> Active Jobs </span>
                            </span>
                        </div>

                    </div>
                        
                    <div className="card2">
                        <div className="card2-icon">
                            <FaBuilding />
                        </div>
                        <div className="card2-text">
                            <text>
                                500+ <br />
                                <span className="card-text"> Top Companies</span>
                            </text>
                        </div>
                    </div>

                    <div className="card3">
                        <div className="card3-icon">
                            <FaUsers />

                        </div>
                        <div className="card3-text">
                            <text>
                                50,000+ <br />
                                <span className="card-text">Happy Candidates</span>
                            </text>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text">
                <text className="text1">WHY CHOOSE RECRUITX</text>
                <h1 className="text2">Everything You Need To Succeed</h1>
            </div>

            <div className="featureCards">
                <div className="fc">
                    <div className="fc-icon">
                        <FaSearch />
                    </div>
                    <div className="fc-div2">
                        <h5>Smart Job Search</h5>
                    </div>
                    <div className="fc-div3">
                        <p>Find jobs that match your skills and preferences.</p>
                    </div>
                </div>

                <div className="fc">
                    <div className="fc-icon">
                        <FaPaperPlane />
                    </div>
                    <div className="fc-div2">
                        <h5>Easy Applications</h5>
                    </div>
                    <div className="fc-div3">
                        <p>Apply to jobs with a single click in just seconds.</p>
                    </div>
                </div>

                <div className="fc">
                    <div className="fc-icon">
                        <FaFileAlt />
                    </div>
                    <div className="fc-div2">
                        <h5>Resume Builder</h5>
                    </div>
                    <div className="fc-div3">
                        <p>Create a professional resume that stands out.</p>
                    </div>
                </div>

                <div className="fc">
                    <div className="fc-icon">
                        <FaCircleCheck />
                    </div>
                    <div className="fc-div2">
                        <h5>Verified Employers</h5> 
                    </div>
                    <div className="fc-div3">
                        <p>Connect with trusted companies and recruiters.</p>
                    </div>
                </div>
            </div>
            <h4 className="text3">POPULAR CATEGORIES</h4>
            <div className="categoryCards">
                    <div className="cc">
                        <div className="cc-icon"><FaCode /></div>
                        <div className="cc-text"><span>Development</span></div>
                    </div>

                    <div className="cc">
                        <div className="cc-icon"> <FaPencilAlt /></div>
                        <div className="cc-text"><span>Design</span></div>
                    </div>

                    <div className="cc">
                        <div className="cc-icon"><FaBullhorn /></div>
                        <div className="cc-text"><span>Marketing</span></div>
                    </div>

                    <div className="cc">    
                        <div className="cc-icon"><FaChartBar /></div>
                        <div className="cc-text"><span>Data Science</span></div>
                    </div>

                    <div className="cc">
                        <div className="cc-icon"><FaDollarSign /></div>
                        <div className="cc-text"><span>Finance</span></div>
                    </div>
                    
                    <div className="cc">
                        <div className="cc-icon"><FaUserTie /></div>
                        <div className="cc-text"><span>HR</span></div>
                    </div>

                    <div className="cc">
                        <div className="cc-icon"><FaEllipsisH/></div>
                        <div className="cc-text"><span>More</span></div>
                    </div>
            </div>
            <div className="jobCards">
                <div className="jc-header">
                    <div className="jc-header1">
                        <h5>FEATURED JOBS</h5>
                    </div>
                    <div className="jc-header2">
                        <span>View all Jobs →</span>
                    </div>
                </div>

                <div className="jc-container">
                    <div className="jc-card">
                        <div className="jc-card_div1">
                            <div className="jc-card_icon"><img src={google} className="jc-card_icon" alt="Google" /></div>
                            <div className="jc-card_bm"><FaRegBookmark /></div>
                        </div>
                        <div className="jc-card_jobrole"><span>Frontend Developer</span></div>
                        <div className="jc-card_company"><span>Google</span></div>
                        <div className="jc-card_location"><span>Banglore,India</span></div>
                        <div className="jc-card_div5">
                            <div className="jc-card_salary"><span>₹12-18 LPA</span></div>
                            <div className="jc-card_jobtype"><span> Full time</span></div>
                        </div>
                        <div className="jc-card_button"><button id="jc-card_button">Apply Now</button></div>
                    </div>

                    <div className="jc-card">
                        <div className="jc-card_div1">
                            <div className="jc-card_icon"><img src={microsoft} className="jc-card_icon" alt="Microsoft" /></div>
                            <div className="jc-card_bm"><FaRegBookmark /></div>
                        </div>
                        <div className="jc-card_jobrole"><span>Software Engineer</span></div>
                        <div className="jc-card_company"><span>Microsoft</span></div>
                        <div className="jc-card_location"><span>Hyderabad,India</span></div>
                        <div className="jc-card_div5">
                            <div className="jc-card_salary"><span>₹12-18 LPA</span></div>
                            <div className="jc-card_jobtype"><span>Full-time</span></div>
                        </div>
                        <div className="jc-card_button"><button id="jc-card_button">Apply Now</button></div>
                    </div>

                    <div className="jc-card">
                        <div className="jc-card_div1">
                            <div className="jc-card_icon"><img src={amazon} className="jc-card_icon" alt="Amazon" /></div>
                            <div className="jc-card_bm"><FaRegBookmark /></div>
                        </div>
                        <div className="jc-card_jobrole"><span>Product Manager</span></div>
                        <div className="jc-card_company"><span>Amazon</span></div>
                        <div className="jc-card_location"><span>Pune,India</span></div>
                        <div className="jc-card_div5">
                            <div className="jc-card_salary"><span>₹12-18 LPA</span></div>
                            <div className="jc-card_jobtype"><span>Full-time</span></div>
                        </div>

                        <div className="jc-card_button"><button id="jc-card_button">Apply Now</button></div>
                    </div>

                    <div className="jc-card">
                        <div className="jc-card_div1">
                            <div className="jc-card_icon"><img src={swiggy} className="jc-card_icon" alt="Swiggy" /></div>
                            <div className="jc-card_bm"><FaRegBookmark /></div>
                        </div>
                        <div className="jc-card_jobrole"><span>UI/UX Designer</span></div>
                        <div className="jc-card_company"><span>Swiggy</span></div>
                        <div className="jc-card_location"><span>Banglore,India</span></div>
                        <div className="jc-card_div5">
                            <div className="jc-card_salary"><span>₹12-18 LPA</span></div>
                            <div className="jc-card_jobtype"><span>Full-time</span></div>
                        </div>
                        <div className="jc-card_button"><button id="jc-card_button">Apply Now</button></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Landing;