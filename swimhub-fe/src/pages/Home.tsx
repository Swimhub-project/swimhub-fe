import axios from 'axios';
import { useState, useEffect } from 'react';
import Layout from "../components/Layout";
import '../styles/home.css'
import { ResultType } from '../lib/types';
import SearchBar from '../components/SearchBar';
import filterPosts from '../utils/filterPosts';
import FilterPanel from '../components/FilterPanel';
import Dropdown from '../components/Dropdown';
import FilterIcon from '../assets/filter.svg'

function Home() {
  const [posts, setPosts] = useState<ResultType[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<ResultType[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          // Replace with Swimhub API 
          'https://dummyjson.com/posts'
        );
        setPosts(data.posts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const filtered = filterPosts(posts, '', selectedFilters); 
    setFilteredPosts(filtered);
  }, [posts, selectedFilters]);

  return (
    <Layout>
      <main className="home-main">
        <Dropdown>
          <Dropdown.Button><img className='filter-icon' src={FilterIcon} /></Dropdown.Button>
          <Dropdown.Content>
        <FilterPanel posts={posts} onFilterChange={setSelectedFilters} />
        </Dropdown.Content>
        </Dropdown>
          <div className='lesson-cards'>
          <SearchBar posts={posts} onSearch={setFilteredPosts} />
          {filteredPosts.map((post) => (
            <div className="lesson-card" key={post.title}>

                          {/* placeholder image */}
                          <img className='placeholder-main' src="https://source.unsplash.com/E9PJO_vL3E8" alt="person swimming" />
              <span className='lesson-content'>
              <h2 className='lesson-title'>{post.title}</h2>
              <p className='lesson-body'>{post.body}</p>
              <p className='lesson-tags'>{post.tags.join(', ')}</p>
              </span>

            {/* demonstrating layout: will be replaced by users' content */}
          <div className='lesson-steps'>
            <figure className='step-card'>
              <img src="https://source.unsplash.com/-BUPaAMSOdE" alt="person swimming" />
              <figcaption>Lesson instruction part 1</figcaption>
            </figure>
            <figure className='step-card'>
              <img src="https://source.unsplash.com/G8OyN_tOIwY" alt="person swimming" />
              <figcaption>Lesson instruction part 2</figcaption>
            </figure>
            <figure className='step-card'>
              <img src="https://source.unsplash.com/LTLBUvs4UdQ" alt="person swimming" />
              <figcaption>Lesson instruction part 3</figcaption>
            </figure>
            <figure className='step-card'>
              <img src="https://source.unsplash.com/-BUPaAMSOdE" alt="person swimming" />
              <figcaption>Lesson instruction part 4</figcaption>
            </figure>
            <figure className='step-card'>
              <img src="https://source.unsplash.com/G8OyN_tOIwY" alt="person swimming" />
              <figcaption>Lesson instruction part 5</figcaption>
            </figure>
            <figure className='step-card'>
              <img src="https://source.unsplash.com/LTLBUvs4UdQ" alt="person swimming" />
              <figcaption>Lesson instruction part 6</figcaption>
            </figure>
          </div>
          </div>
          ))}
          </div>
      </main>
    </Layout>
  );
}

export default Home;
