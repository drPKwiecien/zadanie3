import Link from 'next/link';
import { TrackSummary } from './Tracksummary';

const tracks = [
    { 
      rank: 1, 
      name: 'Glass74 Karting', 
      type: 'Outdoor', 
      date: '2022-12-15', 
      imageUrl: '/pictures/gass1.jpg',
      url: '/posts/gass74'
    },
    { 
      rank: 2,
      name: 'Karting 932 Alicante',
      type: 'Indoor',
      date: '2022-12-17',
      imageUrl: '/pictures/alicante1.jpg',
      url: '/posts/karting932'
    },
    { 
      rank: 3, 
      name: 'Indoor Karting Barcelona', 
      type: 'Indoor', 
      date: '2023-11-09', 
      imageUrl: '/pictures/barcelona1.jpg', 
      url: '/posts/ikbarcelona'
    },
    { 
      rank: 4, 
      name: 'Kraków WRT', 
      type: 'Indoor',
      date: '2022-03-15', 
      imageUrl: '/pictures/krakowWRT1.jpg', 
      url: '/posts/krakowWRT'
    },
];

export default function Tracklist() {
  return (
    <div className="">
      { tracks.map((track) => (
        <div className="mb-4">
          <TrackSummary
            rank={track.rank}
            name={track.name}
            type={track.type}
            date={track.date} 
            imageUrl={track.imageUrl}  
            url={track.url} 
          />
        </div>
      ))}
    </div>
  );
}


