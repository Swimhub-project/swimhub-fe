import React from 'react';
import { ResultType } from '../lib/types';
import '../styles/components/lesson-cards.css'

interface LessonCardsProps {
    posts: ResultType[];
    filteredPosts: ResultType[];
  }

  const LessonCards: React.FC<LessonCardsProps> = ({ filteredPosts }) => {
    return (
      <div className='lesson-cards'>
        {filteredPosts.map((post) => (
          <div className="lesson-card" key={post.title}>
                <h2 className='lesson-title'>{post.title}</h2>

                {/* placeholder image */}
                    <img className='placeholder-main' src="https://source.unsplash.com/E9PJO_vL3E8" alt="person swimming" />
              <p className='lesson-body'>{post.body}</p>
              
            {/* demonstrating layout: will be replaced by users' content */}
          <div className='lesson-steps'>
            <figure className='step-card'>
              <img src="https://source.unsplash.com/-BUPaAMSOdE" alt="person swimming" />
              <figcaption>Lesson instruction part 1. </figcaption>
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
          <div className='horizontal'>
            <p className='lesson-id'>User ID: {post.userId}</p>
            <p className='lesson-tags'>Tags: {post.tags.join(', ')}</p>
          </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default LessonCards;