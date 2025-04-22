import React from "react";

const subjects = [
  { name: "Physics", color: "bg-[#F587B8]" },
  { name: "Chemistry", color: "bg-[#8D75E5]" },
  { name: "Mathematics", color: "bg-[#71A7E5]" },
  { name: "Biology", color: "bg-[#F67168]" },
  { name: "Economics", color: "bg-[#04BAAE]" },
  { name: "Computer Science", color: "bg-[#2F689D]" },
  { name: "Islamiat", color: "bg-[#2f689d]" },
  { name: "Pakistan Studies", color: "bg-[#8D75E5]" },
  { name: "Urdu", color: "bg-[#bc76d6]" },
];

const SubjectButtons = () => {
  return (
    <div className="flex flex-col items-center gap-6 mt-8">
      {/* First row - first 6 subjects */}
      <div className="flex flex-wrap justify-center gap-6">
        {subjects.slice(0, 6).map((subject, index) => (
          <button
            key={index}
            className={`${subject.color} text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md transform transition-all duration-300 hover:scale-105 hover:brightness-110 w-30 text-center`}
          >
            {subject.name}
          </button>
        ))}
      </div>
      
      {/* Second row - last 3 subjects */}
      <div className="flex flex-wrap justify-center gap-6">
        {subjects.slice(6).map((subject, index) => (
          <button
            key={index + 6} // Ensure unique keys
            className={`${subject.color} text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md transform transition-all duration-300 hover:scale-105 hover:brightness-110 w-30 text-center`}
          >
            {subject.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubjectButtons;