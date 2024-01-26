import { useState } from 'react';
import { TrackSummary } from './Tracksummary';
import tracks from '../data/tracks.json';

export default function Tracklist() {
  const [sortOption, setSortOption] = useState('');
  const [sortDirection, setSortDirection] = useState('descending');


  const sortedTracks = [...tracks].sort((a, b) => {
    let comparison = 0;
    if (sortOption === 'score') {
      comparison = b.score - a.score; // Descending
    } else if (sortOption === 'date') {
      comparison = new Date(b.date) - new Date(a.date); // Descending
    } else if (sortOption === 'country') {
      comparison = b.countrycode.localeCompare(a.countrycode); // Alphabetically by country code - descending
    }
    if (sortDirection === 'ascending') {
      return -comparison;
    }

    return comparison;
  });

  const toggleSortDirection = () => {
    setSortDirection((prevDirection) => (prevDirection === 'descending' ? 'ascending' : 'descending'));
  };

  return (
    <div>
      <div className="flex mb-4 items-center">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="form-select form-select-lg mb-1"
          aria-label=".form-select-lg example"
        >
          <option value="">Sortuj</option>
          <option value="score">Ocena</option>
          <option value="date">Data</option>
          <option value="country">Kraj</option>
        </select>
        <button onClick={toggleSortDirection} className="btn border-black text-black bg-transparent hover:bg-transparent hover:border-oceanBlue hover:text-oceanBlue btn-secondary mb-1 ml-2">
          {sortDirection === 'ascending' ? '↑' : '↓'}
        </button>
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

