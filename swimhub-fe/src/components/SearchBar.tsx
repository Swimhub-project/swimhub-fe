import React, { useState } from 'react';
import { ResultType } from '../lib/types';
import '../styles/components/search-bar.css';

interface SearchBarProps {
  posts: ResultType[];
  onSearch: (filteredPosts: ResultType[]) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ posts, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    const newSuggestions = posts
      .filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase())) ||
        post.body.toLowerCase().includes(query.toLowerCase())
      )
      .map((post) => post.title);
      setSuggestions(newSuggestions);
    };
  
    const handleSuggestionClick = (suggestion: string) => {
      setSearchQuery('');
  
      const filteredPosts = posts.filter((post) => post.title === suggestion);
      onSearch(filteredPosts);
  
      setSuggestions([]); // Clear suggestions when a suggestion is clicked
    };
    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        if (searchQuery.trim() !== '') {
          const filteredPosts = posts.filter((post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
            post.body.toLowerCase().includes(searchQuery.toLowerCase())
          );
          onSearch(filteredPosts);
        }
  
        setSearchQuery('');
        setSuggestions([]); // Clear suggestions
      }
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
