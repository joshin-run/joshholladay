import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Navbar from '../Navbar'
import wall1 from '../../assets/images/portfolio/Case Studies/ppl/PPL-initialSketches.png'
import ClearRTBMarketingImg from '../../assets/images/CaseStudies/ClearRTB-Marketing/ClearRTB-Marketing-ProjectImage.png'
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

const ClearRTBMarketing = (props) => (

    <Router>
      <div id="boilder-plate">
        <Navbar />
        <div className="boilerPlateBanner">
          <p className="banner-header">
            ClearRTB Marketing Website
          </p>
        </div>
        <img className="initial-sketches" src={ClearRTBMarketingImg} />
        <div className="case-study-content-wrapper">
          <div className="section-container">
            <p className="sect-head">Company Bio: Why. What. How.</p><br />
            <p className="section-content">Text</p>
          </div>


          <div className="section-container">

            <p className="sect-head">Project Overview</p><br />
            <p className="section-content">I was approached by ClearRTB to act as principle designer on their team. The industry in which they market their services in is Programmatic Digital Advertising. </p><br />

            <p className="sub-head">Problems to be solved</p>
            <ol className="numbered-list">
              <li className="section-content ordered-item">Simple, proffesional, clear communication.</li>
              <li className="section-content ordered-item">I like this the most for showing how things connect. It's a lot of detail, but I think it would be very clear to most people.</li>
            </ol>

            <p className="sub-head">Outcomes:</p>
            <ol className="numbered-list">
              <li className="section-content ordered-item">Simple, proffesional, clear communication.</li>
              <li className="section-content ordered-item">I like this the most for showing how things connect. It's a lot of detail, but I think it would be very clear to most people.</li>
            </ol>

          </div>


          <div className="section-container">
            <p className="sect-head">The Brief</p><br />
            <p className="section-content">As a UX Designer, my first priority was to meet with the stake holders to understand the problems and goals for the projects. When we met next I went through a series of questions that would help to focus our efforts and ensure that the product we were about to built would solve the problems at hand for the user.</p><br />

            <p className="sub-head">Questions and Answers</p>
            <ol className="numbered-list">
              <li className="section-content ordered-item">What?</li>
              <li className="section-content ordered-item">How?</li>
            </ol>

          </div>


          <div className="section-container">
            <p className="sect-head">Ideation: 8+ Hours of Madness</p><br />
            <p className="section-content">Next, I was tasked to spend the following day drumming up ideas based on the information gathered during the brief. It was fun. I used my creative super powers to throw out and mockup almost any idea that I thought of. The purpose was to create a palette of concepts and directions to present to the stake holders for further development in our next meeting.</p><br />

            <div>
              <p className="sub-head">The Real Picture</p>
              <img src={RealPicture1} alt="box" />
              <p className="section-content">As a UX Designer, my first priority was to meet with the stake holders to understand the problems and goals for the projects. When we met next I went through a series of questions that would help to focus our efforts and ensure that the product we were about to built would solve the problems at hand for the user.</p><br />
              <img src={RealPicture2} alt="box" />
              <p className="section-content">As a UX Designer, my first priority was to meet with the stake holders to understand the problems and goals for the projects. When we met next I went through a series of questions that would help to focus our efforts and ensure that the product we were about to built would solve the problems at hand for the user.</p><br />
            </div>

            <div>
              <p className="sub-head">Blur to Clear</p>
              <img src={BlurToClear1} alt="box" />
              <p className="section-content">As a UX Designer, my first priority was to meet with the stake holders to understand the problems and goals for the projects. When we met next I went through a series of questions that would help to focus our efforts and ensure that the product we were about to built would solve the problems at hand for the user.</p><br />
              <img src={BlurToClear2} alt="box" />
              <p className="section-content">As a UX Designer, my first priority was to meet with the stake holders to understand the problems and goals for the projects. When we met next I went through a series of questions that would help to focus our efforts and ensure that the product we were about to built would solve the problems at hand for the user.</p><br />
              <img src={BlurToClear3} alt="box" />
              <p className="section-content">As a UX Designer, my first priority was to meet with the stake holders to understand the problems and goals for the projects. When we met next I went through a series of questions that would help to focus our efforts and ensure that the product we were about to built would solve the problems at hand for the user.</p><br />
              <img src={BlurToClear4} alt="box" />
              <p className="section-content">As a UX Designer, my first priority was to meet with the stake holders to understand the problems and goals for the projects. When we met next I went through a series of questions that would help to focus our efforts and ensure that the product we were about to built would solve the problems at hand for the user.</p><br />
            </div>

            <div>
              <p className="sub-head">Blue Blur</p>
              <img src={BlueBlur} alt="box" />
              <p className="section-content">As a UX Designer, my first priority was to meet with the stake holders to understand the problems and goals for the projects. When we met next I went through a series of questions that would help to focus our efforts and ensure that the product we were about to built would solve the problems at hand for the user.</p><br />
            </div>

            <div>
              <p className="sub-head">Dark Side of the Moon</p>
              <img src={Moon1} alt="box" />
              <p className="section-content">As a UX Designer, my first priority was to meet with the stake holders to understand the problems and goals for the projects. When we met next I went through a series of questions that would help to focus our efforts and ensure that the product we were about to built would solve the problems at hand for the user.</p><br />
              <img src={Moon2} alt="box" />
              <p className="section-content">As a UX Designer, my first priority was to meet with the stake holders to understand the problems and goals for the projects. When we met next I went through a series of questions that would help to focus our efforts and ensure that the product we were about to built would solve the problems at hand for the user.</p><br />
              <img src={Moon3} alt="box" />
              <p className="section-content">As a UX Designer, my first priority was to meet with the stake holders to understand the problems and goals for the projects. When we met next I went through a series of questions that would help to focus our efforts and ensure that the product we were about to built would solve the problems at hand for the user.</p><br />
            </div>

            <div>
              <p className="sub-head">Dark Side of the Moon</p>
              <img src={MeetMike} alt="box" />
              <p className="section-content">As a UX Designer, my first priority was to meet with the stake holders to understand the problems and goals for the projects. When we met next I went through a series of questions that would help to focus our efforts and ensure that the product we were about to built would solve the problems at hand for the user.</p><br />
              <img src={Meet3} alt="box" />
              <p className="section-content">As a UX Designer, my first priority was to meet with the stake holders to understand the problems and goals for the projects. When we met next I went through a series of questions that would help to focus our efforts and ensure that the product we were about to built would solve the problems at hand for the user.</p><br />
            </div>


          </div>



        </div>
      </div>
    </Router>

)

export default ClearRTBMarketing;
