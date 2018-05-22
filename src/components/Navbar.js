import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import dotLogoWhite from '../assets/images/dot-spin-logos/dot-spin-j-logo-blue1.png'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
      <a href="#home"><img className="dotLogo" src={dotLogoWhite} alt="logo" /></a>
        <ul className="menu nav-style">

        <li className="nav-menu"><a href="#about">ABOUT</a></li>
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
