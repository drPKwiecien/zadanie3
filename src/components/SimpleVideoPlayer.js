import React from 'react';
import ReactPlayer from 'react-player/lazy'; // Lazy load the video player

export default function SVP({ images }) {

    const isLap = (url) => {
    return /LAP.*\.mp4$/i.test(url);
    };

    const shouldDisplayItem = (url) => {
    return isLap(url);
    };

    return (
    <div>
        <div className="w-96 carousel rounded-box">
        {images.filter(({ src }) => shouldDisplayItem(src)).map((media,index) => (
            <div key={index}>
                <ReactPlayer
                  className='react-player'
                  url={media.src}
                  width='100%'
                  height='100%'
                  controls 
                />
            </div>
        ))}
        </div>
    </div>


  );
}
