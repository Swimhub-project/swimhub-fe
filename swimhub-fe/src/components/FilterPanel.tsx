import {useState} from 'react';
import { EntryType } from '../lib/types';
import '../styles/components/filter-panel.css'

interface FilterPanelProps {
  entries: EntryType[];
  onFilterChange: (selectedFilters: string[]) => void;
}
const extractUniqueEntryTypes = (entries: EntryType[]): string[] => {
  const uniqueTypes = entries.reduce((types: string[], entry) => {
    if (!types.includes(entry.type)) {
      types.push(entry.type);
    }
    return types;
  }, []);
  return uniqueTypes;
};

const extractUniqueEntryStrokes = (entries: EntryType[]): string[] => {
  const uniqueStrokes = entries.reduce((strokes: string[], entry) => {
    if (!strokes.includes(entry.stroke)) {
      strokes.push(entry.stroke);
    }
    return strokes;
  }, []);
  return uniqueStrokes;
};

const extractUniqueEntryStages = (entries: EntryType[]): string[] => {
  const allStages: string[] = entries.reduce((stages: string[], entry) => {
    const entryStages = [...entry.stage];
    stages.push(...entryStages);
    return stages;
  }, []);

  const uniqueStages = Array.from(new Set(allStages));

  // Sorting function: sort numerical first, then alphanumeric
  const sortedStages = uniqueStages.sort((a, b) => {
    const aNum = parseInt(a.match(/\d+/)?.[0] || ''); // Extract number from string a
    const bNum = parseInt(b.match(/\d+/)?.[0] || ''); // Extract number from string b

    // If both have a number, sort by number; otherwise, sort by alphanumeric
    if (!isNaN(aNum) && !isNaN(bNum)) {
      return aNum - bNum; // Numerical sort
    } else if (!isNaN(aNum)) {
      return -1; // a has a number, so it comes first
    } else if (!isNaN(bNum)) {
      return 1; // b has a number, so it comes first
    } else {
      return a.localeCompare(b); // Alphanumeric sort
    }
  });

  return sortedStages;
};

const FilterPanel: React.FC<FilterPanelProps> = ({ entries, onFilterChange }) => {
  // console.log('Entries received in FilterPanel:', entries);

  const uniqueEntryTypes = extractUniqueEntryTypes(entries);
  const uniqueEntryStrokes = extractUniqueEntryStrokes(entries);
  const uniqueEntryStages = extractUniqueEntryStages(entries);

  
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
      <h3>Types</h3>
      <hr />
      </span>
      <ul>
        {uniqueEntryTypes.map((type) => (
          <li key={type}>
            <label>
            {type.replace(/_/g, ' ')}
              <input
                type="checkbox"
                name="type"
                value={type}
                onChange={handleFilterChange}
              />
            </label>
          </li>
        ))}
      </ul>
    <span>
      <h3>Stroke</h3>
      <hr />
      </span>
      <ul>
        {uniqueEntryStrokes.map((stroke) => (
          <li key={stroke}>
            <label>
            {stroke}
              <input
                type="checkbox"
                name="strokes"
                value={stroke}
                onChange={handleFilterChange}
              />
            </label>
          </li>
        ))}
      </ul>
      <span>
      <h3>Stage</h3>
      <hr />
      </span>
      <ul>
        {uniqueEntryStages.map((stage) => (
          <li key={stage}>
            <label>
            {stage.replace(/_/g, ' ')}
              <input
                type="checkbox"
                name="stages"
                value={stage}
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
