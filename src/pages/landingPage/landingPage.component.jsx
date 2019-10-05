import React from 'react';
import SocialIcons from '../../components/SocialIcons/SocialIcons.jsx';
import './landingPage.styles.scss'
import { ReactComponent as Linkedin } from '../../components/utils/svg/linkedin.svg';
import { ReactComponent as Github } from '../../components/utils/svg/github-logo.svg';



const LandingPage = () =>{

    return (
      <header>
        <div  className="landing-page">
          <main >
            <div className="intro-wrapper">
              <div className="intro-name ">Hello, I'm Leonel</div>
              <div className="tagline ">
                Web Developer  
              </div>
              <SocialIcons size={'2x'}/>
            </div>
          </main>
        </div>
     </header>
      );


}


export default LandingPage;