import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import bannerPic from '../assets/images/banners/portfolio-site-centerImage3test2.jpg'
import josh from '../assets/images/banners/title-josh-holladay-caps.jpg'
import titlePic from '../assets/images/banners/banner-title-content.jpg'
import info from '../assets/images/banners/subTitle-info.jpg'
import Media from './Media.js';

class Header extends Component {
  render() {
    return (
      <div id="home" className="home">
        <Navbar />
        <div className="header-wrapper">
          <div className="header-content">
            <h1 className="title"><span>Josh Holladay</span></h1>
            <p className="intro">UI/UX Designer. Front-end Developer.</p>
            <div className="arrow-container">
              <div className="arrow-down"></div>
            </div>
            
            <Media />
          </div>

        </div>
      </div>
    );
  }
}

export default Header;




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
