import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Navbar from './Navbar'






const About = (props) => (


    <Router>
      <div id="about">
        <Navbar />
        <div className="aboutBanner">
          <p className="banner-header">
            A Little About Me
          </p>
        </div>
        <div className="content-wrapper">

          <div className="content">
            <p>Growing up, my grandpa owned a computer repair business. There was always a computer to toy around with around the house. Taking things apart, playing around in the BIOS. I loved typing classes and was 'King of MS Paint.' Ever since I could remember I would format word documents to death, manipulate screenshot images and spend hours deep in pixels. I would create with whatever tools were available. Doodling, drawing, and art classes were all a part of what I loved and I translated that interest into the digital world.</p><br />

            <p>Today, I use my artistic instinct and technical skills to create intriging design concepts and websites. I'm always looking for opportunities to add value to a project. I'm an idea guy and I rarely forget a name.</p><br />

            <p>My newest passion is UX Dexign. I believe in creating things that have real meaning to the business and to the user. Informed design. That's the best invention yet.</p><br />

            <p>- Josh</p><br />
          </div>
        </div>

      </div>
    </Router>

)

export default About;
