import React from "react";

const Flashcard = () => {
  const flashcards = Array(10).fill({
    title: "Flashcards",
    description:
      "Quick, effective revision that sticks. Build exam confidence, one card at a time.",
    imageUrl: "",
  });

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {flashcards.map((card, index) => (
        <div
          key={index}
          className="w-[564px] h-[330px] bg-white rounded-[46px] flex flex-col items-center p-6 shadow-lg"
        >
          <img
            src={card.imageUrl}
            alt="Flashcard"
            className="w-[153px] h-[123px] mb-4"
          />
          <div className="text-center">
            <h2 className="text-[#4D3E77] text-2xl font-bold">{card.title}</h2>
            <p className="text-[#4D3E77] text-lg font-bold mt-2">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Flashcard;
