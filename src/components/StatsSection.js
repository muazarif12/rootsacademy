import React from "react";

const stats = [
  { value: "800+", label: "Live Courses & Videos", bgColor: "bg-purple-200", textColor: "text-purple-800" },
  { value: "200+", label: "Resources", bgColor: "bg-orange-100", textColor: "text-orange-700" },
  { value: "3600+", label: "Hours of classes", bgColor: "bg-pink-200", textColor: "text-pink-700" },
  { value: "93%", label: "Retention Rate", bgColor: "bg-green-200", textColor: "text-green-800" },
];

const StatsSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="flex justify-center gap-12">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Number inside rounded box with shadow */}
            <div className={`px-10 py-5 rounded-xl text-4xl font-extrabold ${stat.bgColor} ${stat.textColor} shadow-md`}>
              {stat.value}
            </div>
            {/* Label below with better font styling */}
            <p className={`text-lg font-semibold mt-3 tracking-wide ${stat.textColor}`}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
