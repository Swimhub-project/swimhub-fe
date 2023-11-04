import { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import styles from '../styles/components/SearchBar.module.css';

interface SearchBarProps {
  fetchData: (value: string) => Promise<any[]>;
  setResult: (result: any) => void;
  suggestionKey: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ fetchData, setResult, suggestionKey }) => {
  const [value, setValue] = useState(''); 
  const [suggestions, setSuggestions] = useState<any[]>([]); 
  const [hideSuggestions, setHideSuggestions] = useState(true);

  const findResult = (value: string) => {
    setResult(
      suggestions.find((suggestion) => suggestion[suggestionKey] === value)
    );
  };

  useDebounce(
    async () => {
      try {
        const suggestions = await fetchData(value);

        setSuggestions(suggestions || []);
      } catch (error) {
        console.log(error);
      }
    },
    1000,
    [value]
  );

  const handleFocus = () => {
    setHideSuggestions(false);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setHideSuggestions(true);
    }, 200);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className={styles['container']}>
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          type="search"
          className={styles['textbox']}
          placeholder="Search data..."
          value={value}
          onChange={handleSearchInputChange}
        />
        <div
          className={`${styles.suggestions} ${
            hideSuggestions && styles.hidden
          }`}
        >
          {suggestions.map((suggestion) => (
            <div
              className={styles.suggestion}
              onClick={() => findResult(suggestion[suggestionKey])}
            >
              {suggestion[suggestionKey]}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
