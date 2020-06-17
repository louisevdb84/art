import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class ImageCarousel extends Component {
     onChange = () => {
         console.log("change");
     }
     onClickItem = () => {
         console.log("click");
     }
     onClickThumb = () => {
         console.log("Thumb");
    }
    
    render() {
      
        return (
            <Carousel infiniteLoop={true} autoPlay={true} showArrows={true} onChange={this.onChange} onClickItem={this.onClickItem} onClickThumb={this.onClickThumb}>
                <div>
                    <img src="https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                    
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80" />
                    
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                    
                </div>
                                <div>
                    <img src="https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                    
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80" />
                    
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                    
                </div>
            </Carousel>
        );
    }
};

export default ImageCarousel;