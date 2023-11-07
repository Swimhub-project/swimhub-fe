import {useState} from 'react';
import { ResultType } from '../lib/types';

interface FilterPanelProps {
  posts: ResultType[];
  onFilterChange: (selectedFilters: string[]) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ posts, onFilterChange }) => {
  const uniqueTags = [...new Set(posts.flatMap(post => post.tags))];
  const uniqueUserIDs = [...new Set(posts.map(post => post.userId.toString()))];
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]); 


  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilters = e.target.checked
      ? [...selectedFilters, e.target.value]
      : selectedFilters.filter(filter => filter !== e.target.value);
    setSelectedFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="filter-panel">
        <span>
      <h3>Tags</h3>
      <hr />
      </span>
      <ul>
        {uniqueTags.map((tag) => (
          <li key={tag}>
            <label>
            {tag}
              <input
                type="checkbox"
                name="tags"
                value={tag}
                onChange={handleFilterChange}
              />
            </label>
          </li>
        ))}
      </ul>
    <span>
      <h3>UserID</h3>
      <hr />
      </span>
      <ul>
        {uniqueUserIDs.map((userID) => (
          <li key={userID}>
            <label>
            {userID}
              <input
                type="checkbox"
                name="userIDs"
                value={userID.toString()}
                onChange={handleFilterChange}
              />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterPanel;
