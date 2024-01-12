import React from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player/lazy'; // Lazy load the video player

export default function ImageCarousel2({ images }) {
  // Helper function to determine if the URL is a video based on the extension
  const isVideo = (url) => {
    return /\.(mp4|webm|ogg)$/i.test(url);
  };

  return (
    <div>
      <div className="w-96 carousel rounded-box">
        {images.map((media, index) => (
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
              // Render a video if the media is a video
              <div className='player-wrapper'>
                <ReactPlayer
                  className='react-player'
                  url={media.src}
                  width='100%'
                  height='100%'
                  controls // Show video controls
                />
              </div>
            )}
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
