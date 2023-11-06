import axios from 'axios';
import { useState, useEffect } from 'react';
import Layout from "../components/Layout";
import '../styles/home.css'
import { ResultType } from '../lib/types';
import SearchBar from '../components/SearchBar';
import filterPosts from '../utils/filterPosts';
import FilterPanel from '../components/FilterPanel';

function Home() {
  const [posts, setPosts] = useState<ResultType[]>([]);
  const [searchQuery] = useState<string>('');
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
    const filtered = filterPosts(posts, searchQuery, selectedFilters);
    setFilteredPosts(filtered);
  }, [searchQuery, posts, selectedFilters]);

  const handleSearch = (filteredPosts: ResultType[]) => {
    setFilteredPosts(filteredPosts);
  };
  const handleFilterChange = (selectedFilters: string[]) => {
    setSelectedFilters(selectedFilters);
  };
  return (
    <Layout>
      <main className="home_main">
        <FilterPanel posts={posts} onFilterChange={handleFilterChange} />
          <div className='lesson_cards'>
          <SearchBar posts={posts} onSearch={handleSearch} />
          {filteredPosts.map((post) => (
            <div className="lesson_card" key={post.title}>

                          {/* placeholder image */}
                          <img className='placeholder_main' src="https://source.unsplash.com/E9PJO_vL3E8" alt="person swimming" />
              <span className='lesson_content'>
              <h2 className='lesson_title'>{post.title}</h2>
              <p className='lesson_body'>{post.body}</p>
              <p className='lesson_tags'>{post.tags.join(', ')}</p>
              </span>

            {/* demonstrating layout: will be replaced by users' content */}
          <div className='lesson_steps'>
            <figure className='step_card'>
              <img src="https://source.unsplash.com/-BUPaAMSOdE" alt="person swimming" />
              <figcaption>Lesson instruction part 1</figcaption>
            </figure>
            <figure className='step_card'>
              <img src="https://source.unsplash.com/G8OyN_tOIwY" alt="person swimming" />
              <figcaption>Lesson instruction part 2</figcaption>
            </figure>
            <figure className='step_card'>
              <img src="https://source.unsplash.com/LTLBUvs4UdQ" alt="person swimming" />
              <figcaption>Lesson instruction part 3</figcaption>
            </figure>
            <figure className='step_card'>
              <img src="https://source.unsplash.com/-BUPaAMSOdE" alt="person swimming" />
              <figcaption>Lesson instruction part 4</figcaption>
            </figure>
            <figure className='step_card'>
              <img src="https://source.unsplash.com/G8OyN_tOIwY" alt="person swimming" />
              <figcaption>Lesson instruction part 5</figcaption>
            </figure>
            <figure className='step_card'>
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
