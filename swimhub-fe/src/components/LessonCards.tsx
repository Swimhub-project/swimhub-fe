import React from 'react';
import { EntryType } from '../lib/types';
import '../styles/components/lesson-cards.css'

interface LessonCardsProps {
    entries: EntryType[];
    filteredEntries: EntryType[];
  }

  const LessonCards: React.FC<LessonCardsProps> = ({ filteredEntries }) => {
      console.log('Entries received in LessonCard:', filteredEntries);

    return (
      <div className='lesson-cards'>
        {filteredEntries.map((entry) => (
          <div className="lesson-card" key={entry.title}>
                <h2 className='lesson-title'>{entry.title}</h2>

                {/* placeholder image */}
                    <img className='placeholder-main' src="https://source.unsplash.com/E9PJO_vL3E8" alt="person swimming" />
              <p className='lesson-body'>{entry.body}</p>
              
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
            <p className='lesson-id'>User ID: {entry.user_id}</p>
            <p className='stroke-type'>Stroke: {entry.stroke}</p>
          </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default LessonCards;