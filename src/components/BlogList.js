import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import BlogCard from './BlogCard';
import BlogForm from './BlogForm';
import '../styles/BlogList.css';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
  }, [user, navigate]);

  // Load user's blogs
  useEffect(() => {
    if (!user) return;
    
    const allBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const userBlogs = allBlogs.filter(blog => blog.userId === user.id);
    setBlogs(userBlogs);
  }, [user]);

  const handleCreateBlog = () => {
    setEditingBlog(null);
    setShowForm(true);
  };

  const handleEditBlog = (blog) => {
    setEditingBlog(blog);
    setShowForm(true);
  };

  const handleSaveBlog = (blogData) => {
    const allBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    
    if (editingBlog) {
      // Update existing blog in all blogs
      const updatedBlogs = allBlogs.map(blog => 
        blog.id === editingBlog.id ? blogData : blog
      );
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
      
      // Update local state
      setBlogs(prev => prev.map(blog => 
        blog.id === editingBlog.id ? blogData : blog
      ));
    } else {
      // Add new blog to all blogs
      const updatedBlogs = [blogData, ...allBlogs];
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
      
      // Update local state
      setBlogs(prev => [blogData, ...prev]);
    }
    
    setShowForm(false);
    setEditingBlog(null);
  };

  const handleDeleteBlog = (blogId) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      const allBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
      const updatedBlogs = allBlogs.filter(blog => blog.id !== blogId);
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
      
      setBlogs(prev => prev.filter(blog => blog.id !== blogId));
    }
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingBlog(null);
  };

  // Filter blogs based on search term
  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="blog-list-container">
      <div className="blog-list-header">
        <h1>My Blog</h1>
        <p>Share your thoughts and ideas with the world</p>
      </div>

      <div className="blog-controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <button 
          className="btn btn-primary"
          onClick={handleCreateBlog}
        >
          + New Blog Post
        </button>
      </div>

      <div className="blog-stats">
        <span>{filteredBlogs.length} blog{filteredBlogs.length !== 1 ? 's' : ''} found</span>
      </div>

      {filteredBlogs.length === 0 ? (
        <div className="empty-state">
          <h3>No blogs found</h3>
          <p>
            {searchTerm 
              ? 'Try adjusting your search terms.' 
              : 'Create your first blog post to get started!'
            }
          </p>
        </div>
      ) : (
        <div className="blogs-grid">
          {filteredBlogs.map(blog => (
            <BlogCard
              key={blog.id}
              blog={blog}
              onEdit={handleEditBlog}
              onDelete={handleDeleteBlog}
            />
          ))}
        </div>
      )}

      {showForm && (
        <BlogForm
          blog={editingBlog}
          onSave={handleSaveBlog}
          onCancel={handleCancelForm}
        />
      )}
    </div>
  );
};

export default BlogList;
