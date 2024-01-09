import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS

export default function ImageCarousel({ images }) {
    return (
      <Carousel>
        {images.map((image, index) => (
          <div key={index} style={{ padding: '5px' }}> {/* Add padding here */}
            <img src={image.src} alt={image.alt} style={{ width: 'auto', height: 'auto' }} />
          </div>
        ))}
      </Carousel>
    );
  }
  