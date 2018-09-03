import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import About from './About';
import siteLogo from '../assets/images/logos/Circle-only-BarlineLogo-black2.png'
import { Link } from 'react-router-dom'
import hamburger from '../assets/images/hamburger-icon-thin2.svg'

class Navbar extends Component {
  render() {
    function menuOpen() {
      alert('hello');
    }
    return (
      <div className="navbar">
        <a href="https://joshin-run.github.io/joshholladay"><img className="dotLogo" src={siteLogo} alt="logo" /></a>
        <img className="hamburger" src={hamburger} onclick="menuOpen()"/>
        <ul className="menu nav-style">
          <li className="nav-menu nav-case-studies"><Link to="/case-studies">CASE STUDIES</Link></li>
          <li className="nav-menu nav-work"><Link to="/portfolio">WORK</Link></li>
          <li id="resume-link" className="nav-menu nav-resume">
            <a href="https://drive.google.com/open?id=1ksrC81MVA4FTyFxuSODkxKTUqFMcMrk5" target="_blank">RESUME</a>
          </li>
          <li className="nav-menu nav-about"><Link to="/about">ABOUT</Link></li>
          <li className="nav-menu nav-contact"><Link to="/contact">CONTACT</Link></li>
        </ul>

      </div>
    );
  }
}

export default Navbar;
// <img src={logo} className="App-logo" alt="logo" />
// <li className="nav-menu"><a href="#about">ABOUT</a></li>
