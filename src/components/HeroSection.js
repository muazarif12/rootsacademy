import React from "react";

const HeroSection = () => {
  return (
    <div className="text-center mb-16 font-['Inter_Tight'] p-4 md:p-10">
      <h1 className="text-[32px] md:text-[50px] font-bold text-[#4D3E77] leading-[1.1] tracking-normal mt-0 mb-0">
        <span className="bg-[#4D3E77] text-white px-2 py-1 rounded-md inline-block">
          Roots Academy
        </span>
      </h1>
      <p className="text-[18px] md:text-[26px] font-bold text-[#4D3E77] mt-4 md:mt-6">
        Leading IGCSE, O Level, and A Level Platform
      </p>
      <p className="text-[16px] md:text-[24px] font-regular text-[#4D3E77] mt-1">
        Empowering 1000+ students globally through our platform
      </p>
    </div>
  );
};

export default HeroSection;