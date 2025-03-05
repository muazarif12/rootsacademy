import React from "react";
import courseImage from "../assets/images/homepage-laptop.png"; // Replace with actual image path

const CoursePreview = () => {
  return (
    <div className="flex justify-center mt-12 mb-20">  {/* Added mb-20 for spacing */}
      <div className="border-4 border-purple-300 rounded-xl shadow-xl bg-white overflow-hidden">
        <img src={courseImage} alt="Courses" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default CoursePreview;
