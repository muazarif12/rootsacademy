import React from "react";

const AcademicJourney = () => {
  return (
    <div className="flex flex-col items-center text-center px-4 py-12 md:py-20">
      {/* Main Text Section */}
      <div className="max-w-[1030px] w-full">
        <h1 className="text-[36px] sm:text-[42px] md:text-[50px] lg:text-[60px] font-bold text-[#4D3E77] leading-[1.2]">
          Ready To{" "}
          <span className="bg-[#4D3E77] text-white px-2 py-1 rounded-md inline-block">
            Transform
          </span>{" "}
          Your Academic Journey?
        </h1>
        <p className="text-[#4D3E78] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-light mt-4">
          Get instant access to expert-led courses, timed crash courses, and
          comprehensive resources that make A/A* grades achievable.
        </p>
      </div>

      {/* Button Section */}
      <div className="mt-6">
        <button className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[382px] h-[70px] md:h-[90px] lg:h-[102px] bg-[#4D3E78] rounded-[20px] flex items-center justify-center text-white text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-semibold transition duration-300 hover:bg-[#3b2e5a] hover:scale-105">
          Start your A* journey
        </button>
      </div>

      {/* Image Section */}
      <img
        className="w-[250px] sm:w-[300px] md:w-[380px] lg:w-[437px] h-auto mt-8"
        src="https://cdn.prod.website-files.com/66a9d3b309fadf5baa213c6b/679e08513a655710d990eda2_abstract_mobile%20illustration-05@0.5x-p-500.webp"
        alt="Academic Journey"
      />
    </div>
  );
};

export default AcademicJourney;
