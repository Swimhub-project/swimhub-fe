import filterPosts from '../src/utils/filterPosts'
import { ResultType } from '../src/lib/types';

const realData: ResultType[] = [
    {
      title: 'They rushed out the door',
      tags: ['fiction', 'magical', 'history'],
      body: "They rushed out the door, grabbing anything and everything they could think of they might need. There was no time to double-check to make sure they weren't leaving something important behind. Everything was thrown into the car and they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all.",
      userId: 1,
    },
  ];
  describe('filterPosts', () => {
    it('should filter posts by title', () => {
      const searchQuery = 'rushed';
      const selectedFilters: string[] = [];
      const result = filterPosts(realData, searchQuery, selectedFilters);
  
      expect(result).toEqual([realData[0]]);
    });
  
    it('should filter posts by tags', () => {
      const searchQuery = 'magical';
      const selectedFilters: string[] = [];
      const result = filterPosts(realData, searchQuery, selectedFilters);
  
      // Assert that the result contains posts with the 'magical' tag
      expect(result).toEqual([realData[0]]);
    });
  
    it('should return an empty array if no posts match the criteria', () => {
      const searchQuery = 'Nonexistent';
      const selectedFilters: string[] = ['Nonexistent'];
      const result = filterPosts(realData, searchQuery, selectedFilters);
  
      expect(result).toEqual([]);
    });
  
  });
  
  