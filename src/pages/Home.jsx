import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 
import ServiceDropdown from "../components/ServiceDropdown";
import ContactUs from "../components/ContactUs";
import TestimonialSection from "../components/TestimonialSection";
import WhyUs from "../components/WhyUs";

function Home() {
  const sectionRef = useRef(null);
  const navigate = useNavigate(); 

  const scrollToSection = () => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const handleBookNow = () => {
    navigate('/cars'); 
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between p-8cbg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Left Side - Text Block */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            We Have Prepared a Car <br /> For Your Trip
          </h1>
          <p className="text-gray-500 mt-4 text-base md:text-lg">
            We have many types of cars that are ready for you to travel anywhere <br />
            and anytime.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button
              className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-green-600 transition duration-200"
              onClick={handleBookNow}
            >
              Book Now
            </button>
            <button
              className="px-6 py-3 bg-gray-100 border-2 border-red-500 text-red-500 rounded-full hover:bg-gray-300 transition duration-200"
              onClick={scrollToSection}
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right Side - Image Block */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src="src/assets/images/car.jpg"
            alt="Car"
            className="w-[400px] h-auto rounded-xl"
          />
        </div>
      </div>

      {/* Sections */}
      <div className="mt-16">
        <ServiceDropdown />
      </div>
      <WhyUs />
      <TestimonialSection />
      <div ref={sectionRef} id='contactus'>
        <ContactUs />
      </div>
    </>
  );
}

export default Home;
