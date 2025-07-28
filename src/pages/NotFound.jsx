import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
