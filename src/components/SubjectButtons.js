import React from "react";

const subjects = [
  { name: "Physics", color: "bg-pink-400" },
  { name: "Chemistry", color: "bg-purple-400" },
  { name: "Mathematics", color: "bg-blue-400" },
  { name: "Biology", color: "bg-red-400" },
  { name: "Economics", color: "bg-green-400" },
  { name: "Business", color: "bg-teal-500" },
  { name: "Accounting", color: "bg-yellow-400" },
];

const SubjectButtons = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      {subjects.map((subject, index) => (
        <button key={index} className={`${subject.color} text-white px-6 py-2 rounded-lg`}>
          {subject.name}
        </button>
      ))}
    </div>
  );
};

export default SubjectButtons;
