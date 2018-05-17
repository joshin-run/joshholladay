import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul className="menu nav-style">
          <li className="nav-menu"><a href="#home">HOME</a></li>
            <li id="resume-link" className="nav-menu">
            <a href="https://drive.google.com/open?id=1vBKVvH1Lz7LWh3XlOVjFm0bcjGxhVRlS" target="_blank">RESUME</a>
          </li>
          <li className="nav-menu"><a href="mailto:me@joshholladay.com" target="_top">CONTACT</a></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
// <img src={logo} className="App-logo" alt="logo" />
