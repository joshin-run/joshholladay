import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/main.css';
import Footer from './components/Footer.js';
import { HashRouter, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import PortfolioPage from './components/PortfolioPage';
import BoilerPlate from './components/CaseStudies/00-BoilerPlate';
import ClearRTBMarketing from './components/CaseStudies/ClearRTB-marketing';
import CaseStudies from './components/CaseStudies';

class App extends Component {

  render() {

    function overlayMenuOn() {
      document.getElementById("overlay-menu").style.display = "block";
    }

    function overlayMenuOff() {
      document.getElementById("overlay-menu").style.display = "none";
    }

    return (
      <div className="App">
        <HashRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/boilerplate" component={BoilerPlate} />
            <Route path="/portfolio" component={PortfolioPage} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/clearrtb-marketing" component={ClearRTBMarketing} />
            <Route path="/case-studies" component={CaseStudies} />
          </div>
        </HashRouter>
        <div id="overlay-menu" onClick="overlayMenuOff()"></div>
      </div>
    );
  }
}

export default App;
// <img src={logo} className="App-logo" alt="logo" />
