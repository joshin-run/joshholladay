import React, { Component } from 'react';
import box from '../assets/images/portfolio/box.png'

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-wrapper">
        <p className="section-title">
          Portfolio of My Work
        </p>
        <div className="portfolio-container">
          <div class="box-container">
            <img className="box" src={box} alt="box" />
            <div className="overlay">
              <div className="text">Hello World</div>
            </div>
          </div>
          <div class="box-container">
            <img className="box" src={box} alt="box" />
            <div className="overlay">
              <div className="text">Hello World</div>
            </div>
          </div>
          <div class="box-container">
            <img className="box" src={box} alt="box" />
            <div className="overlay">
              <div className="text">Hello World</div>
            </div>
          </div>
          <div class="box-container">
            <img className="box" src={box} alt="box" />
            <div className="overlay">
              <div className="text">Hello World</div>
            </div>
          </div>
          <div class="box-container">
            <img className="box" src={box} alt="box" />
            <div className="overlay">
              <div className="text">Hello World</div>
            </div>
          </div>
          <div class="box-container">
            <img className="box" src={box} alt="box" />
            <div className="overlay">
              <div className="text">Hello World</div>
            </div>
          </div>
          <div class="box-container">
            <img className="box" src={box} alt="box" />
            <div className="overlay">
              <div className="text">Hello World</div>
            </div>
          </div>
          <div class="box-container">
            <img className="box" src={box} alt="box" />
            <div className="overlay">
              <div className="text">Hello World</div>
            </div>
          </div>
          <div class="box-container">
            <img className="box" src={box} alt="box" />
            <div className="overlay">
              <div className="text">Hello World</div>
            </div>
          </div>
          <div class="box-container">
            <img className="box" src={box} alt="box" />
            <div className="overlay">
              <div className="text">Hello World</div>
            </div>
          </div>
          <div class="box-container">
            <img className="box" src={box} alt="box" />
            <div className="overlay">
              <div className="text">Hello World</div>
            </div>
          </div>
          <div class="box-container">
            <img className="box" src={box} alt="box" />
            <div className="overlay">
              <div className="text">Hello World</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
