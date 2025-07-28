import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen px-6 md:px-20 py-10 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Services</h1>

      <nav className="flex justify-center space-x-6 mb-10">
        <NavLink
          to="instant-rent"
          className={({ isActive }) =>
            `text-lg px-4 py-2 rounded-md ${
              isActive ? "bg-red-500 text-white" : "text-gray-700 hover:text-red-600"
            }`
          }
        >
          Instant Rent
        </NavLink>
        <NavLink
          to="private-driver"
          className={({ isActive }) =>
            `text-lg px-4 py-2 rounded-md ${
              isActive ? "bg-red-500 text-white" : "text-gray-700 hover:text-red-600"
            }`
          }
        >
          Private Driver
        </NavLink>
        <NavLink
          to="long-trip"
          className={({ isActive }) =>
            `text-lg px-4 py-2 rounded-md ${
              isActive ? "bg-red-500 text-white" : "text-gray-700 hover:text-red-600"
            }`
          }
        >
          Long Trip
        </NavLink>
      </nav>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <Outlet />
      </div>
    </div>
  );
};

export default Services;
