import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
// import NavbarDark from './NavbarDark'
import ex from '../assets/images/icons/ex.svg'

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
          <ul>
            <li className="overlay-menu nav-case-studies"><Link to="/case-studies" onClick={this.props.onMenuToggle}>CASE STUDIES</Link></li>
            <li className="overlay-menu nav-work"><Link to="/portfolio" onClick={this.props.onMenuToggle}>WORK</Link></li>
            <li id="resume-link" className="overlay-menu nav-resume">
              <a href="https://drive.google.com/open?id=1f4xekmTb-ICZVO719Nm4WsddnZAQ5ifW" target="_blank">RESUME</a>
            </li>
            <li className="overlay-menu nav-about"><Link to="/about" onClick={this.props.onMenuToggle}>ABOUT</Link></li>
            <li className="overlay-menu nav-contact"><Link to="/contact" onClick={this.props.onMenuToggle}>CONTACT</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Menu;
// <MenuNavbar onMenuToggle={this.props.onMenuToggle}/>
// <ul className="menu-items-container">
//   <li><Link to="/" onClick={this.props.onMenuToggle}>Home</Link></li>
//   <li><Link to="/faqs" onClick={this.props.onMenuToggle}>Plastic Surgery FAQs</Link></li>
//   <li><Link to="/procedures" onClick={this.props.onMenuToggle}>Procedures</Link></li>
//   <li><Link to="/members" onClick={this.props.onMenuToggle}>Member Directory</Link></li>
//   <li><Link to="/#contact-us" onClick={e => { this.props.onMenuToggle(e); document.getElementById('contact-us').scrollIntoView() }}>Contact Us</Link></li>
// </ul>
// <img className="ex" src={ex} alt="" />
