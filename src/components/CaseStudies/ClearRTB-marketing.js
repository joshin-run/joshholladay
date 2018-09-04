import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import NavbarDark from '../NavbarDark'
import wall1 from '../../assets/images/portfolio/Case Studies/ppl/PPL-initialSketches.png'

import CRTBMarketingBanner from '../../assets/images/CaseStudies/ClearRTB-Marketing/CRTB-Marketing-Banner2.png'
import ClearRTBMarketingImg from '../../assets/images/CaseStudies/ClearRTB-Marketing/ClearRTB-Marketing-ProjectImage.png'
import briefMtg from '../../assets/images/CaseStudies/ClearRTB-Marketing/BriefMtg-notes.png'

import theRealPicture from '../../assets/images/CaseStudies/ClearRTB-Marketing/Ideation/TheRealPicture.png'
import RealPicture1 from '../../assets/images/CaseStudies/ClearRTB-Marketing/Ideation/RealPicture-1.png'
import RealPicture2 from '../../assets/images/CaseStudies/ClearRTB-Marketing/Ideation/RealPicture-2.png'


import BlurToClear from '../../assets/images/CaseStudies/ClearRTB-Marketing/Ideation/Blur-to-Clear.png'
import BlurToClear1 from '../../assets/images/CaseStudies/ClearRTB-Marketing/Ideation/Blur-to-Clear1.png'
import BlurToClear2 from '../../assets/images/CaseStudies/ClearRTB-Marketing/Ideation/Blur-to-Clear2.png'
import BlurToClear3 from '../../assets/images/CaseStudies/ClearRTB-Marketing/Ideation/Blur-to-Clear3.png'
import BlurToClear4 from '../../assets/images/CaseStudies/ClearRTB-Marketing/Ideation/Blur-to-Clear4.png'

import BlueBlur from '../../assets/images/CaseStudies/ClearRTB-Marketing/Ideation/BlueBlur.png'

import Moon from '../../assets/images/CaseStudies/ClearRTB-Marketing/Ideation/DarkSide-Moon.png'
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

import invision from '../../assets/images/CaseStudies/ClearRTB-Marketing/InVision2.jpg'

import comments from '../../assets/images/CaseStudies/ClearRTB-Marketing/BlackBox/CRTB-comments.png'



import landingPage from '../../assets/images/CaseStudies/ClearRTB-Marketing/Final/CRTB.jpg'
import paywall from '../../assets/images/CaseStudies/ClearRTB-Marketing/Final/CRTB-paywall.jpg'
import advertiserPage from '../../assets/images/CaseStudies/ClearRTB-Marketing/Final/CRTB-Advertisers.jpg'
import resourcesPage from '../../assets/images/CaseStudies/ClearRTB-Marketing/Final/CRTB-Resources.jpg'
import technologyPage from '../../assets/images/CaseStudies/ClearRTB-Marketing/Final/CRTB-Technology.jpg'
import pricingPage from '../../assets/images/CaseStudies/ClearRTB-Marketing/Final/CRTB-Pricing.jpg'
import aboutPage from '../../assets/images/CaseStudies/ClearRTB-Marketing/Final/CRTB-About.jpg'



