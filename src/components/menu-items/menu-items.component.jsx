import React from 'react';
import './menu-items.styles.css';


const MenuItems = ({imageUrl, title, description}) =>(

   <div className="container">
       <div className="card"> 
           <div className="face face1"> 
                <div className="content">
                    <img src={imageUrl} alt="imaged"/>
                    <h3>
                        {title}
                    </h3>
                </div>
           </div>
           <div className="face face2">
                <div className="content">
                    <p>
                        {description}
                    </p>
                    <div className='wrapper'>
                        <a href="www.google.com">View Demo</a>
                        <a href="www.google.com">View Code</a>
                    </div>
                </div>
            </div> 
       </div>
   </div>
)

export default MenuItems;