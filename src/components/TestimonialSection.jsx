import React, { useState } from "react";
import TestimonialCard from "../components/TestimonialCard";


const testimonials = [
  {
    image: "src/assets/images/pf.webp",
    name: "Melinda Lenny",
    location: "Medan",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nam suscipit amet nec eget fermentum.",
  },
  {
    image: "src/assets/images/pf.webp",
    name: "Jacob Stevan",
    location: "Bandung",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nam suscipit amet nec eget fermentum.",
  },
  {
    image: "src/assets/images/pf.webp",
    name: "Roben Musstar",
    location: "Bali",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nam suscipit amet nec eget fermentum.",
  },
  {
    image: "src/assets/images/pf.webp",
    name: "Alisha Pramod",
    location: "Surabaya",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nam suscipit amet nec eget fermentum.",
  },
];

const TestimonialSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <section className="text-center py-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <h2 className="text-red-400 text-center">OUR REVIEW</h2>
      <h2 className="text-2xl font-semibold mb-8 text-gray-800">What They Say?</h2>
      <h2 className="text-gray-400">Here are some comments from our coustomers. Be one..</h2>
      <div className="grid md:grid-cols-3 gap-6 justify-center px-4 pt-3">
        {visibleTestimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
      {!showAll && (
        <button
          className="mt-8 bg-red-400 hover:bg-red-500 text-white px-6 py-2 rounded-md transition-all"
          onClick={() => setShowAll(true)}
        >
          See All
        </button>
      )}
    </section>
  );
};

export default TestimonialSection;
