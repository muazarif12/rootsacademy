import React from "react";
import HeroSection from "../components/HeroSection";
import SubjectButtons from "../components/SubjectButtons";
import CoursePreview from "../components/CoursePreview";
import StatsSection from "../components/StatsSection";
import Testimonials from "../components/Testimonials";
import FeaturesSection from "../components/FeaturesSection"; 
import Flashcard from "../components/Flashcard";
import AcademicJourney from "../components/AcademicJourney";
import Testimonials2 from "../components/Testimonials2";
import GotQuestions from "../components/GotQuestions";
const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-[#FDF9F6] pb-20">  {/* Added extra padding to bottom */}
        <HeroSection />
        <SubjectButtons />
        <CoursePreview />
      </div>

      {/* White Background Section with extra spacing on top */}
      <div className="bg-white pt-24">
        <StatsSection />
        <Testimonials />
      </div>

      {/* New Features Section */}
      <FeaturesSection />
      <Flashcard/>
      <AcademicJourney/>
      <Testimonials2/>
      <GotQuestions/>
    
    </div>
    
  );
};

export default Home;
