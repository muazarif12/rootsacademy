import React from "react";
import HeroSection from "../components/HeroSection";
import SubjectButtons from "../components/SubjectButtons";
import CoursePreview from "../components/CoursePreview";
import StatsSection from "../components/StatsSection";
import LiveInteractiveSection from "../components/LiveInteractiveSection";
import Testimonials from "../components/Testimonials";
import FeaturesSection from "../components/FeaturesSection"; 
import Flashcard from "../components/Flashcard";
import AcademicJourney from "../components/AcademicJourney";
import Testimonials2 from "../components/Testimonials2";
import GotQuestions from "../components/GotQuestions";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="min-h-screen  bg-[#FDF9F6]" > 
      <div className=" pb-20">  {/* Added extra padding to bottom */}
        <HeroSection />
        <SubjectButtons />
        <CoursePreview />
      </div>

      {/* White Background Section with extra spacing on top */}
      <div className="bg-[#FDF9F6] pt-24">
        <StatsSection />
        <Testimonials />
      </div>
      {/* New Features Section */}
      <FeaturesSection />
      <LiveInteractiveSection />
      <div className="pt-24">
        <Flashcard/>
      </div>
      <div className="pt-24">
        <AcademicJourney/>
      </div> 
      <div className="pt-24">
        <Testimonials2/>
      </div>
      <GotQuestions/>
      <Footer/>

      
    
    </div>
    

    
  );
};

export default Home;
