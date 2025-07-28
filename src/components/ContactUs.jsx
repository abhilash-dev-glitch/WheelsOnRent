import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 ">
      
      {/*  Contact Info */}
      <div className="space-y-6 text-left">
        <div>
          <h4 className="text-sm text-red-400 font-semibold uppercase">GET IN TOUCH</h4>
          <h2 className="text-3xl font-bold mt-1">Contact Us</h2>
          <p className="text-gray-600 mt-2">
            If you need consultation with us, you can write a message or call us,
            we will respond as quickly as possible.
          </p>
        </div>

        <div className="space-y-4 text-gray-700">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-red-500" />
            <span>lorenna@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-red-500" />
            <span>+62 8221 1222 0001</span>
          </div>
          <div className="flex items-center gap-4">
            <FaClock className="text-red-500" />
            <span>Everyday: 08.00 - 21.00</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-red-500" />
            <span>
              Jl. Raya Cihaluan No.112 Tangerang Selatan, Indonesia 41222
            </span>
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <a href="#" className="bg-red-500 text-white p-2 rounded"><FaLinkedinIn /></a>
          <a href="#" className="border border-red-300 p-2 rounded text-red-500"><FaTwitter /></a>
          <a href="#" className="border border-red-300 p-2 rounded text-red-500"><FaFacebookF /></a>
          <a href="#" className="border border-red-300 p-2 rounded text-red-500"><FaInstagram /></a>
        </div>
      </div>

      {/* Map + Button */}
      <div className="flex flex-col justify-between border-none">
        <div className="h-[300px] w-full rounded-md overflow-hidden border border-gray-300 shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.9565792055475!2d106.7749489143103!3d-6.402484295369042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ebfcf9359d69%3A0x72003fd32df5a658!2sJl.%20Raya%20Cihaluan%20No.112%2C%20Tangerang%20Selatan!5e0!3m2!1sen!2sin!4v1624032912345!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            title="Office Location"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="mt-6">
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md shadow">
            Office Center Map
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
