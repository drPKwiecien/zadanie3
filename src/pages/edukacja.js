import React, { useState, useEffect } from 'react';

export default function Edukacja() {
    const apiKey = 'AIzaSyAh-XFA4tmddyygRXGyzmRwHehSAn5_zfY'; // Replace with your actual YouTube Data API key
    const searchQuery = 'HOW TO WIN GO KARTING'; // Modify the query to get different types of videos
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&key=${apiKey}`;

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data); 
                setVideos(data.items); // Assuming 'items' contains the videos
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <main>  
            <div className="flex items-center justify-center w-full">
                <div>
                    <h2 className="flex items-center justify-center w-full text-2xl font-bold mb-5">Technika Jazdy Gokartem</h2>
                    {videos.map(video => (
                        <div key={video.id.videoId}>
                            <h3>{video.snippet.title}</h3>
                            <iframe
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={video.snippet.title}
                            ></iframe>
                        </div>
                    ))}

                </div>
            </div>
        </main>
    );
}
