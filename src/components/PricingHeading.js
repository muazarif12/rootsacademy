import React from 'react';
import { MdAccessTime } from 'react-icons/md';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const PricingHeading = () => {
    return (
        <section className="bg-[#FFF9F6] text-center font-['Inter_Tight'] px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-14 mb-10 md:mb-16">
            <h1 className="text-[22px] sm:text-[26px] md:text-[32px] lg:text-[38px] font-bold text-[#4D3E77] leading-[1.2] sm:leading-[1.1] tracking-normal mt-0 mb-0 max-w-[90%] sm:max-w-[85%] md:max-w-[42rem] mx-auto">
                Unlock the leading IGCSE/O Level and A Levels Platform
            </h1>

            <p className="text-[15px] sm:text-[17px] md:text-[20px] lg:text-[24px] font-bold text-[#4D3E77] mt-3 sm:mt-5 max-w-[90%] sm:max-w-[85%] md:max-w-[42rem] mx-auto">
                The Leader in IGCSE/ O-Level & A-Level Learning Platform
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 md:gap-5 mt-6 sm:mt-8">
                {/* Guarantee */}
                <div className="bg-[#4D3E77] text-white px-3 sm:px-4 md:px-5 py-2 flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm md:text-base w-full max-w-[260px] sm:max-w-[240px] md:max-w-[280px] justify-center rounded-lg h-[48px] sm:h-[52px]">
                    <div className="bg-[#8776BD] rounded-full p-1 flex items-center justify-center">
                        <MdAccessTime className="text-base sm:text-lg md:text-xl" />
                    </div>
                    <span className="font-[550] text-[11px] sm:text-[12px] md:text-[13px]">7 day money-back guarantee</span>
                </div>

                {/* Rating */}
                <div className="bg-[#4D3E77] text-white px-3 sm:px-4 md:px-5 py-2 flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm md:text-base w-full max-w-[260px] sm:max-w-[240px] md:max-w-[280px] justify-center rounded-lg h-[48px] sm:h-[52px]">
                    <div className="flex text-yellow-400 text-sm sm:text-base md:text-lg">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                    <span className="font-[550] text-[11px] sm:text-[12px] md:text-[13px]">4.9 out of 5 stars</span>
                </div>

                {/* Free Demo */}
                <div className="bg-[#4D3E77] text-white px-3 sm:px-4 md:px-5 py-2 flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm md:text-base w-full max-w-[200px] sm:max-w-[180px] md:max-w-[220px] justify-center rounded-lg h-[48px] sm:h-[52px]">
                    <div className="bg-[#8776BD] rounded-full p-1 flex items-center justify-center">
                        <MdAccessTime className="text-base sm:text-lg md:text-xl" />
                    </div>
                    <span className="font-[550] text-[11px] sm:text-[12px] md:text-[13px]">Free Demo Class</span>
                </div>
            </div>
        </section>
    );
};

export default PricingHeading;