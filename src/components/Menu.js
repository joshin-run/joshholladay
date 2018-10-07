import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
// import NavbarDark from './NavbarDark'
import ex from '../assets/images/icons/ex.svg'
import Media from './Media.js';

class Menu extends Component {
  constructor(props) {
    super(props)
    console.log('Menu props/Menu:', props)
    this.state = {}
  }

  render () {
    return (
      <div className={`overlayMenu${this.props.isMenuOpen ? ' open' : ''}`}>

        <div className="icon-container" onClick={this.props.onMenuToggle}>
          <img className="ex" src={ex} />
        </div>

        <div className="menu-items-wrapper">
        <ul className="menu nav-style">
          <li className="nav-menu nav-work"><Link to="/portfolio">work</Link></li>
          <li className="nav-menu nav-about"><Link to="/about">about</Link></li>
          <li className="nav-menu nav-contact"><Link to="/contact">contact</Link></li>
        </ul>
        </div>

      </div>
    )
  }
}

export default Menu;


// <li id="resume-link" className="overlay-menu nav-resume">
//   <a href="https://drive.google.com/open?id=1KkTd7rhPFu6ZR-_CkDEHuqE-diBRXpjS" target="_blank">RESUME</a>
// </li>
// <MenuNavbar onMenuToggle={this.props.onMenuToggle}/>
// <ul className="menu-items-container">
//   <li><Link to="/" onClick={this.props.onMenuToggle}>Home</Link></li>
//   <li><Link to="/faqs" onClick={this.props.onMenuToggle}>Plastic Surgery FAQs</Link></li>
//   <li><Link to="/procedures" onClick={this.props.onMenuToggle}>Procedures</Link></li>
//   <li><Link to="/members" onClick={this.props.onMenuToggle}>Member Directory</Link></li>
//   <li><Link to="/#contact-us" onClick={e => { this.props.onMenuToggle(e); document.getElementById('contact-us').scrollIntoView() }}>Contact Us</Link></li>
// </ul>
// <img className="ex" src={ex} alt="" />
