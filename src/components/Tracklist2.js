import { useState } from 'react';
import { TrackSummary } from './Tracksummary';
import tracks from '../data/tracks.json';

export default function Tracklist() {
  const [sortOption, setSortOption] = useState('');
  const [sortDirection, setSortDirection] = useState('descending');
  const [filterOption, setFilterOption] = useState('');
  const [filterValue, setFilterValue] = useState('');

  // Filter tracks based on the selected filter option and filter value
  const filteredTracks = tracks.filter((track) => {
    if (!filterValue) return true; // Return all tracks if no filter value is set
    if (filterOption === 'country') {
      return track.countrycode.toLowerCase() === filterValue.toLowerCase();
    } else if (filterOption === 'score') {
      return track.score >= parseInt(filterValue, 10); // Use radix parameter for parseInt
    }
    return true;
  });

  // Sort the filtered tracks based on the selected sort option and direction
  const sortedTracks = filteredTracks.sort((a, b) => {
    let comparison = 0;
    switch (sortOption) {
      case 'score':
        comparison = a.score - b.score;
        break;
      case 'date':
        comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
        break;
      case 'country':
        comparison = a.countrycode.localeCompare(b.countrycode);
        break;
      default:
        // Add a default case to handle when no sort option is selected
        comparison = 0;
    }
    // Reverse the comparison result if sort direction is ascending
    return sortDirection === 'ascending' ? comparison : -comparison;
  });

  const toggleSortDirection = () => {
    setSortDirection(sortDirection === 'ascending' ? 'descending' : 'ascending');
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
        <button
          onClick={() => toggleSortDirection()}
          className="btn border-black text-black bg-transparent hover:bg-transparent hover:border-oceanBlue hover:text-oceanBlue btn-secondary mb-1 ml-2"
        >
          {sortDirection === 'ascending' ? '↑' : '↓'}
        </button>
      </div>
      <div className="flex mb-4 items-center">
        <select
          value={filterOption}
          onChange={(e) => setFilterOption(e.target.value)}
          className="form-select form-select-lg mb-1"
          aria-label=".form-select-lg example"
        >
          <option value="">Filtruj</option>
          <option value="country">Kraj</option>
          <option value="score">Ocena</option>
        </select>
        {filterOption && (
          <input
            type="text"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            className="form-input"
            placeholder={filterOption === 'country' ? 'Podaj kod kraju' : 'Podaj minimalną ocenę'}
          />
        )}
      </div>
      {sortedTracks.map((track) => (
        <TrackSummary
          key={track.rank}
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
      ))}
    </div>
  );
}
