import React from 'react';
import Image from 'next/image'


export default function ImageCarousel2({ images }) {
    return (
        <div>
            <div className="w-96 carousel rounded-box">
                {images.map((image, index) => (
                    <div key={index} id={`item${index + 1}`} className="carousel-item w-full">
                        <Image 
                        src={image.src} 
                        alt={image.alt} 
                        width={500} 
                        height={500} 
                        layout="responsive" 
                        />
                    </div>
                ))}
            </div>

            <div className="flex justify-center w-full py-2 gap-2">
                {images.map((_, index) => (
                    <a key={index} href={`#item${index + 1}`} className="btn btn-xs">{index + 1}</a>
                ))}
            </div>
        </div>
    );
}
