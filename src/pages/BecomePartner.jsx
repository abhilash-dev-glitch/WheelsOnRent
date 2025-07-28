// src/pages/BecomePartner.jsx
import React, { useState } from 'react';

const BecomePartner = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    vehicleDetails: '',
    experience: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted successfully!");
    console.log('Form Submitted:', formData);
   setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        vehicleDetails: '',
        experience: '',
        });
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">Become a Partner</h1>
      <p className="text-center mb-8 text-gray-600">
        Join WheelsOnRent to grow your car rental business. Fill out the form below to apply.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-lg">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            placeholder="1234567890"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            placeholder="City / Region"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Vehicle Details</label>
          <textarea
            name="vehicleDetails"
            required
            value={formData.vehicleDetails}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            placeholder="Car model, type, registration number etc."
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Experience (optional)</label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            placeholder="Previous rental experience"
          />
        </div>
        <button
          type="submit"
          className="w-full sm:w-48 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-md mx-auto block"
    onClick={ handleSubmit }
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default BecomePartner;
