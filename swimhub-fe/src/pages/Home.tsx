import { useState, useEffect } from 'react';
import Layout from "../components/Layout";
import '../styles/home.css'
import { ResultType } from '../lib/types';
import { fetchAPI } from '../utils/fetchAPI';
import SearchBar from '../components/SearchBar';
import filterPosts from '../utils/filterPosts';
import FilterPanel from '../components/FilterPanel';
import LessonCards from '../components/LessonCards';
import Dropdown from '../components/Dropdown';
import FilterIcon from '../assets/filter.svg'
import PlusIcon from '../assets/plus.svg'


function Home() {
  const [posts, setPosts] = useState<ResultType[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<ResultType[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPosts = await fetchAPI('posts'); 
        setPosts(fetchedPosts.posts);
      } catch (error) {
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = filterPosts(posts, '', selectedFilters); 
    setFilteredPosts(filtered);
  }, [posts, selectedFilters]);

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
        <FilterPanel posts={posts} onFilterChange={setSelectedFilters} />
        </Dropdown.Content>
        </Dropdown>
        {/* exercise cards */}
          <div className='exercise-cards'>
          <SearchBar posts={posts} onSearch={setFilteredPosts} />
          <LessonCards filteredPosts={filteredPosts} posts={[]} />
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
