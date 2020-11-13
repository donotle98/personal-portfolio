import React, { Component } from "react";
import "../../assets/NavBar.css";

class NavBar extends Component {
    state = {};
    render() {
        return (
            <div className='nav-bar'>
                <div className='logo'>
                    &lt;<span>D</span>
                    <span>T</span>
                    <span>L</span>
                    <span>E</span>/&gt;
                </div>
                <div className='nav-links'>
                    <ul>
                        <li className='about'>About</li>
                        <li className='contact'>Contact</li>

                        <li>
                            <a
                                href='https://github.com/donotle98'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Github
                            </a>
                        </li>

                        <li>
                            <a
                                href='https://www.linkedin.com/in/dtle647/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavBar;
