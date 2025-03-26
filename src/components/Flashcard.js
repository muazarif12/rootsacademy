export default function Flashcards() {
  const flashcards = Array(9).fill({
    imgSrc: "https://placehold.co/153x123",
    title: "Flashcards",
    description: "Quick, effective revision that sticks. Build exam confidence, one card at a time."
  });

  return (
    <div className="flex justify-center pt-30 p-6"> {/* Added top padding */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {flashcards.map((card, index) => (
          <div key={index} className="w-[480px] h-[350px] relative flex items-center justify-center"> {/* Adjusted size */}
            <div className="w-[480px] h-[350px] absolute bg-[#4d3e78] rounded-[46px] shadow-lg border-2 border-white" />
            <img className="w-[130px] h-[100px] absolute top-8 shadow-lg border-2 border-white" src={card.imgSrc} alt="Flashcard" />
            <div className="absolute top-[135px] text-center w-[440px]">
              <span className="text-white text-[28px] font-bold font-['Inter'] [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)]">{card.title}<br/></span>
              <span className="text-white text-lg font-bold font-['Inter'] [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)]">{card.description}<br/></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}