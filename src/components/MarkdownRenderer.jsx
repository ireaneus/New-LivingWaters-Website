// src/components/MarkdownRenderer.jsx
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MarkdownRenderer = ({ file }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(file)
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, [file]);

  return (
    <div className="markdown">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
