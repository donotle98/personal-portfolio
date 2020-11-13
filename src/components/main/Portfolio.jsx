import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "../../assets/Portfolio.css";

class Portfolio extends Component {
    state = {};
    render() {
        return (
            <div className='main-sect'>
                <div className='portfolio-page'></div>
                <div className='description'>
                    <p>
                        This was the first portfolio I have ever built using
                        just HTML and CSS. It was not built mobile first. I
                        focused more on design, I wanted it to be simple,
                        modern, and monotone.
                    </p>
                </div>
                <div className='controllers'>
                    <div className='link'>
                        <span onClick={() => this.props.history.goBack()}>
                            <FaArrowLeft /> Go Back
                        </span>
                        <NavLink to='/'>
                            Next Project <FaArrowRight />
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;
