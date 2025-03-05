import React from "react";

const subjects = [
  { name: "Physics", color: "from-pink-400 to-pink-600" },
  { name: "Chemistry", color: "from-purple-400 to-purple-600" },
  { name: "Mathematics", color: "from-blue-400 to-blue-600" },
  { name: "Biology", color: "from-red-400 to-red-600" },
  { name: "Economics", color: "from-green-400 to-green-600" },
  { name: "Business", color: "from-teal-400 to-teal-600" },
  { name: "Accounting", color: "from-yellow-400 to-yellow-600" },
];

const SubjectButtons = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-8">
      {subjects.map((subject, index) => (
        <button
          key={index}
          className={`bg-gradient-to-r ${subject.color} text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md transform transition-all duration-300 hover:scale-105 hover:brightness-110`}
        >
          {subject.name}
        </button>
      ))}
    </div>
  );
};

export default SubjectButtons;
