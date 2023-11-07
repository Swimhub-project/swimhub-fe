import { ResultType } from '../lib/types';

const filterPosts = (posts: ResultType[], searchQuery: string, selectedFilters: string[]) => {
  return posts.filter((post) => {
    const title = post.title.toLowerCase();
    const tags = post.tags.map((tag) => tag.toLowerCase());
    const body = post.body.toLowerCase();

    const includesSearchQuery = title.includes(searchQuery.toLowerCase()) || tags.some((tag) => tag.includes(searchQuery.toLowerCase())) || body.includes(searchQuery.toLowerCase());

    if (selectedFilters.length === 0) {
      // No filters selected, only apply searchQuery filter
      return includesSearchQuery;
    }

    return includesSearchQuery && selectedFilters.some((filter) =>
      tags.includes(filter) || post.userId.toString() === filter
    );
  });
};

export default filterPosts;
