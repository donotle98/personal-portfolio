import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "../../assets/LandingPage.css";

class LandingPage extends Component {
    state = {};
    render() {
        return (
            <div className='main-sect'>
                <div className='landing-page'>
                    <h2>Donovan Le's Portfolio</h2>
                </div>
                <div className='link'>
                    <NavLink to='/noteful'>
                        Projects <FaArrowRight />
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default LandingPage;
