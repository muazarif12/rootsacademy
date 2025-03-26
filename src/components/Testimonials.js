import React from "react";
import { FaQuoteLeft } from "react-icons/fa"; // Quote icon
import { FiBook } from "react-icons/fi"; // Subject icon

const testimonials = [
  {
    text: "Sir Hamza is a commendable teacher who has helped me to perform well in chemistry by simplifying complex concepts. His classes have always been very engaging and interactive, which makes it easier to focus and learn.",
    author: "Mahnoor Faisal - Distinction (PISJES)",
    bgColor: "bg-blue-100 text-blue-900",
    quoteColor: "text-blue-600",
    iconColor: "text-blue-600",
  },
  {
    text: "Sir Hamza has been incredibly helpful in making chemistry easier to understand. He explains complex topics in a simple, clear way, and ensures we understand each concept before moving forward. I especially appreciate that every lesson is well-prepared and organized, and that he always takes the time to answer questions. I've noticed a big improvement in my performance in chemistry thanks to their teaching.",
    author: "Tahreem Awan - Physics, Chemistry A* - PISJES",
    bgColor: "bg-purple-100 text-purple-900",
    quoteColor: "text-purple-600",
    iconColor: "text-purple-600",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white py-12">
      <div className="flex justify-center gap-10 flex-wrap">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`relative p-8 w-[580px] rounded-xl shadow-md ${testimonial.bgColor}`}>
            {/* Quote Icon Inside the Box */}
            <FaQuoteLeft className={`absolute top-4 left-4 text-2xl ${testimonial.quoteColor}`} />

            {/* Subject Icon on the Top-Right */}
            <FiBook className={`absolute top-4 right-4 text-2xl ${testimonial.iconColor}`} />

            {/* Testimonial Text */}
            <p className="text-lg italic mt-8 leading-relaxed">"{testimonial.text}"</p>

            {/* Author Name */}
            <p className="mt-4 font-semibold">{testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
