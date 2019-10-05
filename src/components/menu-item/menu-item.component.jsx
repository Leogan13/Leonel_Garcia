import React from 'react';
import './menu-item.styles.css';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  
  <div class="card middle">
        <div class="front">
         <img src="img.jpg" alt=""/>
        </div>
      <div class="back">
        <div class="back-content middle">
          <h2>DarkCode</h2>
          <span>Youtube Channel</span>
          <div class="sm">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
  </div>
);

export default MenuItem;
