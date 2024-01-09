import React from 'react';
import TableButton from '../components/TableButton';


const TrackTable = () => {
    const tracks = [
        { rank: 1, name: 'Glass74 Karting', type: 'Outdoor', date: '2022-12-15', content: {images: ['/pictures/gass1.jpg', '/pictures/gass2.jpg']}, opis: <TableButton href='/Glass74'></TableButton> },
        { rank: 2, name: 'Karting 932 Alicante', type: 'Indoor', date: '2022-12-17', content: {images: ['/pictures/alicante1.jpg', '/pictures/alicante2.jpg']} , opis: <TableButton href='/Karting932'></TableButton>},
        { rank: 3, name: 'Indoor Karting Barcelona', type: 'Indoor', date: '2023-11-09', content: {videos: ['/movies/barcelona1.mp4']} , opis: <TableButton href='/IKBarcelona'></TableButton>},
    ];
    return (
        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Nazwa</th>
                    <th>Typ</th>
                    <th>Data</th>
                    <th>Media</th>
                    <th>Opis</th>
                </tr>
            </thead>
            <tbody>
                {tracks.map((track, trackIndex) => (
                    <tr key={trackIndex}>
                        <td>{track.rank}</td>
                        <td>{track.name}</td>
                        <td>{track.type}</td>
                        <td>{track.date}</td>
                        <td>
                            {track.content.images && track.content.images.map((image, index) => (
                                <img key={index} src={image} alt={`Track ${track.name}`} style={{ maxWidth: '100px' }}/>
                            ))}
                            {track.content.videos && track.content.videos.map((video, index) => (
                                <video key={index} width="160" height="90" controls >
                                    <source src={video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ))}
                        </td>
                        <td>{track.opis}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TrackTable;
