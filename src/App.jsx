import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="bg-cyan-900 text-amber-50 p-4 shadow-md">
          <div className="container mx-auto">
            <h1 className="text-3xl mb-4 tracking-widest">Living Waters RV Ministry</h1>
            <nav className="flex gap-6">
              <Link to="/category/sermons" className="hover:text-amber-200">Sermon Notes</Link>
              <Link to="/category/devotionals" className="hover:text-amber-200">Devotionals</Link>
              <Link to="/category/articles" className="hover:text-amber-200">Articles</Link>
            </nav>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/category/:category" element={<Blog />} />
            <Route path="/post/:slug" element={<BlogPostPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;