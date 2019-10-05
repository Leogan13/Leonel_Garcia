import React from 'react';
import './aboutPage.styles.scss';

const AboutPage = (props, context) => {
 

  return (
      
        <div className="about-page">
          <div className="content-grid">
            <h1>About me </h1>
            <div className="about-wrapper">
              <div className="about-content">
                <p>
                  I like building things and love trying to figure out how something works, those are the main reasons of why I love being a developer.
                  I built this site from scratch
                  By scratch, I mean absolutely from scratch
                  without any UI library/framework
                  (except React though) and had so much fun along the way.
                  React-Redux, Node.js, Ruby on Rails, Java, Spring Boot, Docker and
                  AWS are the main tricks up my sleeve. I am also obsessed with making the web look pretty with SASS/CSS.
                </p>
              </div>
            </div>
          </div>
        </div>
        
  );
};



export default AboutPage;
