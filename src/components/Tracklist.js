import { useState } from 'react';
import { TrackSummary } from './Tracksummary';
import tracks from '../data/tracks.json';

export default function Tracklist() {
  const [sortOption, setSortOption] = useState('');

  const sortedTracks = [...tracks].sort((a, b) => {
    if (sortOption === 'score') {
      return b.score - a.score; // Descending
    } else if (sortOption === 'date') {
      return new Date(a.date) - new Date(b.date); // Ascending
    } else if (sortOption === 'country') {
      return a.countrycode.localeCompare(b.countrycode); // Alphabetically by country code
    }
    return 0;
  });

  return (
    <div>
      <div className="mb-4">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
        >
          <option value="">Sortuj</option>
          <option value="score">Ocena</option>
          <option value="date">Data</option>
          <option value="country">Kraj</option>
        </select>
      </div>
      {sortedTracks.map((track) => (
        <div key={track.rank} className="mb-4">
          <TrackSummary
            rank={track.rank}
            name={track.name}
            type={track.type}
            date={track.date}
            score={track.score}
            imageUrl={track.imageUrl}
            url={track.url}
            city={track.city}
            countrycode={track.countrycode}
          />
        </div>
      ))}
    </div>
  );
}

