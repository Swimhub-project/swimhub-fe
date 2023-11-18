import { EntryType } from '../lib/types';

const filterEntries = 
  (entries: EntryType[], 
    searchQuery: string, 
    selectedFilters: string[]
      ): EntryType[] => {
        if (selectedFilters.length === 0 && searchQuery.trim() === '') {
          return entries;
        }
      
        return entries.filter((entry) => {
          const matchesFilter =
            entry.stage.some((stage) => selectedFilters.includes(stage)) ||
            selectedFilters.includes(entry.stroke) ||
            selectedFilters.includes(entry.type);
      
          return selectedFilters.length > 0 && matchesFilter;
        });
      };
      
      export default filterEntries;
