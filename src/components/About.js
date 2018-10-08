import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Navbar from './Navbar'






class About extends Component {
  constructor(props) {
    super(props)
    console.log('Menu props/About:', props)
    this.state = {}
  }

  render() {
    return (
    <Router>
      <div id="about">
        <div className="dark-rect"></div>
        <Navbar onMenuToggle={this.props.onMenuToggle}/>
        <div className="aboutBanner">
          <p className="banner-header">
            About
          </p>
        </div>
        <div className="content-wrapper">

          <div className="about-content">
            <p>Growing up, my grandpa owned a computer repair business. Hence, my love for tech was born. There was always a computer around the house to tinker with. Taking things apart, playing around in the BIOS. I loved typing classes and was 'King of MS Paint.' Ever since I could remember I would format word documents to death, manipulate screenshot images and spend hours deep in pixels. I would create with whatever tools were available. Doodling, drawing, and art classes were all a part of what I loved and I translated that interest into the digital world.</p><br />

            <p>Today, I use my artistic instinct and digital chops to create intriging design concepts and websites. I'm always looking for opportunities to add value to a project. I'm an idea guy, and I rarely forget a name.</p><br />

            <p>Whether it's UX Design, UI Design, or Web Design, I'm always in the thick of it. I believe in creating things that have real meaning to the business and to the user. Informed design. That's the best invention yet.</p><br />

            <p>- Josh</p><br />
          </div>
        </div>

      </div>
    </Router>

)
}
}

export default About;
