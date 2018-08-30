import React, { Component } from 'react';
import jcreateit from '../assets/images/portfolio/jcreateit.png'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Navbar from './Navbar'
import Portfolio from './Portfolio'
import ClearRTBMarketingImg from '../assets/images/CaseStudies/ClearRTB-Marketing/ClearRTB-Marketing-ProjectImage.png'


const CaseStudies = (props) => (

    <Router>
      <div id="contact">
        <Navbar />
        <div className="caseStudies-banner">
          <p className="banner-header">
            Case Studies
          </p>
        </div>
        <div className="content-wrapper">

          <div className="portfolio-container2">

            <div>
              <Link to="/clearrtb-marketing"><img className="box shadow" src={ClearRTBMarketingImg} alt="box" /></Link>
            </div>

          </div>
        </div>
      </div>

    </Router>
)

export default CaseStudies;
