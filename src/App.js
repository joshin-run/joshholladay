import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/main.css';
import Footer from './components/Footer.js';
import { Switch, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
      </div>
    );
  }
}

export default App;
// <img src={logo} className="App-logo" alt="logo" />
