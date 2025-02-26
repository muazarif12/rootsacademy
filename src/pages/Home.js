import React from "react";
import HeroSection from "../components/HeroSection";
import SubjectButtons from "../components/SubjectButtons";
import CoursePreview from "../components/CoursePreview";

const Home = () => {
  return (
    <div className="bg-purple-100 min-h-screen">
      <HeroSection />
      <SubjectButtons />
      <CoursePreview />
    </div>
  );
};

export default Home;
