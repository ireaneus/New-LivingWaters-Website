// src/components/BlogPost.jsx
import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';

const BlogPost = ({ title, date, file }) => {
  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{date}</p>
      <MarkdownRenderer file={file} />
    </div>
  );
};

export default BlogPost;
