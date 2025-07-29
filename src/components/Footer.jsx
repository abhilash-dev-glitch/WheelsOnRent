import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaChevronUp,
} from "react-icons/fa";
import logo from "../assets/images/logo.png"

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-b-4 border-red-400 relative bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-gray-700">

        {/* Brand and description */}
        <div>
          <img src={logo} alt="Brand Logo" className="h-20 mb-4" />
          <p className="mb-6 text-left">
            We are a well-known car rental service that has many partners in each region to connect with you to assist in your trip in meetings, events, holidays or long trips.
          </p>
          <div className="flex gap-3">
            <a href="#" className="bg-red-500 text-white p-2 rounded"><FaLinkedinIn /></a>
            <a href="#" className="border border-red-300 p-2 rounded text-red-500"><FaTwitter /></a>
            <a href="#" className="border border-red-300 p-2 rounded text-red-500"><FaFacebookF /></a>
            <a href="#" className="border border-red-300 p-2 rounded text-red-500"><FaInstagram /></a>
          </div>
        </div>

        {/* Company */}
        <div className="text-left">
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><Link to="/aboutus" className="text-red-500 hover:underline dark:text-gray-900">• About Us</Link></li>
            <li><Link to="/services" className="text-gray-700 dark:text-white hover:underline dark:text-gray-900">Services</Link></li>
            <li><Link to="/cars" className="hover:underline dark:text-gray-900">Cars</Link></li>
            <li><Link to="/partners" className="hover:underline dark:text-gray-900">Our Partner</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="text-left">
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li><Link to="/services/instant-rent" className="text-gray-700 dark:text-gray-900 hover:underline">Instant Rent</Link></li>
            <li><Link to="/services/private-driver" className="text-gray-700 dark:text-gray-900 hover:underline">Private Driver</Link></li>    
             <li>  <Link to="/services/long-trip" className="text-gray-700 dark:text-gray-900 hover:underline">Long Trip</Link></li> 
          </ul>
        </div>

        {/* Support */}
        <div className="text-left">
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2">
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link to="/call-center" className="hover:underline">Call Center</Link></li>
            <li><Link to="/becomepartner" className="hover:underline">Partner With Us</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms & Condition</Link></li>
          </ul>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="flex justify-center mt-12 mb-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-white shadow-lg p-3 rounded-full text-red-400 hover:text-red-600 transition"
        >
          <FaChevronUp size={18} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
