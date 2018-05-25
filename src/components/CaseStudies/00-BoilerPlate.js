import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Navbar from '../Navbar'

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

          <div className="content">
            <p>Lorem ipsum</p><br />
          </div>
        </div>

      </div>
    </Router>

)

export default BoilerPlate;
