import { useState, useEffect } from 'react';
import Layout from "../components/Layout";
import '../styles/home.css'
import { EntryType } from '../lib/types';
import { fetchAPI } from '../utils/fetchAPI';
import SearchBar from '../components/SearchBar';
import filterEntries from '../utils/filterEntries';
import FilterPanel from '../components/FilterPanel';
import LessonCards from '../components/LessonCards';
import Dropdown from '../components/Dropdown';
import FilterIcon from '../assets/filter.svg'
import PlusIcon from '../assets/plus.svg'


function Home() {
  const [entries, setEntries] = useState<EntryType[]>([]);
  const [filteredEntries, setFilteredEntries] = useState<EntryType[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedEntries = await fetchAPI('entry'); 
        setEntries(fetchedEntries.entries);
      } catch (error) {
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = filterEntries(entries, '', selectedFilters); 
    setFilteredEntries(filtered);
  }, [entries, selectedFilters]);

  return (
    <Layout>
      <main className="home-main">
        {/* filter menu */}
        <Dropdown>
          <span className='filter-button'>
          <Dropdown.Button><img className='filter-icon' src={FilterIcon} /></Dropdown.Button>
          <p>Filter Categories</p>
          </span>
          <Dropdown.Content>
        <FilterPanel entries={entries} onFilterChange={setSelectedFilters} />
        </Dropdown.Content>
        </Dropdown>
        {/* exercise cards */}
          <div className='exercise-cards'>
          <SearchBar entries={entries} onSearch={setFilteredEntries} />
          <LessonCards filteredEntries={filteredEntries} entries={[]} />
          </div>
          {/* Simulate add button for layout  */}
          <div className='add-wrapper'>
          <div className='add-exercise'>
            <span className="plus-wrapper">
              <button className='plus-button'>
              <img src={PlusIcon} />
              </button>
              <p>Add an Exercise</p>
            </span>
          </div>
          </div>
      </main>
    </Layout>
  );
}

export default Home;
