import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import NavBar from "./components/header/NavBar";
import LandingPage from "./components/main/LandingPage";
import Noteful from "./components/main/Noteful";
import Sights from "./components/main/Sights";
import Portfolio from "./components/main/Portfolio";
import "./assets/App.scss";

function App() {
    return (
        <div className='wrapper'>
            <div className='page-bg'></div>

            <div className='animation-wrapper'>
                <div className='particle particle-1'></div>
                <div className='particle particle-2'></div>
                <div className='particle particle-3'></div>
                <div className='particle particle-4'></div>
            </div>
            <NavBar />
            <div className='bg-headers'>
                <h3>&lt;Built by: Donovan Le/&gt;</h3>
                <h3>&lt;Full-stack developer/&gt;</h3>
            </div>
            <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className='switch-wrapper'
            >
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/noteful' component={Noteful} />
                <Route exact path='/sights' component={Sights} />
                <Route exact path='/portfolio' component={Portfolio} />
            </AnimatedSwitch>
        </div>
    );
}

export default App;
