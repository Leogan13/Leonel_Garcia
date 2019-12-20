import React from 'react';
import './menu-items.styles.scss';


const MenuItems = ({imageUrl, title, description, tech}) =>(

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
            </div>
       </div>
   </div>
)

export default MenuItems;