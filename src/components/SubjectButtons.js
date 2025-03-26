import React from "react";

const subjects = [
  { name: "Physics", color: "bg-[#F587B8]" },
  { name: "Chemistry", color: "bg-[#8D75E5]" },
  { name: "Mathematics", color: "bg-[#71A7E5]" },
  { name: "Biology", color: "bg-[#F67168]" },
  { name: "Economics", color: "bg-[#04BAAE]" },
  { name: "Business", color: "bg-[#2F689D]" },
  { name: "Accounting", color: "bg-[#FDBD75]" },
];

const SubjectButtons = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-8">
      {subjects.map((subject, index) => (
        <button
          key={index}
          className={`${subject.color} text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md transform transition-all duration-300 hover:scale-105 hover:brightness-110`}
        >
          {subject.name}
        </button>
      ))}
    </div>
  );
};


export default SubjectButtons;
