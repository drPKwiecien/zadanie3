import React, { useState } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player/lazy'; // Lazy load the video player

export default function ImageCarousel2({ images }) {

  const [activeIndex, setActiveIndex] = useState(0); // State to track active image
  // Function to set active index
  const setActive = (index) => {
    setActiveIndex(index);
  };

  // Helper function to determine if the URL is a video based on the extension
  const isVideo = (url) => {
    return /\.(mp4|webm|ogg)$/i.test(url);
  };

  const isLap = (url) => {
    return /LAP.*\.mp4$/i.test(url);
  };

  const shouldDisplayItem = (url) => {
    return !isLap(url);
  };

  return (
    <div>
      <div className="w-96 carousel rounded-box">
      {images.filter(({ src }) => shouldDisplayItem(src)).map((media, index) => (
          <div key={index} id={`item${index + 1}`} className="carousel-item w-full">
            {!isVideo(media.src) ? (
              // Render an image if the media is not a video
              <Image
                src={media.src}
                alt={media.alt}
                width={600}
                height={600}
                layout="responsive"
              />
            ) : (
              // Render a video if the media is a video but does not contain 'LAP' in name
              <div className='player-wrapper'>
                  <ReactPlayer
                    className='react-player'
                    url={media.src}
                    width='100%'
                    height='100%'
                    controls={true} // Show video controls
                    playsInline={true} // Optimize for mobile by playing video inline
                  />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center w-full py-2 gap-2">
      {images.filter(({ src }) => shouldDisplayItem(src)).map((_, index) => (
          <a 
          key={index} 
          href={`#item${index + 1}`} 
          className={`btn btn-xs ${index === activeIndex ? 'bg-oceanBlue' : ''}`}
          onClick={() => setActive(index)} // Set active index on click
          >{index + 1}</a>
        ))}
      </div>
    </div>
  );
}
