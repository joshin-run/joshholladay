import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Navbar from './Navbar'
// import contactBanner from '../assets/images/banners/contact-banner2.png'

class Contact extends Component {
  constructor(props) {
    super(props)
    console.log('Menu props/Header:', props)
    this.state = {}
  }

  render() {
    return (

    <Router>
      <div id="contact">
      <div className="dark-rect"></div>
        <Navbar onMenuToggle={this.props.onMenuToggle}/>


        <div className="content-wrapper">

          <div className="content">
            <p id="big-thing">Tell me about your next big thing.</p>
            <p className="">I'm currently accepting new projects and would love to hear all about yours. </p>
            <p className="">Send me an email or take a look at more of my creative work.</p>
            <div className="buttons-container-contact">
              <a href="mailto:me@joshholladay.com" target="_top"><button className="button-email all-caps">Email Josh</button></a>
            </div>
            </div>
          </div>
        </div>
    </Router>
)
}
}
export default Contact;
// <div className="contactBanner">
//   <p className="banner-header">
//     Connect with Me
//   </p>
// </div>


// <a href="https://www.behance.net/josh852a"><button className="button-empty-contact all-caps">View Projects</button></a>

//
// import React, { Component } from 'react';
//
// class Contact extends Component {
//   render() {
//     return (
//       <div id="contact" className="contact-wrapper">
//         <div className="">
//
//           <div className="contact_header_container">
//             <p className="contact_header">Contact</p>
//             <p className="contact_header-sub">Tell me about your next big thing.</p>
//             <p className="contact_content">I'm currently accepting new projects and would love to hear all about yours. </p>
//             <p className="contact_content">Send me an email or take a look at more of my creative work.</p>
//             <div className="buttons-container-contact">
//               <a href="mailto:me@joshholladay.com" target="_top"><button className="button-email all-caps">Email Josh</button></a>
//               <a href="https://www.behance.net/josh852a"><button className="button-empty-contact all-caps">View Projects</button></a>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default Contact;
