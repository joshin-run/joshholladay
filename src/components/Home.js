import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Portfolio from './Portfolio.js';
import { Switch, Route } from 'react-router-dom';
import Test from './Test.js';


class Home extends Component {
  constructor(props) {
    super(props)
    console.log('Menu props/Home:', props)
    this.state = {}
  }

  render() {
    return (
      <div className="home-wrapper">
        <Header onMenuToggle={this.props.onMenuToggle} />

      </div>
    );
  }
}

export default Home;
