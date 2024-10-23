import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { getPostBySlug } from '../utils/posts';

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      const loadedPost = await getPostBySlug(slug);
      setPost(loadedPost);
    };
    loadPost();
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.date}</p>
        <MarkdownRenderer file={post.file} />
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
};

export default BlogPostPage;