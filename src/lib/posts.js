/*
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
}*/

// This function dynamically imports the data based on the post type
async function importPostsData(postType) {
  if (postType === 'track') {
    return (await import('../data/posts.json')).default;
  } else if (postType === 'race') {
    return (await import('../data/raceposts.json')).default;
  } else {
    throw new Error(`Unknown post type: ${postType}`);
  }
}

// Get the content of a single post based on its slug and the type
export async function getPostContent(slug, postType) {
  const postsData = await importPostsData(postType);
  return postsData[slug];
}

// Get all slugs for a specific type of post
export async function getAllPostSlugs(postType) {
  const postsData = await importPostsData(postType);
  return Object.keys(postsData).map(slug => ({
    params: {
      post: slug,
    },
  }));
}
