import React, { Component } from 'react';
import linkedin from '../assets/images/social/linkedin-bl.svg'
import behance from '../assets/images/social/behance-bl.svg'
import github from '../assets/images/social/github-bl.svg'
import dribbble from '../assets/images/social/dribbble-bl.svg'
import twitter from '../assets/images/social/twitter-bl.svg'
import wordpress from '../assets/images/social/wordpress-bl.svg'
import email from '../assets/images/social/email-bl.svg'

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
                <a href="https://dribbble.com/jcreateit" target="_blank"><img id="dribbble_i"  className="menu-media-icons" src={dribbble} alt="Dribbble Icon" /></a>
              </li>
              <li className="media-menu">
                <a href="https://twitter.com/iamjoshholladay" target="_blank"><img id="twitter_i" className="menu-media-icons" src={twitter} alt="Twitter Icon" /></a>
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
