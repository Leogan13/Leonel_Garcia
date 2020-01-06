import React from 'react';
import './style.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import{faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'


const SocialIcons = ({size}) => {
  
  return (
    <div className="social-icons animate-icons text3">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Leogan13"><i><FontAwesomeIcon icon={faGithub}  size={size}></FontAwesomeIcon></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/leonel-garcia-acosta" ><i><FontAwesomeIcon  icon={faLinkedin} size={size}></FontAwesomeIcon></i></a>
        <a target="_blank" rel="noopener noreferrer" href="mailto:leogan1399@gmail.com" ><i><FontAwesomeIcon icon={faEnvelopeSquare} size={size}></FontAwesomeIcon></i></a>
    </div>
  );
};


export default SocialIcons;