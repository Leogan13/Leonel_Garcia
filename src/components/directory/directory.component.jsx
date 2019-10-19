import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';
import Project1 from '../utils/projects/project11.PNG';
import Project2 from '../utils/projects/project22.PNG';
import MenuItems from '../menu-items/menu-items.component';


class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Crwn-clothing',
          imageUrl: Project1,
          id: 1,
          description: 'Massive E-commerce app built with React, Redux, Firebase and more.'
        },
        {
          title: 'Smart-brain',
          imageUrl: Project2,
          id: 2,  
          description: 'App that implements an API to recognize faces in an image, built with React, Redux, Node and more. '
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
