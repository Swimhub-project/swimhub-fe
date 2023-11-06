import React from 'react';
import { ResultType } from '../lib/types';

interface FilterPanelProps {
  posts: ResultType[];
  onFilterChange: (selectedFilters: string[]) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ posts, onFilterChange }) => {
  const tagsSet = new Set<string>();
  const userIDsSet = new Set<number>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagsSet.add(tag);
    });
    userIDsSet.add(post.userId);
  });

  const uniqueTags = Array.from(tagsSet);
  const uniqueUserIDs = Array.from(userIDsSet);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFilters: string[] = [];

    if (e.target.name === 'tags') {
      uniqueTags.forEach((tag) => {
        if (e.target.checked && e.target.value === tag) {
          selectedFilters.push(tag);
        }
      });
    } else if (e.target.name === 'userIDs') {
      uniqueUserIDs.forEach((userID) => {
        if (e.target.checked && e.target.value === userID.toString()) {
          selectedFilters.push(userID.toString());
        }
      });
    }

    onFilterChange(selectedFilters);
  };

  return (
    <div>
    <div className="filter_panel">
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
    </div>
  );
};

export default FilterPanel;
