import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Image from 'next/image'

export default function ImageCarousel({ images }) {
    return (
      <Carousel>
        {images.map((image, index) => (
          <div key={index} style={{ padding: '8px' }}> 
            <Image 
              src={image.src} 
              alt={image.alt} 
              width={500} 
              height={500} 
              layout="responsive" 
            />
          </div>
        ))}
      </Carousel>
    );
}
