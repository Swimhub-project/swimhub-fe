import { ResultType } from '../lib/types';

const filterPosts = (posts: ResultType[], searchQuery: string, selectedFilters: string[]) => {
  return posts.filter((post) => {
    const title = post.title.toLowerCase();
    const tags = Array.isArray(post.tags) ? post.tags.map((tag) => tag.toLowerCase()) : [];
    const body = post.body.toLowerCase();

    const includesSearchQuery = title.includes(searchQuery.toLowerCase()) || tags.some((tag) => tag.includes(searchQuery.toLowerCase())) || body.includes(searchQuery.toLowerCase());

    if (selectedFilters.length === 0) {
      // No filters selected, only apply searchQuery filter
      return includesSearchQuery;
    }

    const includesAnyFilter = selectedFilters.some((filter) => {
      if (tags.includes(filter) || post.userId.toString() === filter) {
        return true;
      }
      return false;
    });

    return includesSearchQuery && includesAnyFilter;
  });
};

export default filterPosts;
