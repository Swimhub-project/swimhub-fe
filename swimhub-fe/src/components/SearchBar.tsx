import React, { useState } from 'react';
import { EntryType } from '../lib/types';
import '../styles/components/search-bar.css';

interface SearchBarProps {
  entries: EntryType[];
  onSearch: (filteredEntries: EntryType[]) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ entries, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let query = e.target.value;
    setSearchQuery(query);

    query = query.replace(/\s/g, '%20');

    // Clear the filter and render all entries if the search input is empty
    if (query.trim() === '') {
      setSearchQuery('');
      onSearch(entries);
      setSuggestions([]);
      return;
    }
    const searchTerms = query.toLowerCase().split('%20');

    const newSuggestions = entries
    .filter((post) => {
      // Check if any of the search terms match any of the fields
      return searchTerms.some(term =>
        post.title.toLowerCase().includes(term) ||
        post.teaching_points.some((teaching_point) => teaching_point.toLowerCase().includes(term)) ||
        post.body.toLowerCase().includes(term) || 
        post.author.toLowerCase().includes(term)
      );
    })
    .map((post) => post.title);
  setSuggestions(newSuggestions);
};

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion); // Set the search input to the selected suggestion

    const filteredEntries = entries.filter((entry) => entry.title === suggestion);
    onSearch(filteredEntries);

    setSuggestions([]); // Clear suggestions when a suggestion is clicked
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      let query = searchQuery;
      query = query.replace(/\s/g, '%20');


      if (searchQuery.trim() !== '') {
        const filteredEntries = entries.filter((entry) =>
          entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          entry.teaching_points.some((teaching_point) => teaching_point.toLowerCase().includes(searchQuery.toLowerCase())) ||
          entry.body.toLowerCase().includes(searchQuery.toLowerCase()) ||
          entry.author.toLowerCase().includes(searchQuery.toLowerCase())
        );
  
        if (filteredEntries.length > 0) {
          // Update the filtered entries only if there are valid search results
          onSearch(filteredEntries);
        }
      } else {
        onSearch(entries);
      }
  
      setSuggestions([]); // Clear suggestions
    }
  };
  
  const handleClearClick = () => {
    setSearchQuery(''); // Clear the input field
    onSearch(entries); // Clear the filter and render all entries
    setSuggestions([]); // Clear suggestions
  };
  return (
    <div className='search_container'>
      <input
        className='searchbox'
        type="text"
        placeholder="&#128269; Search"
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />
      {searchQuery && (
        <button className='clear-button' onClick={() => handleClearClick()}>
          X
        </button>
      )}
      {suggestions.length > 0 && (
        <ul className='suggestions'>
          {suggestions.map((suggestion) => (
            <li className='suggestion' key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
