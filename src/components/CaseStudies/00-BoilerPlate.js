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
        <div className="content-wrapper">
          <div className="section-container">

            <p className="sect-head">Company Overview</p><br />
            <div className="section-content">
              <p>PPL is a Utah startup the creator of 'family servers', small, plug-and-play cloud servers designed to plug into your home router and used to save and share files from any device. Our role was to design the landing page and other custom illustrations.</p><br />
            </div>

            <p className="sect-head">Project Overview</p><br />
            <div className="section-content">
              <p>Omadi was contacted by a subsidiary of Solera to build an auto-dispatching and scheduling platform to integrate with their Claims Manager software solution to help dispatchers schedule vehicle adjusters more efficiently. There were 3 main desired outcomes for success: </p><br />
              <p>1. Simple, proffesional, clear communication.</p><br />
              <p>2. I like this the most for showing how things connect. It's a lot of detail, but I think it would be very clear to most people.</p><br />
              <p>3.</p><br />
            </div>

            <p className="sect-head">Product Definition</p><br />
            <div className="section-content">
              <p>AJ and I spent a couple of hours at the Salt Mine talking about his vision for the user diagrams</p><br />
              <img className="initial-sketches" src={wall1} />
            </div>

            <p className="sect-head">aaa</p><br />
            <div className="section-content">
              <p>Lorem ipsum</p><br />
            </div>

          </div>

        </div>

      </div>
    </Router>

)

export default BoilerPlate;
