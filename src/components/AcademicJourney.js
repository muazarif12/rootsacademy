import React from "react";

const AcademicJourney = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6">
      {/* Header Section */}
      <div className="w-[320px] h-[81px] bg-[#4D3E78] relative top-[90px] left-[60px] z-[-1]"></div>

      {/* Main Text Section */}
      <div className="w-[1030px] h-[258px] ">
        <h1 className="text-[60px] font-extrabold">
          <span className="text-[#58509A]">Ready to </span>
          <span className="text-white">Transform</span>
          <span className="text-[#58509A]"> your Academic Journey?</span>
        </h1>
        <p className="text-[#4D3E78] text-[32px] font-light mt-4">
          Get instant access to expert-led courses and comprehensive resources
          that make A/A* grades achievable.
        </p>
      </div>

      {/* Button Section */}
      <div className="w-[382px] h-[102px] bg-[#4D3E78] rounded-[20px] flex items-center justify-center mt-6 transition duration-300 hover:bg-[#3b2e5a] hover:scale-105 relative top-[50px]" >
        <button className="text-white text-[32px] font-semibold font-roboto ">
          Start your A* journey
        </button>
      </div>

      {/* Image */}
      <img
        className="w-[437px] h-[498px] mt-6 relative top-[50px]"
        src="https://cdn.prod.website-files.com/66a9d3b309fadf5baa213c6b/679e08513a655710d990eda2_abstract_mobile%20illustration-05@0.5x-p-500.webp"
        alt="Placeholder"
      />
    </div>
  );
};

export default AcademicJourney;
