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
          <h3>Browse and make an online purchase</h3>
          <ImageCarousel></ImageCarousel>
        </div>        
      </div>
    );
  }
}

export default HomePage;
