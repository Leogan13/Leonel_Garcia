import React from 'react';
import './footer.styles.scss';
import SocialIcons from '../SocialIcons/SocialIcons'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Footer = () =>(
     
        <footer>
            <div className='footer-container'>
                <div className="signature">
                    Copyright © 2019 | Leonel Garcia
                </div>
                <SocialIcons size={'md'}/>
            </div>
         </footer>
)

export default Footer;