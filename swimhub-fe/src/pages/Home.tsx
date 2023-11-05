import axios from 'axios';
import { useState, useEffect } from 'react';
import Layout from "../components/Layout";
import '../styles/home.css'
import { ResultType } from '../lib/types';
import SearchBar from '../components/SearchBar';

function Home() {
  const [posts, setPosts] = useState<ResultType[]>([]);
  const [searchQuery] = useState<string>('');
  const [filteredPosts, setFilteredPosts] = useState<ResultType[]>([]);

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
    // Filter the posts when the searchQuery or posts change
    const filtered = posts.filter(post => {
      const title = post.title.toLowerCase();
      const tags = Array.isArray(post.tags) ? post.tags : [];
      const body = post.body.toLowerCase();
      
      
      return title.includes(searchQuery.toLowerCase()) ||
      tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      body.includes(searchQuery.toLowerCase());
});

setFilteredPosts(filtered);
}, [searchQuery, posts]);

const handleSearch = (filteredPosts: ResultType[]) => {
  setFilteredPosts(filteredPosts);
};
  return (
    <Layout>
      <main className="home_main">
     
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
