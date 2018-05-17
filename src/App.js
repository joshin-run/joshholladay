import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header flex-all-center column">

          <h1 className="App-title">Hi! I'm Josh Holladay.</h1>
          <p className="App-intro">
            I am a UX Designer. I code too.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
// <img src={logo} className="App-logo" alt="logo" />
