import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "../../assets/Sights.css";

class Sights extends Component {
    state = {};
    render() {
        return (
            <div className='main-sect'>
                <div className='sights-page'></div>
                <div className='description'>
                    <p>
                        Sights In Cali, is a fullstack web application built
                        using React, CSS, Node, PostgreSQL, and sql. Users can
                        use the site to discover new things to see and do in
                        California. They are able to log in/sign up to see the
                        sights in their city, bookmark sights, or submit a
                        sight.
                    </p>
                </div>
                <div className='controllers'>
                    <div className='link'>
                        <span onClick={() => this.props.history.goBack()}>
                            <FaArrowLeft />
                            Go Back
                        </span>
                        <NavLink to='/portfolio'>
                            Next Project <FaArrowRight />
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Sights);
