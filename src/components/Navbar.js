import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import About from './About';
import dotLogoBlue from '../assets/images/dot-spin-logos/dot-spin-j-logo-blue2.png'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
      <Link to="/"><img className="dotLogo" src={dotLogoBlue} alt="logo" /></Link>
        <ul className="menu nav-style">
        <li className="nav-menu"><Link to="/about">ABOUT</Link></li>


          <li className="nav-menu"><a href="#portfolio">PORTFOLIO</a></li>
            <li id="resume-link" className="nav-menu">
            <a href="https://drive.google.com/open?id=1tZn_CTOQy6C7IVsvJYUoTpGm2UA67TUc" target="_blank">RESUME</a>
          </li>
          <li className="nav-menu"><a href="#contact">CONTACT</a></li>
        </ul>

      </div>
    );
  }
}

export default Navbar;
// <img src={logo} className="App-logo" alt="logo" />
// <li className="nav-menu"><a href="#about">ABOUT</a></li>
