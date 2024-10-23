import { postFiles } from '../config/posts';

export const getPosts = async () => {
  return postFiles;
};

export const getPostsByCategory = async (category) => {
  const posts = await getPosts();
  return category ? posts.filter(post => post.category === category) : posts;
};

export const getPostBySlug = async (slug) => {
  const posts = await getPosts();
  return posts.find(post => post.slug === slug);
};