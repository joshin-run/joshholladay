import React, { Component } from 'react';
import box from '../assets/images/portfolio/box.png'
import ppl from '../assets/images/portfolio/ppl.png'
import emergent from '../assets/images/portfolio/emergent4.png'
import coinless from '../assets/images/portfolio/Coinless.png'
import lowder from '../assets/images/portfolio/LowderMusic.png'
import strongbod from '../assets/images/portfolio/StrongBod.png'
import upss from '../assets/images/portfolio/UPSS.png'
import jcreateit from '../assets/images/portfolio/jcreateit.png'
import crypto from '../assets/images/portfolio/cryptoelevation.png'

class Portfolio extends Component {
  render() {
    return (
      <div id="portfolio" className="portfolio-wrapper">
        <p className="section-title">
          Portfolio
        </p>
        <div className="portfolio-container">
          <div class="box-container">
            <img className="box" src={jcreateit} alt="box" />
            <div className="overlay">
              <div className="overlay-text-container">
                <p className="overlay-title">
                  J Create It, LLC
                </p>
                <div className="line"></div>
                <p className="overlay-description">
                  As the founder and UI/UX Designer, I help clients find needs, solve problems, and create something great together.
                </p>
                <a href="http://jcreateit.com">
                  <p className="overlay-next">
                    VIEW WEBSITE<span> ➔</span>
                  </p>
                </a>
              </div>
             </div>
          </div>
          <div class="box-container">
            <img className="box" src={strongbod} alt="box" />
            <div className="overlay">
              <div className="overlay-text-container">
                <p className="overlay-title">
                  StrongBod
                </p>
                <div className="line"></div>
                <p className="overlay-description">
                  This company came to me with an idea, to create a tool, an app that would help the modern day LDS missionary manage health and create goals.
                </p>
                <a href="https://www.behance.net/gallery/62564293/StrongBod">
                  <p className="overlay-next">
                    VIEW PROJECT<span> ➔</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div class="box-container">
            <img className="box" src={ppl} alt="box" />
            <div className="overlay">
              <div className="overlay-text-container">
                <p className="overlay-title">
                  PPL
                </p>
                <div className="line"></div>
                <p className="overlay-description">
                  I was tasked to create illustrations to demonstrate initial product hookup. Deliverables also included landing page designs.
                </p>
                <a href="https://www.behance.net/gallery/64284677/PPLfamily-Landing-Page-and-Illustrations?">
                  <p className="overlay-next">
                    VIEW PROJECT<span> ➔</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div class="box-container">
            <img className="box" src={box} alt="box" />
            <div className="overlay">
              <div className="overlay-text-container">
                <p className="overlay-title">
                  Logo Design Concept
                </p>
                <div className="line"></div>
                <p className="overlay-description">
                  Here's an example of some of the latest web design trends out there right now. I created the logo, the landing page layout and more.
                </p>
                <a href="https://www.behance.net/gallery/62614073/LogoDesign-Code-Blue">
                  <p className="overlay-next">
                    VIEW PROJECT<span> ➔</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div class="box-container">
            <img className="box" src={crypto} alt="box" />
            <div className="overlay">
              <div className="overlay-text-container">
                <p className="overlay-title">
                  Crypto Elevation
                </p>
                <div className="line"></div>
                <p className="overlay-description">
                  Principle front-end development and design for a cryptocurrency startup. Also completed a dashboard for their member base.
                </p>
                <a href="https://www.behance.net/gallery/62567607/Crypto-Elevation">
                  <p className="overlay-next">
                    VIEW PROJECT<span> ➔</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div class="box-container">
            <img className="box" src={lowder} alt="box" />
            <div className="overlay">
              <div className="overlay-text-container">
                <p className="overlay-title">
                  Lowder Music
                </p>
                <div className="line"></div>
                <p className="overlay-description">
                  Isaac Lowder teaches all things music in Utah. He came to me seeking a logo and a business card. This is what I served up.
                </p>
                <a href="https://www.behance.net/gallery/64279585/Lowder-Music-Isaac-Lowder-Designs">
                  <p className="overlay-next">
                    VIEW PROJECT<span> ➔</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div class="box-container">
            <img className="box" src={coinless} alt="box" />
            <div className="overlay">
              <div className="overlay-text-container">
                <p className="overlay-title">
                  Coinless Payments
                </p>
                <div className="line"></div>
                <p className="overlay-description">
                  A WordPress site for those self-serve carwash owners who want to offer a mobile payment solution. I created custom icons and used my coding skills to manage the responsive design.
                </p>
                <a href="https://www.behance.net/gallery/64286079/Coinless-LandingPage-WordPress">
                  <p className="overlay-next">
                    VIEW PROJECT<span> ➔</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div class="box-container">
            <img className="box" src={upss} alt="box" />
            <div className="overlay">
              <div className="overlay-text-container">
                <p className="overlay-title">
                  UPSS
                </p>
                <div className="line"></div>
                <p className="overlay-description">
                  Utah Plastic Surgery Society needed a site refresh and ReactJS was the answer. I came up with the logo and the entire UI concept.
                </p>
                <a href="https://www.behance.net/gallery/62594949/Utah-Plastic-Surgery-Society">
                  <p className="overlay-next">
                    VIEW PROJECT<span> ➔</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div class="box-container">
            <img className="box" src={emergent} alt="box" />
            <div className="overlay">
              <div className="overlay-text-container">
                <p className="overlay-title">
                  Emergent Solutions
                </p>
                <div className="line"></div>
                <p className="overlay-description">
                  Reza was scheduled to speak at the Silicon Slopes back in April 2018. He asked me to create the digital signage for him.
                </p>
                <a  href="https://www.behance.net/gallery/64276721/Emergent-Solutions-Presentation-Graphic">
                  <p className="overlay-next">
                    VIEW PROJECT<span> ➔</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
//
// <div class="box-container">
//   <img className="box" src={ppl} alt="box" />
//   <div className="overlay">
//     <div className="text">Project Details</div>
//   </div>
// </div>
// <div class="box-container">
//   <img className="box" src={box} alt="box" />
//   <div className="overlay">
//     <div className="text">Project Details</div>
//   </div>
// </div>
// <div class="box-container">
//   <img className="box" src={crypto} alt="box" />
//   <div className="overlay">
//     <div className="text">Project Details</div>
//   </div>
// </div>
// <div class="box-container">
//   <img className="box" src={lowder} alt="box" />
//   <div className="overlay">
//     <div className="text">Project Details</div>
//   </div>
// </div>
// <div class="box-container">
//   <img className="box" src={coinless} alt="box" />
//   <div className="overlay">
//     <div className="text">Project Details</div>
//   </div>
// </div>
// <div class="box-container">
//   <img className="box" src={upss} alt="box" />
//   <div className="overlay">
//     <div className="text">Project Details</div>
//   </div>
// </div>
// <div class="box-container">
//   <img className="box" src={emergent} alt="box" />
//   <div className="overlay">
//     <div className="text">Project Details</div>
//   </div>
// </div>
