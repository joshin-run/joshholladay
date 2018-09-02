import React, { Component } from 'react';
import Navbar from './Navbar.js';
import bannerPic from '../assets/images/banners/portfolio-site-centerImage3test2.jpg'

class Header extends Component {
  render() {
    return (
      <div id="home" className="header-wrapper">
        <header className="header column">
          <Navbar />
          <div className="case-study-content-wrapper">

            <div className="section-container">
            <img className="shadow study-image" src={bannerPic} alt="box" />
              <p className="sect-head">Josh Holladay</p>
              <p className="bold-content">UI/UX Designer. Vocalist. Father of seven.</p>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
// <img src={logo} className="App-logo" alt="logo" />




// <div className="banner">
// <h1 className="intro">Hello. I'm</h1>
// <h1 className="title"><span>Josh Holladay</span></h1>
// <p className="intro">
// UI/UX Designer. Vocalist. Father of seven.
// </p>
// <div className="arrow-container">
// <div className="arrow-down"></div>
// </div>
// </div>
