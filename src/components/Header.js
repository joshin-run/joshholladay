import React, { Component } from 'react';
import Navbar from './Navbar.js';

class Header extends Component {
  render() {
    return (
      <div id="home" className="header-wrapper">
        <header className="header column">
          <Navbar />
          <div className="banner">
            <h1 className="intro">Hello. I'm</h1>
            <h1 className="title"><span>Josh Holladay</span></h1>
            <p className="intro">
              UX Designer. Vocalist. Father of seven.
            </p>
            <div className="arrow-container">
              <div className="arrow-down"></div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
// <img src={logo} className="App-logo" alt="logo" />
