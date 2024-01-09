import React from 'react';

export default function ImageCarousel({ images }) {
  return (
    <div className="w-64 carousel rounded-box">
      {images.map((image, index) => (
        <div key={index} className="carousel-item w-full">
          <img src={image.src} className="w-full" alt={image.alt} />
        </div>
      ))}
    </div>
  );
}
