import React, { Component } from 'react';
// import linkedin from '../assets/images/social/icon-LinkedIn-black.svg'
// import behance from '../assets/images/social/icon-Behance-black.svg'
// import github from '../assets/images/social/icon-GitHub-black.svg'
// import dribbble from '../assets/images/social/icon-Dribbble-black.svg'
// import twitter from '../assets/images/social/icon-Twitter-black.svg'
// import email from '../assets/images/social/icon-Email-black.svg'
import linkedin from '../assets/images/social/icon-LinkedIn-white.svg'
import behance from '../assets/images/social/icon-Behance-white.svg'
import github from '../assets/images/social/icon-GitHub-white.svg'
import dribbble from '../assets/images/social/icon-Dribbble-white.svg'
import twitter from '../assets/images/social/icon-Twitter-white.svg'
import email from '../assets/images/social/icon-Email-white.svg'

class Media extends Component {
  render() {
    return (
      <div className="media-wrapper">
        <ul>
          <div className="media-links">
            <ul>
              <li className="media-menu">
                <a href="https://www.linkedin.com/in/joshholladay/" target="_blank">
                <img id="linkedin_i" className="menu-media-icons" src={linkedin} alt="Linked In Icon" /></a>
              </li>
              <li className="media-menu">
                <a href="https://www.behance.net/josh852a" target="_blank">
                <img id="behance_i" className="menu-media-icons" src={behance} alt="Behance Icon" /></a>
              </li>
              <li className="media-menu">
                <a href="https://github.com/joshin-run" target="_blank">
                <img id="github_i" className="menu-media-icons" src={github} alt="GitHub Icon" /></a>
              </li>
              <li className="media-menu">
                <a href="https://dribbble.com/joshholladay" target="_blank"><img id="dribbble_i"  className="menu-media-icons" src={dribbble} alt="Dribbble Icon" /></a>
              </li>
              <li className="media-menu">
                <a href="https://twitter.com/iamjoshholladay" target="_blank"><img id="twitter_i" className="menu-media-icons" src={twitter} alt="Twitter Icon" /></a>
              </li>
              <li className="media-menu">
                <a href="mailto:me@joshholladay.com" target="_top"><img id="twitter_i" className="menu-media-icons" src={email} alt="Twitter Icon" /></a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    );
  }
}

export default Media;

// <li className="media-menu">
//   <a href="https://joshholladay.wordpress.com/" target="_blank"><img id="wordpress_i" className="menu-media-icons" src={wordpress} alt="Wordpress Icon" /></a>
// </li>
// <li className="media-menu">
//   <a href="mailto:me@joshholladay.com" target="_top"><img id="email_i" className="menu-media-icons" src={email} alt="Email Icon" /></a>
// </li>
