# BlogApp - React CRUD Blog Application

A modern, responsive blog application built with React that allows users to create, read, update, and delete blog posts. Features user authentication, local storage persistence, and a beautiful UI.

## 🚀 Features

### Authentication
- **User Registration**: Create new accounts with email and password
- **User Login**: Secure authentication system
- **Protected Routes**: Blog management requires authentication
- **User Session Management**: Persistent login sessions using localStorage

### Blog Management (CRUD Operations)
- **Create**: Write new blog posts with title, author, and content
- **Read**: View all your blog posts in a beautiful grid layout
- **Update**: Edit existing blog posts
- **Delete**: Remove blog posts with confirmation

### User Experience
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Search Functionality**: Search through your blogs by title, author, or content
- **Clean UI**: Modern, glassmorphism-inspired design
- **Smooth Animations**: Engaging hover effects and transitions
- **Form Validation**: Comprehensive client-side validation

### Technical Features
- **Local Storage**: All data persists in browser's localStorage
- **React Router**: Smooth navigation between pages
- **Context API**: Centralized state management for authentication
- **Custom CSS**: No external UI libraries - pure custom styling
- **Component Architecture**: Modular, reusable React components

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Routing**: React Router DOM
- **State Management**: React Context API + useState/useEffect
- **Styling**: Custom CSS with modern design principles
- **Data Storage**: Browser localStorage
- **Build Tool**: Create React App

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm start
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage

### Getting Started
1. **Home Page**: Visit the landing page to learn about BlogApp
2. **Sign Up**: Create a new account with your name, email, and password
3. **Login**: Sign in with your credentials
4. **Create Blogs**: Click "+ New Blog Post" to write your first blog
5. **Manage Blogs**: Edit or delete your existing blogs
6. **Search**: Use the search bar to find specific blogs

### User Flow
```
Home Page → Sign Up → Login → Blog Dashboard → Create/Edit/Delete Blogs
```

## 🎨 Design Features

- **Glassmorphism Effects**: Modern glass-like UI elements
- **Gradient Backgrounds**: Beautiful color gradients
- **Smooth Animations**: Hover effects and transitions
- **Responsive Grid Layout**: Adaptive blog card layouts
- **Mobile-First Design**: Optimized for all screen sizes

## 🔒 Authentication System

The app uses a simple but effective authentication system:
- **User Registration**: Stores user data in localStorage
- **Login Validation**: Checks credentials against stored users
- **Session Management**: Maintains login state across browser sessions
- **Route Protection**: Redirects unauthorized users to login

## 💾 Data Storage

All data is stored in the browser's localStorage:
- **Users**: Array of registered users
- **Blogs**: Array of all blog posts with user associations
- **Current User**: Currently logged-in user session

## 🚀 Available Scripts

### `npm start`
Runs the app in development mode.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

---

**Happy Blogging! 📝✨**

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
