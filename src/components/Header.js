import React, { Component } from 'react';
import Navbar from './Navbar.js';

class Header extends Component {
  render() {
    return (
      <div className="">
        <header className="header column">
          <Navbar />
          <div className="banner">
            <h1 className="intro">Hello. I'm</h1>
            <h1 className="title"><span>Josh Holladay</span></h1>
            <p className="intro">
              I am a UX Designer.
            </p>
            <p className="intro">
              I code too.
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
