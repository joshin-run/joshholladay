import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import bannerPic from '../assets/images/banners/portfolio-site-centerImage3test2.jpg'
import josh from '../assets/images/banners/title-josh-holladay-caps.jpg'
import titlePic from '../assets/images/banners/banner-title-content.jpg'
import info from '../assets/images/banners/subTitle-info.jpg'
import Media from './Media.js';

class Header extends Component {
  constructor(props) {
    super(props)
    console.log('Menu props/Header:', props)
    this.state = {}
  }

  // draw() {
  //   var canvas = document.getElementById('canvas');
  //   if (canvas.getContext) {
  //     var ctx = canvas.getContext('2d');
  //
  //     ctx.beginPath();
  //     ctx.moveTo(75, 50);
  //     ctx.lineTo(100, 75);
  //     ctx.lineTo(100, 25);
  //     ctx.fill();
  //     }
  //   };

  render() {


    // var canvas = document.querySelector('canvas');
    // var ctx = canvas.getContext('2d');
    // ctx.fillStyle = '#0074d9';
    // ctx.fillRect(0, 0, 100, 100);

    return (
      <div id="home" className="home">
        <div className="blue-diag">
          <Navbar onMenuToggle={this.props.onMenuToggle} />
          <svg className="blueHeader" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="white" points="0,100 100,0 100,100"/>
          </svg>
          <div className="titleDes-wrapper">
            <p className="title-des1">UX</p>
            <p className="title-des2">Designer</p>
          </div>
        </div>
        <div className="titleDev-wrapper">
          <p className="title-dev1">Front-end</p>
          <p className="title-dev2">Developer</p>
        </div>

      </div>
    );
  }
}

export default Header;
// <canvas></canvas>
// <p className="title-name">Josh Holladay</p>
      // <Media />

// <div className="header-content">
//   <p className="title">Josh Holladay</p>
//   <p className="intro">UI/UX Designer. Front-end Developer.</p>
// </div>

// <div className="arrow-container">
//   <div className="arrow-down"></div>
// </div>



// <div className="header-wrapper">
//   <div className="header-content-wrapper">
//     <div className="header-content">
//       <img className="shadow title-image" src={titlePic} alt="box" />
//       <img className="shadow banner-image" src={bannerPic} alt="box" />
//     </div>
//   </div>
// </div>





// <img src={logo} className="App-logo" alt="logo" />
// <p className="sect-head">Josh Holladay</p>
// <p className="bold-content">UI/UX Designer. Vocalist. Father of seven.</p>



// <div className="banner">
// <h1 className="intro">Hello. I'm</h1>
// <h1 className="title"><span>Josh Holladay</span></h1>
// <p className="intro">
// UI/UX Designer. Vocalist. Father of seven.
// </p>
// <div className="arrow-container">
// <div className="arrow-down"></div>
// </div>
// </div>





// <div id="home" className="">
//   <header className="header column">
//     <Navbar />
//     <div className="header-wrapper">
//       <div className="header-content-wrapper">
//         <div className="header-content">
//           <img className="shadow study-image" src={bannerPic} alt="box" />
//         </div>
//       </div>
//     </div>
//   </header>
// </div>
