import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "../../assets/Noteful.css";

class Noteful extends Component {
    static state = {};
    render() {
        return (
            <div className='main-sect'>
                <div className='noteful-page'></div>
                <div className='description'>
                    <p>
                        Noteful is a note keeping application. Users can add
                        folders in which they can add notes to the folders. It
                        was built using React.js, Node.js, Express, SQL, and
                        PostgreSQL
                    </p>
                </div>
                <div className='controllers'>
                    <div className='link'>
                        <span onClick={() => this.props.history.goBack()}>
                            <FaArrowLeft />
                            Go Back
                        </span>
                        <NavLink to='/sights'>
                            Next Project <FaArrowRight />
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Noteful);
