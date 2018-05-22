import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Navbar from './Navbar'

const Contact = (props) => (

    <Router>
      <div id="contact">
        <Navbar />
        <div className="content-banner"></div>
        <div className="content-wrapper">
          <div className="content-header">Contact</div>
          <div className="content">
            <p className="">Tell me about your next big thing.</p>
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

export default Contact;

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
