import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Navbar from '../Navbar'
import wall1 from '../../assets/images/portfolio/Case Studies/ppl/PPL-initialSketches.png'

import CRTBMarketingBanner from '../../assets/images/CaseStudies/ClearRTB-Marketing/CRTB-Marketing-Banner2.png'
import ClearRTBMarketingImg from '../../assets/images/CaseStudies/ClearRTB-Marketing/ClearRTB-Marketing-ProjectImage.png'
import briefMtg from '../../assets/images/CaseStudies/ClearRTB-Marketing/BriefMtg-notes.png'

import RealPicture1 from '../../assets/images/CaseStudies/ClearRTB-Marketing/Ideation/RealPicture-1.png'
import RealPicture2 from '../../assets/images/CaseStudies/ClearRTB-Marketing/Ideation/RealPicture-2.png'

import BlurToClear1 from '../../assets/images/CaseStudies/ClearRTB-Marketing/Ideation/Blur-to-Clear1.png'
import BlurToClear2 from '../../assets/images/CaseStudies/ClearRTB-Marketing/Ideation/Blur-to-Clear2.png'
import BlurToClear3 from '../../assets/images/CaseStudies/ClearRTB-Marketing/Ideation/Blur-to-Clear3.png'
import BlurToClear4 from '../../assets/images/CaseStudies/ClearRTB-Marketing/Ideation/Blur-to-Clear4.png'

import BlueBlur from '../../assets/images/CaseStudies/ClearRTB-Marketing/Ideation/BlueBlur.png'

import Moon1 from '../../assets/images/CaseStudies/ClearRTB-Marketing/Ideation/DarkSide-Moon-1.png'
import Moon2 from '../../assets/images/CaseStudies/ClearRTB-Marketing/Ideation/DarkSide-Moon-2.png'
import Moon3 from '../../assets/images/CaseStudies/ClearRTB-Marketing/Ideation/DarkSide-Moon-3.png'

import MeetMike from '../../assets/images/CaseStudies/ClearRTB-Marketing/Ideation/MeetMike-Gray.png'
import Meet3 from '../../assets/images/CaseStudies/ClearRTB-Marketing/Ideation/Meet3.png'

import encOriginal from '../../assets/images/CaseStudies/ClearRTB-Marketing/ENC/ENC-original.png'
import encIdeation from '../../assets/images/CaseStudies/ClearRTB-Marketing/ENC/ENC-Ideation5.jpg'

import bigBlackBox from '../../assets/images/CaseStudies/ClearRTB-Marketing/BlackBox/BigBlackBox.jpg'
import blackBoxIdeations from '../../assets/images/CaseStudies/ClearRTB-Marketing/BlackBox/BlackBox-Ideations.jpg'

import home from '../../assets/images/CaseStudies/ClearRTB-Marketing/home-subFinal.jpg'
import sketchView from '../../assets/images/CaseStudies/ClearRTB-Marketing/sketch-view.jpg'

import invision from '../../assets/images/CaseStudies/ClearRTB-Marketing/InVision.png'

import comments from '../../assets/images/CaseStudies/ClearRTB-Marketing/BlackBox/CRTB-comments.png'

