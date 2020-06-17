import React, { Component } from 'react';
import './homepage.style.scss';
import ImageCarousel from './carousel/carousel.component';

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">       
        <div className="background"></div>
        <div className="mainheading">            
          <h1>The Art Page</h1>          
          <p>Browse and make an online purchase</p>
          <ImageCarousel></ImageCarousel>
        </div>        
      </div>
    );
  }
}

export default HomePage;
