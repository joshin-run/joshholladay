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

class App extends Component {
  render() {
    return (
      <div className="App">
      <HashRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/contact" component={Contact} />
          <Route path="/boilerplate" component={BoilerPlate} />
        </div>
      </HashRouter>
      <Footer />
      </div>
    );
  }
}

export default App;
// <img src={logo} className="App-logo" alt="logo" />
