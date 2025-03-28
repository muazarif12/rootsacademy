import React from "react";

import AllTests from "../components/AllTests";
import Footer from "../components/Footer";
const Results = () => {
  return (
    <div className="min-h-screen  bg-[#FDF9F6]" > 
      
      <div className=" pb-20">  {/* Added extra padding to bottom */}
        <AllTests />
        
      </div>
      
      <Footer/>

      
    
    </div>
    

    
  );
};

export default Results;
