import React from "react";

const TestimonialCard = ({ image, name, location, review }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
    <div className="text-pink-400 text-4xl mb-4">“</div>
    <p className="text-gray-600 text-sm mb-4">{review}</p>
    <div className="flex items-center mt-6">
      <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
      <div>
        <h4 className="font-semibold text-gray-800">{name}</h4>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
