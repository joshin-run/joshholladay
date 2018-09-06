import React, { Component } from 'react';
import jcreateit from '../assets/images/portfolio/jcreateit.png'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Navbar from './Navbar'
import Portfolio from './Portfolio'
import ClearRTBMarketingImg from '../assets/images/CaseStudies/ClearRTB-Marketing/ClearRTB-Marketing-ProjectImage.png'


class CaseStudies extends Component {
  constructor(props) {
    super(props)
    console.log('Menu props/Header:', props)
    this.state = {}
  }

  render() {
    return (

    <Router>

      <div id="contact">
      <div className="dark-rect"></div>
        <Navbar onMenuToggle={this.props.onMenuToggle}/>

        <div className="section-container">

          <div className="case-study-content-wrapper">

            <div>
              <Link to="/clearrtb-marketing"><img className="shadow" src={ClearRTBMarketingImg} alt="box" /></Link>
            </div>

          </div>
        </div>
      </div>

    </Router>

    )
  }
}

export default CaseStudies;
// <div className="caseStudies-banner">
//   <p className="banner-header">
//     Case Studies
//   </p>
// </div>
