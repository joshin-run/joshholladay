import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/main.css';
import Header from './components/Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
// <img src={logo} className="App-logo" alt="logo" />
