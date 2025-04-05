import React from "react";

import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import TeachersNTeam from "../components/TeachersNTeam";
const About = () => {
  return (
    <div className="min-h-screen bg-[#FDF9F6]">
      <div className="max-w-7xl mx-auto py-10 ">
        <AboutUs />
        <TeachersNTeam/>
      </div>
      <div>
        <Footer />
      </div>
    </div>

  );
};

export default About;
