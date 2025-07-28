import React from "react";
import carImage from "../assets/images/car.jpg"
import logo from "../assets/images/logo.png"

const AboutUs = () => {
  return (
    <div className="pt-28 px-6 pb-16 min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <img
          src={logo}
          alt="WheelsOnRent Logo"
          className="mx-auto w-48 mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">About WheelsOnRent</h1>
        <p className="text-lg max-w-3xl mx-auto">
          <span className="font-semibold">WheelsOnRent</span> is your trusted partner in hassle-free
          car rentals. Whether you're planning a road trip, business travel, or a
          weekend getaway, our platform connects you with the best vehicles in
          town at affordable prices.
        </p>
        <div className="mt-10">
          <img
            src={carImage}
            alt="Car Illustration"
            className="mx-auto w-full max-w-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
