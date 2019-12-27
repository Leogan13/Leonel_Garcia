import React from 'react';
import SocialIcons from '../../components/SocialIcons/SocialIcons.jsx';
import './landingPage.styles.scss'



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