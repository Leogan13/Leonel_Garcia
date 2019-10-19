import React from 'react';
import './aboutPage.styles.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faReact, faCss3, faHtml5, faJs, faNode, faSass, faGithubAlt, faNpm, faStripe} from '@fortawesome/free-brands-svg-icons'

const AboutPage = (props, context) => {
 

  return (
      
        <div className="about-page">
          <div className="content-gridp">
            <h1>About me </h1>
            <div className="about-wrapper">
              <div className="about-content">
                <p>
                Hello again, I’m Leonel Garcia a web developer from Panama, I consider myself someone that is always learning, you can call me a “forever student”, 
                combined with the fact that I love building things and helping others lead me to choose a career related with technology in this case computer science. 
                </p>
                <p>
                Since writing my first lines of code I knew that I was in the right path but back then I used to think that it doesn’t matter how something looks the important 
                part is that it works, nowadays it's different I’m obsessed with React and Sass because I want my work to look pretty but at same time I want it to be functional and clean.
                </p>
                <p>
                I’m always looking for fun and exciting projects if you have a challenge bring it on!
                </p>
              </div>
            </div>
          </div>
          <div className="content-grids">
            <h1>Skills</h1>
            <div className="skills-grid">
              <i ClassName="fa-react grow"><FontAwesomeIcon icon={faReact} size="3x"></FontAwesomeIcon></i>
              <i ClassName="fa-css3"><FontAwesomeIcon icon={faCss3} size="3x"></FontAwesomeIcon></i>
              <i ClassName="fa-html5"><FontAwesomeIcon icon={faHtml5} size="3x"></FontAwesomeIcon></i>
              <i className="fa-node"><FontAwesomeIcon icon={faNode} size="3x"></FontAwesomeIcon></i>
              <i className="fa-js"><FontAwesomeIcon icon={faJs} size="3x"></FontAwesomeIcon></i>
              <i className="fa-sass"><FontAwesomeIcon icon={faSass} size="3x"></FontAwesomeIcon></i>
              <i><FontAwesomeIcon icon={faGithubAlt} size="3x"></FontAwesomeIcon></i>
              <i className="fa-npm"><FontAwesomeIcon icon={faNpm} size="3x"></FontAwesomeIcon></i>
              <i className="fa-stripe"><FontAwesomeIcon icon={faStripe} size="3x"></FontAwesomeIcon></i>
            </div>
          </div>
        </div>
        
  );
};



export default AboutPage;
