import React from 'react';
import '../styles/BlogCard.css';

const BlogCard = ({ blog, onEdit, onDelete }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const truncateContent = (content, maxLength = 150) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  };

  return (
    <div className="blog-card">
      <div className="blog-card-header">
        <h3 className="blog-title">{blog.title}</h3>
        <span className="blog-date">{formatDate(blog.date)}</span>
      </div>
      
      <div className="blog-author">
        <span>By {blog.author}</span>
      </div>
      
      <div className="blog-content">
        <p>{truncateContent(blog.content)}</p>
      </div>
      
      <div className="blog-actions">
        <button 
          className="btn btn-edit"
          onClick={() => onEdit(blog)}
        >
          Edit
        </button>
        <button 
          className="btn btn-delete"
          onClick={() => onDelete(blog.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
