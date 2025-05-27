import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import image1 from '../assets/images/Chemsitry/image1.jpg'
import image2 from '../assets/images/Chemsitry/image2.jpg'
import image3 from '../assets/images/Chemsitry/image3.jpg'
import image4 from '../assets/images/Chemsitry/image4.jpg'
// import image5 from '../assets/images/chemistry/image5.pdf';

//import image1 from '../assets/images/chemistry/image1.jpg';

const ChemistryPage = ({ trial = false, purchase = false }) => {
  return (
    <div className="min-h-screen bg-[#FDF9F6]">
      {/* No need to call Navbar here since it's already in index.js */}
      <div className="text-center mb-10 font-['Roboto'] px-4 py-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#4D3E77] leading-tight tracking-normal mt-0 mb-0">

              <span className="bg-[#4D3E77] text-white px-3 py-2 rounded-md inline-block">
               Chemistry
              </span>
              
            </h1>
          </div>  
      
      <div className="max-w-6xl mx-auto py-10 px-6">
        {/* Section 1: Hero Section - Image on Right */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Your ticket to top-tier results</h2>
            <p className="text-lg mb-6">
              Study with our crisp, comprehensive notes and extensive practice tools. 
              No wasted time, no filler—only streamlined content aligned with your curriculum.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/register"
                className="px-6 py-3 bg-[#4D3E77] text-white font-semibold rounded-lg hover:bg-[#3A2D5A] transition"
              >
                Free Demo Class
              </Link>
              
            </div>
          </div>
          <div className="rounded-lg shadow-xl overflow-hidden border-8 border-white bg-white">
            <img
              // src={image1}
              src={image1} // Using public folder path instead
              alt="Biology course preview"
              className="w-full h-auto"
            />
          </div>
        </div>
        
        {/* Section 2: Video Lessons - Image on Left */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div className="order-2 md:order-1 rounded-lg shadow-xl overflow-hidden border-8 border-white bg-white ">
            <img
              // src={image2}
              src={image2} // Using public folder path instead
              alt="Biology video lessons"
              className="w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">Learning made simple & concise</h2>
            <p className="text-lg mb-6">
            Complex theories are broken into clean, visual snapshots that zero in on key ideas. Through sharp diagrams, bullet-point highlights, and summary frameworks, every lesson stays focused and digestible.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/register"
                className="px-6 py-3 bg-[#4D3E77] text-white font-semibold rounded-lg hover:bg-[#3A2D5A] transition"
              >
                Free Demo Class
              </Link>
            </div>
          </div>
        </div>
        
        {/* Section 3: Practical Skills - Image on Right */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Sharpen skills with targeted practice</h2>
            <p className="text-lg mb-6">
            Boost your exam readiness using our carefully selected past questions organized by topic and difficulty. These expert-curated challenges reveal recurring patterns, sharpen problem-solving tactics, and equip you to approach any question.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/register"
                className="px-6 py-3 bg-[#4D3E77] text-white font-semibold rounded-lg hover:bg-[#3A2D5A] transition"
              >
                Free Demo Class
              </Link>
            </div>
          </div>
          <div className="rounded-lg shadow-xl overflow-hidden border-8 border-white bg-white ">
            <img
              // src={image3}
              src={image3} // Using public folder path instead
              alt="Biology practical skills"
              className="w-full h-auto"
            />
          </div>
        </div>
        
        {/* Section 4: Exam Techniques - Image on Left */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div className="order-2 md:order-1 rounded-lg shadow-xl overflow-hidden border-8 border-white bg-white">
            <img
              // src={image4}
              src={image4} // Using public folder path instead
              alt="Biology exam techniques"
              className="w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">Accelerate your study timeline</h2>
            <p className="text-lg mb-6">
            Ditch the typical year-long grind with our efficient approach. By blending pinpoint notes and strategic practice sessions, you’ll progress at your ideal pace and finish your preparation in weeks.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/register"
                className="px-6 py-3 bg-[#4D3E77] text-white font-semibold rounded-lg hover:bg-[#3A2D5A] transition"
              >
                Free Demo Class
              </Link>
            </div>
          </div>
        </div>
        
        
      </div>
      
      <Footer />
    </div>
  );
};

export default ChemistryPage;