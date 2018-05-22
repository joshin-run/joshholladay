import React, { Component } from 'react';
import Header from './Header.js';
import Portfolio from './Portfolio.js';
import Contact from './Contact.js';
import { Switch, Route } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default Home;