const ClearRTBMarketing = (props) => (

    <Router>
      <div id="boilder-plate">
        <NavbarDark />
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
          </div>
          <div className="section-container">
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
          <div className="section-container">
          <img className="shadow study-image" src={briefMtg} alt="box" />
            <p className="image-label">My first strategy meeting with the company's CEO</p>
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
            <p className="section-content">What was important to the company was a few measurable results that would be generated from the website functionality and design:</p><br />
            <ol className="numbered-list">
              <li className="section-content ordered-item">The users are scheduling appointments.</li>
              <li className="section-content ordered-item">The users are visiting the other sites after the homepage.</li>
            </ol>
          </div>
          <div className="section-container">
            <p className="bold-content">Target Users</p>
            <p className="section-content">The three target users that the company was focusing to service were:</p><br />
            <ol className="numbered-list">
              <li className="section-content ordered-item">Advertisers</li>
              <li className="section-content ordered-item">Publishers</li>
              <li className="section-content ordered-item">Agencies</li>
            </ol>
          </div>
          <div className="section-container">
            <p className="bold-content">Needs of the Users</p>
            <p className="section-content">This is where the passion for truth and transparency which is championed by the company is truly evident. User needs included:</p><br />
            <ol className="numbered-list">
              <li className="section-content ordered-item">Gain knowledge and understanding regarding the current dishonest and fraudulant state of industry players.</li>
              <li className="section-content ordered-item">Make financial decisions based on truth which will cause significant savings and increase revenue and productivity.</li>
            </ol>
          </div>
          <div className="section-container">
            <p className="bold-content">Design</p>
            <p className="section-content">The CEO already had a lot of ideas of what he wanted for the site. So he outlined the following:</p><br />
            <ol className="numbered-list">
              <li className="section-content ordered-item">Website wireframes.</li>
              <li className="section-content ordered-item">Necessary pages or sitemap.</li>
              <li className="section-content ordered-item">Call to action. Set up a call.</li>
              <li className="section-content ordered-item">Pricing calculator</li>
            </ol>
          </div>
          <div className="section-container">
            <p className="bold-content">Summary & Action Plan</p>
            <p className="section-content">By the end of the meeting I felt like I understood the direction that the CEO was wanting to go. I asked several questions such as who the target users are, the purpose of the site, what the needs are for both the user and the business, scope of project, and priorities. The next step was to take the wireframe concepts and draft up lo-fi designs for review...and that's exactly what I did.</p>
          </div>

          <div className="section-container">
            <p className="sub-head">8+ Hours of Ideation Madness</p><br />
            <p className="section-content">The following day was spent drumming up ideas based on the information gathered during the brief. It was fun. I used my creative super powers to let almost any idea take shape. The purpose was to create a palette of concepts and ideas then present to the stakeholders for further exploration in our next meeting. It was an exercise to see the breadth of what I could create in around 8 hours. The following are a few examples worthy of honorable mention.<strong> Spoiler Alert: The next time we met, confetti rained from the heavens.</strong></p><br />
          </div>
          <div className="section-container">
            <p className="bold-content">These First Four</p>
            <p className="section-content">My first hours of ideation were spent endeavoring to encapsulate the central concept that I gathered during our meeting and in other conversations about the product.</p><br />
            <ol className="numbered-list">
              <li className="section-content ordered-item">Educate the user about the truths concerning the digital ad and programmatic advertising industry.</li>
            </ol>
            <p className="section-content">The result was a set of ideas where the state of the visual presentation in the beginning represented confusion and obscurity. By the time the user scrolled down to the bottom of the page, while ingesting content along the way, the final visuals were to be portrayed as clear, ordered, and perceivable. A bit tricky to explain. Take a look below for some examples.</p><br />
          </div>

          <div className="section-container">
            <p className="bold-content">The Real Picture</p>
            <img className="shadow study-image" src={theRealPicture} alt="box" />
            <div className="section-container">
              <p className="image-label">From misaligned and translucent to straight and brilliant white.</p>
            </div>
            <p className="section-content">This example used the color of blue borrowed from the company's current landing page. The misaligned frames and faded color would gradually morph into a perfectly fashioned box, representing a journey from confusion to order. The content would essentially take the user through the same process. Specifically, a story where pieces of the truths about dishonesty in the digital advertising industry are unfolded till the whole of it's state simply can not be denied.</p><br />
          </div>

          <div className="section-container">
            <p className="bold-content">Blur to Clear</p>
            <img className="shadow study-image" src={BlurToClear} alt="box" />
            <div className="section-container">
              <p className="image-label">The user starts out with a blurred picture and eventually gains perspective</p>
            </div>
            <p className="section-content">A blurred image becomes crystal clear. 'Was blind, but now I see.' The concept is similar to the example above. A journey from blurred vision to a clear view. There's no possible way to tell what the picture is in the beginning. But by the end, it is clear. In fact, you could possibly even quote the longitude and latitude of the place...if you knew where it was...and had a cell phone handy...with reception.</p><br />
            <p className="section-content">For the company, this that, not only does the content educate about the industry's flaws, but it empowers the user, (agency, publisher, advertiser), to be able to avoid the pitfalls of over paying for advertising. It's a big deal.</p><br />
          </div>

          <div className="section-container">
            <p className="bold-content">The Dark Side of the Moon</p>
            <img className="shadow study-image" src={Moon} alt="box" />
            <div className="section-container">
              <p className="image-label">From darkness to light, the content and visual designs were to be used to unveil truth in harmony</p>
            </div>
            <p className="section-content">I'll be honest, this one was one of my favorite. How amazing is the moon! The reason why I thought this might work was because the company wanted a unique, eye catching approach, something different and unorthadox. Untraditional.</p><br />
            <p className="section-content">So as the user scrolls down the web page they experience a gradual panning out technique making the moon completely visable by the end. An emphasis on darkness symbolized hiding of truths, dishonesty, and the unknowns of the industry. It seemed to fit as a good candidate. I knew that great ideas stemmed from other lesser ideas. This was a good start of an idea.</p><br />
          </div>

          <div className="section-container">
            <p className="bold-content">Blue Blur</p>
            <img className="shadow study-image" src={BlueBlur} alt="box" />
            <div className="section-container">
              <p className="image-label">Blurred background which represents the everyday marketer's understanding of the digital advertising industry</p>
            </div>
            <p className="section-content">Using the same obscured vision concept, I chose an image that was blurred, but that followed a more appealing, bright and eye catching style and design. This banner design provided a fresh and modern look and could have served as a branding mechanism to introduce a cutting edge tech company that has a direct and bold message to share.</p><br />
          </div>
          <div className="section-container">
            <p className="bold-content">Meet Mike...and Company</p>
            <img className="shadow study-image" src={MeetMike} alt="box" />
            <div className="section-container">
              <p className="image-label">A picture of a business man in a hurry could represent the marketing professionals expected to visit and use the ensuing website</p>
            </div>
            <p className="section-content">The 'Meet Mike' concept originated from the idea of someone being in business or from a professional setting. The core users identified from the initial discovery conversation dictated that the users who would visit the site could look, act and think like Mike. Let's examine what this character Mike is up to and what he's all about.</p><br />
            <p className="section-content">Mike looks smart. He's dressed in a suit and the building behind him is huge. He looks well educated, and with one foot up in striding motion, life's not about to pass him by. There's energy here. He's checking his phone, possibly to scan his notifications, but we want the user to believe he's measuring the success of his campaigns from a user dashboard, or something that would stem from the content. Mike looks ready to take care of business at any moment.</p><br />
            <p className="section-content">Mike is empowered. He 'knows'. That's exactly what I wanted the user to feel, like they can know too. From a banner that says 'Be inspired by Mike.', to scrolling down to learn more, and finally to the great 'Aha! moment' where we win their hearts, that's the journey that was intended for the user in this idea. To help the advertiser, the publisher, or the agency know that we are transparent and that they get what they really pay for, which would be great advertising for their hard earned budget dollars, that's really the bottom line.</p><br />
          </div>
          <div className="section-container">
            <img className="shadow study-image" src={Meet3} alt="box" />
            <div className="section-container">
              <p className="image-label">A concept representing the three major users targeted for the website project: agencies, advertisers, and publishers</p>
            </div>
            <p className="section-content">One requirement for the marketing site was to funnel the users to the appropriate pages that would contain pertinant information for them to consume. Instead of guiding the users through the same experience on the landing page, then providing three buttons form them to click on for more information at the bottom of the landing page, my thought was to present this option early on, or right away, in the banner. This three column design is what it materialized.</p><br />
          </div>

          <div className="section-container">
            <p className="sub-head">The Second Meeting</p><br />
            <p className="section-content">Once these and many other ideas were ready, I sat down with the CEO, the primary stakeholder, and presented my designs and ideas to him. I described my reasoning and recommendations, both on a UX Design and UI Design level. In truth, there was no confetti that rained from above. But, what did happen was that I was praised for my ability to bring so many ideas to the table, with such breadth and differing applications, in such a short amount of time. (Better than confetti!)</p><br />
            <p className="section-content">There were many ideas, designs, and concepts that were considered to be good candidates. However, the CEO also had some ideas. We pooled our ideas together, I made recommendations. We ran with one particular idea for over a month or more...which was an entirely different adventure.</p><br />
          </div>

          <div className="section-container">
            <p className="sub-head">The Emperor's New Clothes</p><br />
            <p className="section-content">As the story goes, there were a couple of swendlers who came to the King's household. They offered to weave special cloths for the King that would inform him who should be fired or who was incompitent for their given task. When the weavers came back, they came with seemingly transparent clothing. Those who could not see the clothing were deemed unworthy of hire. And so the great trick was played the the King went about in his underwear.</p><br />
            <p className="section-content">The premise for this concept was that there were 'swendelers' out there, other advertising firms who take advantage of the company who wants to advertiser. They hide the data and keep the margins to themselves for profit. The idea was intended to demonstrate the severity of the level of dishonesty and distrust current in the marketplace.</p><br />
          </div>
          <div className="section-container">
            <p className="sub-head">The Inspiration</p>
            <img className="shadow study-image" src={encOriginal} alt="box" />
            <div className="section-container">
              <p className="image-label">Painted on the exterior wall of a building, this image depicts the Emperor from a classic children's story 'The Emperor's New Clothes'</p><br />
            </div>
            <p className="section-content">In my research for the perfect emperor, I found this picture of a king painted on the external wall of some building or structure. The king seems to be in the attitude of galivanting around in the nude, proud and pompus as ever. This photograph depicted the exact key elements I was looking for. Certainly a perfect fit. So I got to work.</p><br />
          </div>

          <div className="section-container">
            <p className="bold-content">ENC Ideation</p>
            <img className="shadow study-image" src={encIdeation} alt="box" />
            <div className="section-container">
              <p className="image-label">A few designs that embodied the spirit of a cleverly fooled Emperor who thought he was too smart for his britches</p><br />
            </div>
            <p className="section-content">I chose to create an outline of the Emperor and to fill the outline with a solid color. I used this graphic as a centerpiece and engaged in another round of ideation and concepts. Along the way I would bring my creations to the CEO who would guide my next actions according to how he felt the project should go. The following is a list of reasons why I chose to design a few of these examples the way I did.</p><br />
            <ol className="numbered-list">
              <li className="section-content ordered-item">One of the main initiatives was to make a clean and simple site. So I took that approach in several instances. I wasn't given any content to begin with, so the lesser the content in the banner, the less crowded it appeared.</li>
              <li className="section-content ordered-item">I drew a scene depicting the Emperor walking from the nearby village on his way to the castle. This was supposed to appeal to the story book side of the concept.</li>
              <li className="section-content ordered-item">The large and partially hiden version of the Emporer was really another design variation where the Emperor would be more of an accent, yet retaining focus.</li>
              <li className="section-content ordered-item">There were a few ideas that utilized the current color palette of the company's site. I thought it was a good color so I combined the two to see what might stick.</li>
              <li className="section-content ordered-item">The Emperor appears on a laptop. It was an interesting combination. I added a graph to represent the visualization of campiagn data that might be displayed by a user tool.</li>
              <li className="section-content ordered-item">I designed what the publisher page could look like with a diagonal design indicating a new section with new information.</li>
              <li className="section-content ordered-item">The final design that appears in the example represents the design used that inspired the final version. The background uses squares of varying sizes that are transparent, matching the company's differentiator, to be transparent with data and how they spend client funds. I used a blue background, much like the original blue color of their current site, but brightened it drasticly with even more blue. I added a circular gradient. Gradients are trending right now in web design. The emperor spans two sections of content as a white 'giant' with a drop shadow to introduce depth.</li>
            </ol>
            <div className="section-container">
              <p className="bold-content">Summary</p>
              <p className="section-content">In the end, and after developing several pages with this theme, the CEO came to me during the design process with an idea about a black box and instructed me to scrap the Emperor's New Clothes idea. Though we I had spent a significant amount of time on this idea, I felt that there were better ways to portray the story. The concept wasn't all that viable to my way of thinking after all.</p><br />
            </div>
          </div>

          <div className="section-container">
            <p className="sect-head">The Black Box</p><br />
            <img className="shadow study-image" src={bigBlackBox} alt="box" />
            <div className="section-container">
              <p className="image-label">The advent of the black box: an inperceptible product, when put into the hands of the customer </p><br />
            </div>
            <p className="section-content">The final idea that was prescribed was a concept where a black box represented a product, in this case, a service, that the industry provided to the customer. It was packaged nicely, but, the client really didn't know what it was or what was inside. This was an idea that, once again suggested fraud, dishonesty and obscurity as customer dollar spending was being hidden from customer view.</p><br />
          </div>
          <div className="section-container">
            <p className="bold-content">Black Box Ideation</p>
            <img className="shadow study-image" src={blackBoxIdeations} alt="box" />
            <div className="section-container">
              <p className="image-label">This initiative stemed from industry solutions that resemble black boxes, indicative of the lack of visibility about campaign effectiveness</p><br />
            </div>
            <p className="section-content">First, I designed the black box. It needed to look impressive, three dimensional, so I made creating gradients for each side a priority. There were a few different perspectives and shapes that I tested out. The following is a list of thoughts that explain why I chose to create the varying designs with the black box theme.</p><br />
            <ol className="numbered-list">
              <li className="section-content ordered-item">The design with a white background was intended to look like a conversation bubble where the content would tell a story on the left. White and blue were part of the color palette. The white provided a higher level of contract against the black box and the blue background. The idea also was to bring more character and creative design to the banner and to peak the interest of the user visiting the site.</li>
              <li className="section-content ordered-item">A few design concepts included a large black box in the background, one having an authoratative air, the other simply positioned in a hovering state.</li>
              <li className="section-content ordered-item">Black Box Monster reared its ugly head and made its debut during the design exploration process. This idea was fun and interesting but, wasn't the direction the company wanted to move towards, so it was scrapped.</li>
              <li className="section-content ordered-item">The final picture on the bottom right, less the faded platform directly below the black box, was where we settled. Simple. Just a black box. Blue and white as the other colors in the design palette. This was the beginning of the end.</li>
            </ol>
          </div>

          <div className="section-container">
            <p className="sub-head">Black Box: User Testing</p><br />
            <img className="shadow study-image" src={home} alt="box" />
            <div className="section-container">
              <p className="image-label">This is the version of the homepage banner used shortly before engaging users for feedback</p><br />
            </div>
            <p className="section-content">With the Black Box as the central theme and the designs established from the 'Emporer's New Clothes' phase, I set out to gather feedback from users. The image below shows the website in its entirety and represents the prototype we tested.</p><br />
          </div>

          <div className="section-container">
            <p className="bold-content">Completed Screens</p>
            <img className="shadow study-image" src={sketchView} alt="box" />
            <div className="section-container">
              <p className="image-label">A screen shot of the entire marketing web page project as viewed in Sketch</p><br />
            </div>
            <p className="section-content">Most, if not all of the project was fashioned, formed, and finalized in Sketch. Features such as symbols, the pen tool, and many others made it a rich experience to ideate and design with the Sketch app. (Note: I chose to wait until the end of the case study to show larger images of the website in its entirety.)</p><br />
          </div>

          <div className="section-container">
            <p className="sub-head">InVision: Prototype and User Testing</p>
            <img className="shadow study-image" src={invision} alt="box" />
            <div className="section-container">
              <p className="image-label">InVision screens. Top row: Screens viewable to the user tester. Bottom Row: Screens viewable to logged in project team members</p><br />
            </div>
            <p className="section-content">We used InVision for prototyping which worked well using the Craft plugin for Sketch. I was able to show multiple members of our team the functionality and general design of the application. The user testing phase naturally followed with sharing a link and receiving feedback via comments on each prototype page.</p><br />
          </div>

          <div className="section-container">
            <p className="bold-content">A Note on Research and Testing</p>
            <p className="section-content">The fact that this project had gotten to this point where a prototype of the site had been created before production and that user research was about to be conducted was truly a UX Designer's greatest hope fulfilled. A moment of silence and several communications later, we found ourselves receiving invaluable feedback in no time at all.</p><br />
            <p className="section-content">We used several avenues to find people who would bring value to the testing process. I tapped into my personal network connections through Slack, email, LinkedIn, Twitter, Facebook, and so on. The company also solicited some of their industry specific contacts.</p><br />
          </div>

          <div className="section-container">
            <p className="bold-content">User Comments</p>
            <img className="shadow study-image" src={comments} alt="box" />
            <div className="section-container">
              <p className="image-label">The InVision app screen which provides a list of comments for a selected project</p><br />
            </div>
            <p className="section-content">The kinds of users who ended up agreeing to click through the prototype included UX Designers, Front-end Developers, and others who could view both the design and content and scrutinize the whole of it for the good of the project. We learned a few important things during the entire process.</p><br />
          </div>

          <div className="section-container">
            <p className="bold-content">Summary of Feedback</p>
            <p className="section-content">The main things that we learned centered around consistency in design. There were sections that included similar components, but that were not consistent. Also, the color palette and colors used could be expanded. The overall feedback, however, was that the application was well designed. However, because the company didn't want to spend too much time in the testing process, we moved on quickly to making changes and sending the deliverables off to production.</p><br />
          </div>

          <div className="section-container">
            <p className="sub-head">The Final Stretch: A Finished Design</p><br />
            <p className="section-content">The following images represent final designs for the marketing website submitted to the development team.</p><br />
          </div>


          <div className="section-container">
            <p className="bold-content">The Landing Page</p>
            <img className="shadow study-image" src={landingPage} alt="box" />
            <div className="section-container">
              <p className="image-label">ClearRTB.com future landing page for the marketing website initiative.</p><br />
            </div>
            <p className="section-content">(Content coming soon.)</p><br />
          </div>

          <div className="section-container">
            <p className="bold-content">The Paywall</p>
            <img className="shadow study-image" src={paywall} alt="box" />
            <div className="section-container">
              <p className="image-label">A paywall is a feature that forces the user to make a choice before proceeding to the rest of the site content</p><br />
            </div>
            <p className="section-content">Paywalls are used on many websites to prompt an ation, usually to pay for a subscription or membership, before proceeding. For our purposes we modified the concept where, payment wasn't required, only the declaration of what kind of business the user is by clicking on a button that appears on scrolling down.</p><br />
            <p className="section-content"> The idea of offering different content to the three different target users was an area of much discussion. I concluded </p><br />
          </div>

          <div className="section-container">
            <p className="bold-content">The Langing Page: Advertiser Version</p>
            <img className="shadow study-image" src={advertiserPage} alt="box" />
            <div className="section-container">
              <p className="image-label">This is information regarding the image above</p><br />
            </div>
            <p className="section-content">The summary for this design...</p><br />
          </div>
          <div className="section-container">
            <p className="bold-content">The Resources Page</p>
            <img className="shadow study-image" src={resourcesPage} alt="box" />
            <div className="section-container">
              <p className="image-label">This is information regarding the image above</p><br />
            </div>
            <p className="section-content">The summary for this design...</p><br />
          </div>
          <div className="section-container">
            <p className="bold-content">The Technology Page</p>
            <img className="shadow study-image" src={technologyPage} alt="box" />
            <div className="section-container">
              <p className="image-label">This is information regarding the image above</p><br />
            </div>
            <p className="section-content">The summary for this design...</p><br />
          </div>
          <div className="section-container">
            <p className="bold-content">The Pricing Page</p>
            <img className="shadow study-image" src={pricingPage} alt="box" />
            <div className="section-container">
              <p className="image-label">This is information regarding the image above</p><br />
            </div>
            <p className="section-content">The summary for this design...</p><br />
          </div>
          <div className="section-container">
            <p className="bold-content">The About Page</p>
            <img className="shadow study-image" src={aboutPage} alt="box" />
            <div className="section-container">
              <p className="image-label">This is information regarding the image above</p><br />
            </div>
            <p className="section-content">The summary for this design...</p><br />
          </div>
          <div className="section-container">
            <p className="sub-head">Conclusion</p>
            <p className="section-content">(Content coming soon.)</p><br />
          </div>

          <div className="section-container">
            <p className="sub-head">What I Would Have Done Differently</p>
            <p className="section-content">The company...</p><br />
          </div>
          <div className="section-container">
            <p className="bold-content">UX Design</p>
            <ol className="numbered-list">
              <li className="section-content ordered-item">(Content coming soon.)</li>
            </ol>
          </div>
          <div className="section-container">
            <p className="bold-content">Research</p>
            <ol className="numbered-list">
              <li className="section-content ordered-item">(Content coming soon.)</li>
            </ol>
          </div>
          <div className="section-container">
            <p className="bold-content">UI Design</p>
            <ol className="numbered-list">
              <li className="section-content ordered-item">(Content coming soon.)</li>
            </ol>
          </div>
          <div className="section-container">
            <p className="bold-content">Prooving and Disprooving Assumptions</p>
            <ol className="numbered-list">
              <li className="section-content ordered-item">(Content coming soon.)</li>
            </ol>
          </div>
          <div className="section-container">
            <p className="bold-content">The Paywall</p>
            <ol className="numbered-list">
              <li className="section-content ordered-item">(Content coming soon.)</li>
            </ol>
          </div>


        </div>
      </div>
    </Router>

)

export default ClearRTBMarketing;
// <div className="section-container">
// <p className="bold-content">Prooving or Disprooving Our Assumptions</p>
//   <p className="section-content">The question, however in my mind was:</p><br />
//   <ol>
//   <li className="section-content ordered-item">"Did we really build an app that would meet the needs of the target users?"</li>
//   </ol>
// </div>
