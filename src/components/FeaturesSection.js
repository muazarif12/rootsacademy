import React from "react";

const features = [
  {
    title: "Epic Courses Made By The Best",
    description: "Learn from teachers who’ve helped students score A*s for 26+ years. Our video lessons break down complex topics into digestible chunks that stick.",
    bgColor: "bg-red-100 border-red-300",
    textColor: "text-red-800",
    image: "/assets/images/feature1.png", // Replace with actual image
  },
  {
    title: "Past Paper Mastery",
    description: "Watch top teachers solve exam questions step-by-step, showing you exactly what examiners want.",
    bgColor: "bg-green-100 border-green-300",
    textColor: "text-green-800",
    image: "/assets/images/feature2.png",
  },
  {
    title: "Expert Support",
    description: "Stuck on a question? Get help anytime, anywhere - on your phone, laptop, or tablet.",
    bgColor: "bg-blue-100 border-blue-300",
    textColor: "text-blue-800",
    image: "/assets/images/feature3.png",
  },
  {
    title: "Timed Crash Courses",
    description: "Turn months of revision into a clear, manageable plan with our 90 & 60-day crash courses. Perfect for busy students aiming for top grades.",
    bgColor: "bg-yellow-100 border-yellow-300",
    textColor: "text-yellow-800",
    image: "/assets/images/feature4.png",
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-[#E8DAF8] py-16 text-center">
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-[#3C2A7B]">
        The <span className="bg-white px-2 py-1 rounded">Ultimate</span> A Level Toolkit
      </h2>
      <p className="text-lg text-gray-700 mt-3 max-w-3xl mx-auto">
        Our platform has helped students across 100+ countries achieve their dream grades. It’s not just a promise – it’s our guarantee.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 px-8 md:px-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`border-2 ${feature.bgColor} rounded-2xl shadow-lg p-6 flex flex-col`}
          >
            <h3 className={`text-xl font-bold ${feature.textColor}`}>{feature.title}</h3>
            <p className="text-gray-700 mt-2">{feature.description}</p>
            <img src={feature.image} alt={feature.title} className="mt-4 rounded-lg shadow" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
