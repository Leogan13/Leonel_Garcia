import React from 'react';
import './menu-items.styles.scss';



const MenuItems = ({imageUrl, title, description, tech, demo, code}) =>(

   <div className="container">
       <div className="card">
            <div className="img-content">
                <img src={imageUrl} alt="imaged"/>
            </div>
            <div className="content">
                <h3>
                    {title}
                </h3>
                <ul className="tech-items">
                    {tech.map((technology) => (
                    <li>{technology}</li>
                    ))}
                </ul>   
                <p>
                    {description}
                </p>
                <div className="link-group">
                  <a href={`${code}`}  target="_blank" rel="noopener noreferrer">View Demo</a>
                  <a href={`${code}`}  target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
                
            </div>
       </div>
   </div>
)

export default MenuItems;