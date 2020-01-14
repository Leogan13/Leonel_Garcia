import React from 'react';



import './directory.styles.scss';
import Project1 from '../utils/projects/clothing_1.png';
import Project2 from '../utils/projects/project22.PNG';
import Project3 from '../utils/projects/portfolio_project.PNG';
import MenuItems from '../menu-item/menu-items.component';


class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Crwn-clothing',
          imageUrl: Project1,
          id: 1,
          description: 'E-commerce web app that simulates a clothing store. It has an easy to use shopping cart, implements stripe for payments and firebase for the backend. This app is a learning material from the Complete React Developer Course instructed by Andrei Neagoie.',
          tech: ["Html","Css", "Sass", "Javascript","React", "Redux", "Firebase"],
          demo: "https://ecommerce-clothing1.herokuapp.com/",
          code: "https://github.com/Leogan13/Ecommerce-project"
        },
        {
          title: 'Smart-brain',
          imageUrl: Project2,
          id: 2,  
          description: 'Simple App that implements clarifai API to recognize faces in an image, it implements user logging, the server was built with node and express while postgresSQL was used for storage and administration of the users. This app is a learning material from the Complete Web Developer Course: Zero to Mastery instructed by Andrei Neagoie.',
          tech: ["Html","Css","Javascript", "React","Node.js","Express.js", "PostgreSQL",],
          demo: "http://smart-smart-brain.herokuapp.com",
          code: "https://github.com/Leogan13/Smart-brain"
        },
        {
          title: 'Web-Portfolio',
          imageUrl: Project3,
          id: 2,  
          description: "The idea behind this project was to create a simple website to showcase my skills and projects. I build almost everything from scratch with mostly React and Sass.",
          tech: ["Html", "Css", "Sass", "Javascript", "React"],
          demo: "https://leogan13.github.io/Leonel_Garcia/",
          code: "https://github.com/Leogan13/Leonel_Garcia"
        }
        
      ]
    };
  }

  render() {
    return (
     
        <div className='main-directory'>
          <div className='directory-container'>
              <h1>Projects</h1>
              <div className='directory-menu'>
                {this.state.sections.map(({ id, ...otherSectionProps }) => (
                  <MenuItems key={id} {...otherSectionProps} />
                ))}
              </div>
          </div>
        </div>
    );
  }
}

export default Directory;