const ClearRTBMarketing = (props) => (

    <Router>
      <div id="boilder-plate">
        <Navbar />
        <img className="study-banner" src={CRTBMarketingBanner} />
        <div className="case-study-content-wrapper">

          <div className="section-container">
            <p className="sect-head">UI/UX case study: ClearRTB</p>
            <p className="sub-title">Crafting the user experience of a marketing website</p>
          </div>

          <div className="section-container">
            <p className="sub-head">Introduction</p><br />
            <p className="section-content">I recently completed the User Experience and User Interface design phases of a marketing website for ClearRTB, a digital advertising company in Ogden, Utah. The following case study tells the story of my process at each stage and offers visual representations of the magic along the way.</p>
          </div>
          <div className="section-container">
            <p className="bold-content">Problems To Solve</p>
            <ol className="numbered-list">
            <li className="section-content ordered-item">A recent brand refresh necessitated a new look and feel to their website.</li>
              <li className="section-content ordered-item">The company's website did not tell a story of truth about the current industry trends where fraud and dishonesty are running rampant, a cause they champion.</li>
            </ol>
            <p className="bold-content">Objectives</p>
            <ol className="numbered-list">
              <li className="section-content ordered-item">Define business outcomes for the project as well as company operations as a whole.</li>
              <li className="section-content ordered-item">Identify the target users, explore everything about them, and define their pain points.</li>
              <li className="section-content ordered-item">Fashion possible solutions for pain points.</li>
              <li className="section-content ordered-item">Validate these solutions through prototyping and user testing.</li>
              <li className="section-content ordered-item">Impliment the designs that fit the needs of the core users and that are also consistent with business outcomes.</li>
            </ol>
          </div>

          <div className="section-container">
            <p className="sub-head">The Brief</p><br />
            <p className="section-content">As a UX Designer, my first priority was to meet with the stake holders to understand the problems and goals for the projects. When we met next I went through a series of questions that would help to focus our efforts and ensure that the product we were about to built would solve the problems at hand for the user.</p>
          </div>
          <img className="shadow study-image" src={briefMtg} alt="box" />
          <div className="section-container">
            <p className="image-label">My first strategy meeting with company's CEO</p>
          </div>
          <div className="section-container">
            <p className="bold-content">Purpose for the Site: High Level</p>
            <ol className="numbered-list">
              <li className="section-content ordered-item">Educate the user about the industry and company.</li>
              <li className="section-content ordered-item">Answer the questions: How are the company differs from the rest of the competition? To not tell but show.</li>
              <li className="section-content ordered-item">Market. Get more customers. Generate more revenue.</li>
              <li className="section-content ordered-item">Build trust.</li>
            </ol>
          </div>
          <div className="section-container">
            <p className="bold-content">Key Performance Indicators</p>
            <p className="section-content">What was important to the company was a few measurable results that would be generated from the website funcionality and design:</p>
            <ol className="numbered-list">
              <li className="section-content ordered-item">The users are scheduling appointments.</li>
              <li className="section-content ordered-item">The users are visiting the other sites after the homepage.</li>
            </ol>
          </div>
          <div className="section-container">
            <p className="bold-content">Target Users</p>
            <p className="section-content">The three target users that the company was focusing to service were:</p>
            <ol className="numbered-list">
              <li className="section-content ordered-item">Advertisers</li>
              <li className="section-content ordered-item">Publishers</li>
              <li className="section-content ordered-item">Agencies</li>
            </ol>
          </div>
          <div className="section-container">
            <p className="bold-content">Needs of the Users</p>
            <p className="section-content">This is where the passion for truth and transparency which is championed by the company is truly evident. User needs included:</p>
            <ol className="numbered-list">
              <li className="section-content ordered-item">Gain knowledge and understanding regarding the current dishonest and fraudulant state of industry players.</li>
              <li className="section-content ordered-item">Make financial decisions based on truth which will cause significant savings and increase revenue and productivity.</li>
            </ol>
          </div>
          <div className="section-container">
            <p className="bold-content">Design</p>
            <p className="section-content">The CEO already had a lot of ideas of what he wanted for the site. So he outlined the following:</p>
            <ol className="numbered-list">
              <li className="section-content ordered-item">Website wireframes.</li>
              <li className="section-content ordered-item">Necessary pages or sitemap.</li>
              <li className="section-content ordered-item">Call to action. Set up a call.</li>
              <li className="section-content ordered-item">Pricing calculator</li>
            </ol>
          </div>
          <div className="section-container">
            <p className="bold-content">Summary & Action Plan</p>
            <p className="section-content">By the end of the meeting I felt like I understood the direction that the CEO was wanting to go. I asked several questions such as who the target users are, the purpose of the site, what the needs are for both the user and the business, scope of project, and priorities.</p>
            <p className="section-content">The next step was to take the wireframe concepts and draft up lo-fi designs for review...and that's exactly what I did.</p>
          </div>
          <div className="section-container">
            <p className="sub-head">8+ Hours of Ideation Madness</p><br />
            <p className="section-content">The following day was spent drumming up ideas based on the information gathered during the brief. It was fun. I used my creative super powers to let almost any idea take form. The purpose was to create a palette of concepts and directions to present to the stake holders for further exploration in our next meeting. It was an exercise to see the breadth of what I could create in around 8 hours. <strong>Spoiler: The next time we met, he was pleasantly surprised.</strong></p>
          </div>
          <div className="section-container">
            <p className="bold-content">The Real Picture</p>
            <img className="shadow" src={RealPicture1} alt="box" />
            <p className="section-content">(Content coming soon!)</p><br />
            <img className="shadow" src={RealPicture2} alt="box" />
            <p className="section-content">(Content coming soon!)</p><br />
          </div>

          <div className="section-container">
            <p className="sub-head">Blur to Clear</p>
            <img className="shadow" src={BlurToClear1} alt="box" />
            <p className="section-content">(Content coming soon!)</p><br />
            <img className="shadow" src={BlurToClear2} alt="box" />
            <p className="section-content">(Content coming soon!)</p><br />
            <img className="shadow" src={BlurToClear3} alt="box" />
            <p className="section-content">(Content coming soon!)</p><br />
            <img className="shadow" src={BlurToClear4} alt="box" />
            <p className="section-content">(Content coming soon!)</p><br />
          </div>

          <div className="section-container">
            <p className="sub-head">Blue Blur</p>
            <img className="shadow" src={BlueBlur} alt="box" />
            <p className="section-content">(Content coming soon!)</p><br />
          </div>
          <div className="section-container">
            <div>
              <p className="sub-head">Dark Side of the Moon</p>
              <img className="shadow" src={Moon1} alt="box" />
              <p className="section-content">(Content coming soon!)</p><br />
              <img className="shadow" src={Moon2} alt="box" />
              <p className="section-content">(Content coming soon!)</p><br />
              <img className="shadow" src={Moon3} alt="box" />
              <p className="section-content">(Content coming soon!)</p><br />
            </div>

            <div>
              <p className="sub-head">Dark Side of the Moon</p>
              <img className="shadow" src={MeetMike} alt="box" />
              <p className="section-content">(Content coming soon!)</p><br />
              <img className="shadow" src={Meet3} alt="box" />
              <p className="section-content">(Content coming soon!)</p><br />
            </div>


          </div>


          <div className="section-container">
            <p className="sect-head">The Emperor's New Clothes</p><br />
            <p className="section-content">Though the ideas were noted, the owner had another idea of his own which we spent several weeks iterating on.</p>

            <div>
              <p className="sub-head">The Inspiration</p>
              <img className="shadow" src={encOriginal} alt="box" />
              <p className="section-content">I found this picture of a king galivanting around which reflected the ideas of the company.</p><br />
            </div>

            <div>
              <p className="sub-head">ENC Ideation</p>
              <img className="shadow" src={encIdeation} alt="box" />
              <p className="section-content">(Content coming soon!)</p><br />
            </div>

          </div>


          <div className="section-container">
            <p className="sect-head">The Black Box</p><br />
            <p className="section-content">The final idea that stuck was, a concept that continued to be consistent with the company's goals. The Black Box, to demonstrate the shady unknowns that the industry is serving to customers.</p>
            <img className="shadow" src={bigBlackBox} alt="box" />

            <div>
              <p className="sub-head">Ideation</p>
              <img className="shadow" src={blackBoxIdeations} alt="box" />
              <p className="section-content">(Content coming soon!)</p><br />
            </div>

          </div>

          <div className="section-container">
            <p className="sect-head">Black Box: User Testing</p><br />
            <p className="section-content">We went with the Black Box theme</p>
            <img className="shadow" src={home} alt="box" />

            <div>
              <p className="sub-head">Completed Screens</p>
              <img className="shadow" src={sketchView} alt="box" />
              <p className="section-content">(Content coming soon!)</p><br />
            </div>
            <div>
              <p className="sub-head">InVision: Prototype and User Testing</p>
              <img className="shadow" src={invision} alt="box" />
              <p className="section-content">We used InVision for the prototyping and user testing phase.</p><br />
            </div>
            <div>
              <p className="sub-head">Key Takeaways</p>
              <ol className="numbered-list">
                <li className="section-content ordered-item">The black box was confusing.</li>
                <li className="section-content ordered-item">People seemed to...</li>
              </ol>
            </div>

            <div>
              <p className="sub-head">User Comments</p>
              <img className="shadow" src={comments} alt="box" />
              <p className="section-content">(Content coming soon!)</p><br />
            </div>

          </div>

        </div>
        </div>

    </Router>

)

export default ClearRTBMarketing;
