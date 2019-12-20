import React from 'react';
import './footer.styles.scss';
import SocialIcons from '../SocialIcons/SocialIcons'
import Button from '@material-ui/core/Button';



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