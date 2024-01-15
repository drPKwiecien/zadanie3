import { TrackSummary } from './Tracksummary';
import tracks from '../data/tracks.json';



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
            score={track.score}
            imageUrl={track.imageUrl}  
            url={track.url} 
            city={track.city}
          />
        </div>
      ))}
    </div>
  );
}


