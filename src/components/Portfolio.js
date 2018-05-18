import React, { Component } from 'react';
import box from '../assets/images/portfolio/box.png'
import ppl from '../assets/images/portfolio/ppl.png'
import emergent from '../assets/images/portfolio/EmergentSolutions.png'
import coinless from '../assets/images/portfolio/Coinless.png'
import lowder from '../assets/images/portfolio/LowderMusic.png'
import strongbod from '../assets/images/portfolio/StrongBod.png'
import upss from '../assets/images/portfolio/UPSS.png'
import jcreateit from '../assets/images/portfolio/jcreateit.png'
import crypto from '../assets/images/portfolio/cryptoelevation.png'

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-wrapper">
        <p className="section-title">
          Portfolio of My Work
        </p>
        <div className="portfolio-container">
          <div class="box-container">
            <img className="box" src={jcreateit} alt="box" />
            <div className="overlay">
              <div className="text">Project Details</div>
            </div>
          </div>
          <div class="box-container">
            <img className="box" src={strongbod} alt="box" />
            <div className="overlay">
              <div className="text">Project Details</div>
            </div>
          </div>
          <div class="box-container">
            <img className="box" src={ppl} alt="box" />
            <div className="overlay">
              <div className="text">Project Details</div>
            </div>
          </div>
          <div class="box-container">
            <img className="box" src={box} alt="box" />
            <div className="overlay">
              <div className="text">Project Details</div>
            </div>
          </div>
          <div class="box-container">
            <img className="box" src={emergent} alt="box" />
            <div className="overlay">
              <div className="text">Project Details</div>
            </div>
          </div>
          <div class="box-container">
            <img className="box" src={lowder} alt="box" />
            <div className="overlay">
              <div className="text">Project Details</div>
            </div>
          </div>
          <div class="box-container">
            <img className="box" src={coinless} alt="box" />
            <div className="overlay">
              <div className="text">Project Details</div>
            </div>
          </div>
          <div class="box-container">
            <img className="box" src={upss} alt="box" />
            <div className="overlay">
              <div className="text">Project Details</div>
            </div>
          </div>
          <div class="box-container">
            <img className="box" src={crypto} alt="box" />
            <div className="overlay">
              <div className="text">Project Details</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
