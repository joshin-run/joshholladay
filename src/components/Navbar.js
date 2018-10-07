import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import About from './About';
// import siteLogo from '../assets/images/logos/JH-logo-square-black.jpg'
import siteLogo from '../assets/images/logos/jh-diag-logo-sub.png'
// import siteLogo from '../assets/images/logos/jh-5line-logo-5border.png'
import { Link } from 'react-router-dom'
import hamburger from '../assets/images/white-hamburger.svg'
// import Media from './Media.js';

class Navbar extends Component {
  constructor(props) {
    super(props)
    console.log('Menu props/Navbar:', props)
    this.state = {}
  }

  render() {

    return (

      <div className="navbar">
        <div className="nav-container">
          <a href="https://joshin-run.github.io/joshholladay"><img className="dotLogo" src={siteLogo} alt="logo" /></a>
          <img className="hamburger" src={hamburger} onClick={this.props.onMenuToggle} />

          <ul className="menu nav-style">
            <li className="nav-menu nav-work"><Link to="/portfolio">work</Link></li>
            <li className="nav-menu nav-about"><Link to="/about">about</Link></li>
            <li className="nav-menu nav-contact"><Link to="/contact">contact</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
// <li className="nav-menu nav-case-studies all-caps"><Link to="/case-studies">Case Studies</Link></li>
// <li id="resume-link" className="nav-menu nav-resume all-caps">
//   <a href="https://drive.google.com/open?id=1KkTd7rhPFu6ZR-_CkDEHuqE-diBRXpjS" target="_blank">Resume</a>
// </li>


// <img src={logo} className="App-logo" alt="logo" />
// <li className="nav-menu"><a href="#about">ABOUT</a></li>

// function menuOpen() {
//   alert('hello');
// }
// function overlayMenuOn() {
//   document.getElementById("overlay-menu").style.display = "block";
// }
//
// function overlayMenuOff() {
//   document.getElementById("overlay-menu").style.display = "none";
// }
