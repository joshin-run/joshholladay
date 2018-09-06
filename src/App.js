import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/main.css';
import Footer from './components/Footer.js';
import { HashRouter, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import PortfolioPage from './components/PortfolioPage';
import ClearRTBMarketing from './components/CaseStudies/ClearRTB-marketing';
import CaseStudies from './components/CaseStudies';
import Menu from './components/Menu';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        isMenuOpen: false
      }
      this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu = () => {
      this.setState({isMenuOpen: !this.state.isMenuOpen})
      console.log('toggleMenu: zing')
    }

  render() {
    //
    // function overlayMenuOn() {
    //   document.getElementById("overlay-menu").style.display = "block";
    // }
    //
    // function overlayMenuOff() {
    //   document.getElementById("overlay-menu").style.display = "none";
    // }

    // const styles = {
    //   root: {
    //     background: 'image'
    //   }
    // }
    // return (
    //   <Container className={styles.root}>
    //     <NavBar isTransparent={true/false} onMenuClick={toggleMenu} onNavigate={openContent} />
    //       <Content transprent={true/false} renderContent={this.props.content} />
    //       <SlideOutMenu isOpen={this.props.isMenuOpen}
    //   </Container>
    // )

    return (
      <div className="App">

        <Menu
          noOverlay
          isMenuOpen={this.state.isMenuOpen}
          onMenuToggle={this.toggleMenu}
        />
        <HashRouter>
          <div>
            <Route exact path="/" render={(props) => (
              <Home {...props} onMenuToggle={this.toggleMenu} />
            )} />
            <Route path="/portfolio" render={(props) => (
              <PortfolioPage {...props} onMenuToggle={this.toggleMenu} />
            )} />
            <Route path="/case-studies" render={(props) => (
              <CaseStudies {...props} onMenuToggle={this.toggleMenu} />
            )} />
            <Route path="/clearrtb-marketing" render={(props) => (
              <ClearRTBMarketing {...props} onMenuToggle={this.toggleMenu} />
            )} />
            <Route path="/about" render={(props) => (
              <About {...props} onMenuToggle={this.toggleMenu} />
            )} />
            <Route path="/contact" render={(props) => (
              <Contact {...props} onMenuToggle={this.toggleMenu} />
            )} />
          </div>
        </HashRouter>
        <div id="overlay-menu"></div>
      </div>
    );
  }
}

export default App;
    // <Route exact path="/" component={Home} />
// <img src={logo} className="App-logo" alt="logo" />
