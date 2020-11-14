import React, { Component } from "react";
import "../../assets/NavBar.css";
import { Button, Text, View, Linking } from "react-native";

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
                        <li className='about'>
                            <span id='myBtn'>About</span>
                        </li>
                        <li className='contact'>
                            <span
                                id='myContact'
                                onClick={() =>
                                    Linking.openURL(
                                        "mailto:donovanle18@gmail.com"
                                    )
                                }
                                target='_blank'
                            >
                                Contact
                            </span>
                        </li>

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
