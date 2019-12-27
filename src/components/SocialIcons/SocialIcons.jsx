import React from 'react';
import './style.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'


const SocialIcons = ({size}) => {
  
  return (
    <div className="social-icons animate-icons text3">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Leogan13"><i><FontAwesomeIcon icon={faGithub} size={size}></FontAwesomeIcon></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/leonel-garcia-acosta" ><i><FontAwesomeIcon icon={faLinkedin} size={size}></FontAwesomeIcon></i></a>
    </div>
  );
};


export default SocialIcons;