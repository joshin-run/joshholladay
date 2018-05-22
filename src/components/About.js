import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Navbar from './Navbar'

const About = (props) => (


    <Router>
      <div id="about" className="about-wrapper">
        <Navbar />
      </div>
    </Router>

)

export default About;
