import React from 'react';
import './footer.styles.scss';
import SocialIcons from '../SocialIcons/SocialIcons'




const Footer = () =>(
     
        <footer>
            <div className='footer-container'>
                <div className="signature">
                    Copyright © 2019 | Leonel Garcia | email: leogan1399@gmail.com
                </div>
                
                <SocialIcons size={'md'}/>
                
            </div>
         </footer>
)

export default Footer;