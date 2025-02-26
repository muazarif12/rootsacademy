import React from "react";
import courseImage from "../assets/images/homepage-laptop.png"; // Replace with actual image

const CoursePreview = () => {
  return (
    <div className="flex justify-center mt-10">
      <img src={courseImage} alt="Courses" className="rounded-lg shadow-lg w-3/4 md:w-1/2" />
    </div>
  );
};

export default CoursePreview;
