import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/Home.css';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="brand-text">BlogApp</span>
          </h1>
          <p className="hero-subtitle">
            Share your thoughts, ideas, and stories with the world. 
            Create beautiful blog posts and connect with readers.
          </p>
          
          {user ? (
            <div className="hero-actions">
              <p className="welcome-message">
                Welcome back, <strong>{user.name}</strong>! 
              </p>
              <Link to="/blogs" className="btn btn-primary btn-large">
                Go to My Blogs
              </Link>
            </div>
          ) : (
            <div className="hero-actions">
              <Link to="/signup" className="btn btn-primary btn-large">
                Get Started
              </Link>
              <Link to="/login" className="btn btn-outline btn-large">
                Sign In
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="features-section">
        <div className="features-container">
          <h2 className="features-title">Why Choose BlogApp?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✍️</div>
              <h3>Easy Writing</h3>
              <p>Simple and intuitive interface to write and publish your blogs effortlessly.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Beautiful Design</h3>
              <p>Clean and modern design that makes your content look professional and engaging.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">💾</div>
              <h3>Auto Save</h3>
              <p>Your blogs are automatically saved to local storage, so you never lose your work.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Responsive</h3>
              <p>Perfect experience on any device - desktop, tablet, or mobile.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Blogging?</h2>
          <p>Join thousands of writers sharing their stories on BlogApp</p>
          {!user && (
            <Link to="/signup" className="btn btn-primary btn-large">
              Create Your Account
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
