import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import About from './About';
// import siteLogo from '../assets/images/logos/JH-logo-square-black.jpg'
import siteLogo from '../assets/images/logos/jh-5line-logo-5border.png'
import { Link } from 'react-router-dom'
import hamburger from '../assets/images/white-hamburger.svg'

class NavbarDark extends Component {
  constructor(props) {
    super(props);
      this.state = {
        isMenuOpen: false
      }
      this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu = () => {
      this.setState({isMenuOpen: !this.state.isMenuOpen})
      console.log('toggleMenu/Dark:')
    }

  render() {
    return (
      <div className="navbar-dark">
      <div className="nav-container">
        <a href="https://joshin-run.github.io/joshholladay"><img className="dotLogo" src={siteLogo} alt="logo" /></a>
        <img className="hamburger" src={hamburger} onClick={this.toggleMenu} />
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
      </div>
    );
  }
}

export default NavbarDark;
// <img src={logo} className="App-logo" alt="logo" />
// <li className="nav-menu"><a href="#about">ABOUT</a></li>
