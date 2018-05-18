import React, { Component } from 'react';
// import logo from '../images/tri-j-logo-mid2j.png'
import Media from './Media'

class Footer extends Component {
  render() {
    return (
      <div id="contact-us" className="footer-wrapper">
        <div className="footer-container">

          <div className="media-links">
            <ul className="media-menu-text">
              <li className="media-menu">
                <p className="copy copy-first">Copyright 2018. All rights reserved.</p>
              </li>
              <li className="media-menu">
                <p className="copy copy-first">Handcrafted with &#10084; in Utah.</p>
              </li>
              <li className="media-menu">
                <p className="copy copy-second">Handcrafted with &#10084; in Utah. All rights reserved.</p>
              </li>
            </ul>
          </div>
          <Media />
        </div>
      </div>
    );
  }
}

export default Footer;

// <img className="menu-media-icons" src={} alt="Facebook" />


//
// import React, { Component } from 'react';
// // import logo from '../images/tri-j-logo-mid2j.png'
// import icon from '../images/icons/tri-j-icon-blue.png'
// import Media from './Media'
//
// class Footer extends Component {
//   render() {
//     return (
//       <div id="contact-us" className="footer-wrapper">
//         <div className="footer-container">
//           <div className="logo-container">
//             <a href="#home"><img className="footer-logo"  src={icon} alt="jh-logo" /></a>
//           </div>
//           <Media />
//         </div>
//         <p className="copy">J Create It, LLC &copy; 2018</p>
//       </div>
//     );
//   }
// }
//
// export default Footer;
