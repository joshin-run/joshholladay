import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Navbar from '../Navbar'
import wall1 from '../../assets/images/portfolio/Case Studies/ppl/PPL-initialSketches.png'

const BoilerPlate = (props) => (

    <Router>
      <div id="boilder-plate">
        <Navbar />
        <div className="boilerPlateBanner">
          <p className="banner-header">
            Boiler Plate
          </p>
        </div>
        <div className="case-study-content-wrapper">
          <div className="section-container">
            <p className="sect-head">Company Overview</p><br />
            <p className="section-content">PPL is a Utah startup the creator of 'family servers', small, plug-and-play cloud servers designed to plug into your home router and used to save and share files from any device. Our role was to design the landing page and other custom illustrations.</p>
          </div>

          <div className="section-container">
            <p className="sect-head">Project Overview</p><br />
            <p className="section-content">Omadi was contacted by a subsidiary of Solera to build an auto-dispatching and scheduling platform to integrate with their Claims Manager software solution to help dispatchers schedule vehicle adjusters more efficiently. There were 3 main desired outcomes for success: </p><br />
            <p className="sub-head">Outcomes:</p>
            <ol className="numbered-list">
              <li className="section-content ordered-item">Simple, proffesional, clear communication.</li>
              <li className="section-content ordered-item">I like this the most for showing how things connect. It's a lot of detail, but I think it would be very clear to most people.</li>
            </ol>
          </div>

          <div className="section-container">
            <p className="sect-head">Product Definition</p><br />
            <p className="section-content">AJ and I spent a couple of hours at the Salt Mine talking about his vision for the user diagrams</p><br />
            <img className="initial-sketches" src={wall1} />
          </div>

          <div className="section-container">
            <p className="sect-head">aaa</p><br />
            <p className="section-content">Lorem ipsum</p><br />
          </div>

        </div>
      </div>
    </Router>

)

export default BoilerPlate;
