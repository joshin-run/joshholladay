import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/main.css';
import Header from './components/Header.js';
import Portfolio from './components/Portfolio.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
// <img src={logo} className="App-logo" alt="logo" />