import React from "react";

const stats = [
  { value: "800+", label: "Live Courses & Videos", bgColor: "bg-[#eadff8]", textColor: "text-[#4d3e78]" , borderColor: "border-[#c2aafa]"},
  { value: "200+", label: "Resources", bgColor: "bg-[#ffe0cc]", textColor: "text-[#b74d1a]" , borderColor: "border-[#ffc8a3]"},
  { value: "3600+", label: "Hours of classes", bgColor: "bg-[#ffdce8]", textColor: "text-[#a54b7a]" , borderColor: "border-[#d6a2b9]"},
  { value: "93%", label: "Retention Rate", bgColor: "bg-[#d6edd9]", textColor: "text-[#195642]" , borderColor: "border-[#53b07f]"},
];

const StatsSection = () => {
  return (
    <div className=" py-16">
      <div className="flex flex-wrap justify-center gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center w-[200px] sm:w-[250px]">
            {/* Number inside rounded box with shadow */}
            <div className={`px-8 py-10 rounded-xl text-6xl font-extrabold ${stat.bgColor} ${stat.textColor} ${stat.borderColor} border shadow-md font-['Inter_Tight']`}>
              {stat.value}
            </div>
            {/* Label below with better font styling */}
            <p className={`text-lg font-semibold mt-3 tracking-wide ${stat.textColor} font-['Inter_Tight']`}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
