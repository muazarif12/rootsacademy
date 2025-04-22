import React from "react";
import { FaQuoteLeft } from "react-icons/fa"; // Quote icon
import { FiBook } from "react-icons/fi"; // Subject icon

const testimonialsData = [
  {
    text: "Sir Hamza is a commendable teacher who has helped me to perform well in chemistry by simplifying complex concepts. His classes have always been very engaging and interactive, which makes it easier to focus and learn.",
    author: "🇸🇦 Mahnoor Faisal",
    grades: "Distinction",
    school: "PISJES",
    bgColor: "bg-blue-100 text-blue-900",
    quoteColor: "text-blue-600",
    iconColor: "text-blue-600",
  },
  {
    text: "Sir Hamza has been incredibly helpful in making chemistry easier to understand. He explains complex topics in a simple, clear way, and ensures we understand each concept before moving forward. I especially appreciate that every lesson is well-prepared and organized, and that he always takes the time to answer questions. I've noticed a big improvement in my performance in chemistry thanks to their teaching.",
    author: "🇸🇦 Tahreem Awan",
    grades: "Physics A*, Chemistry A*",
    school: "PISJES",
    bgColor: "bg-purple-100 text-purple-900",
    quoteColor: "text-purple-600",
    iconColor: "text-purple-600",
  },
];

const Testimonials = ({ testimonials = testimonialsData }) => {
  if (!testimonials || testimonials.length === 0) {
    return (
      <section className="bg-[#fdf9f6] py-20 px-[5%] text-center">
        <div className="w-full max-w-[1200px] mx-auto">
          <h2 className="text-[25px] font-semibold text-gray-700">No testimonials available.</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-[5%] font-['Inter_Tight',sans-serif]">
      <div className="flex flex-wrap justify-center gap-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`relative p-8 flex-[5_1_0%] min-w-[300px] max-w-[580px] rounded-xl shadow-md ${testimonial.bgColor}`}
          >
            {/* Quote Icon */}
            <FaQuoteLeft className={`absolute top-4 left-4 text-2xl ${testimonial.quoteColor}`} />

            {/* Subject Icon */}
            <FiBook className={`absolute top-4 right-4 text-2xl ${testimonial.iconColor}`} />

            {/* Testimonial Text */}
            <p className="text-2xl italic mt-8 leading-relaxed">"{testimonial.text}"</p>

            {/* Author Information */}
            <div className="mt-4">
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-lg">
                {testimonial.grades} - {testimonial.school}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;