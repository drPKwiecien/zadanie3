
import postsData from '../data/posts.json';

export function getPostContent(slug) {
  return postsData[slug];
}

export function getAllPostSlugs() {
  return Object.keys(postsData).map(slug => {
    return {
      params: {
        post: slug,
      },
    };
  });
}
