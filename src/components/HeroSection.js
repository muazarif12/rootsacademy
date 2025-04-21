import React from "react";

const HeroSection = () => {
  return (
    <div className="text-center mb-16 font-['Inter_Tight'] p-20">
      <h1 className="text-[41px] font-bold text-[#4D3E77] leading-[1.1] tracking-normal mt-0 mb-0">
        Be rooted with{" "}
        <span className="bg-[#4D3E77] text-[50px] text-white px-2 py-1 rounded-md inline-block">
          Roots Academy
        </span>
      </h1>
      <p className="text-[26px] font-bold text-[#4D3E77] mt-6">
        Leading IGCSE, O-Level and A-Level Platform
      </p>
      <p className="text-[24.32px] font-regular text-[#4D3E77] mt-1">
        Empowering 1000+ students globally through our platform
      </p>
    </div>
  );
};

export default HeroSection;
