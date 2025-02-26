import React from "react";

const FeatureCard = ({ title, description, image, bgColor }) => {
  return (
    <div className={`p-6 border-2 rounded-lg shadow-lg ${bgColor}`}>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      {image && <img src={image} alt={title} className="rounded-lg" />}
    </div>
  );
};

export default FeatureCard;
