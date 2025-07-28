import React from "react";
import { FaUserCircle } from "react-icons/fa";

const TestimonialCard = ({ name, location, review }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-left">
      {/* Icon */}
      <div className="flex items-center mb-4">
        <FaUserCircle className="text-5xl text-red-400 mr-4" />
        <div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-300">{location}</p>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{review}</p>
    </div>
  );
};

export default TestimonialCard;
