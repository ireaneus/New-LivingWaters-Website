import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPostsByCategory } from '../utils/posts';

const Blog = () => {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const loadedPosts = await getPostsByCategory(category);
      setPosts(loadedPosts);
    };
    loadPosts();
  }, [category]);

  const getCategoryTitle = () => {
    switch(category) {
      case 'sermons':
        return 'Sermon Notes';
      case 'devotionals':
        return 'Devotionals';
      case 'articles':
        return 'Articles';
      default:
        return 'Recent Posts';
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">{getCategoryTitle()}</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.date}</p>
            <Link 
              to={`/post/${post.slug}`} 
              className="text-blue-900 hover:underline inline-block"
            >
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;