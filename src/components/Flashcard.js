import flashcardimg from "../assets/images/flashcard.png";
const Flashcards = () => {
  const cards = [
    { 
      title: "Flashcards", 
      description: "Quick, effective revision that sticks. Build exam confidence, one card at a time.", 
      imgSrc: flashcardimg 
    },
    { 
      title: "Quizzes", 
      description: "Test your knowledge with engaging quizzes and track your progress.", 
      imgSrc: flashcardimg
    },
    { 
      title: "Mind Maps", 
      description: "Visualize concepts with structured mind maps for better retention.", 
      imgSrc: flashcardimg
    },
    { 
      title: "Notes", 
      description: "Organize your study materials efficiently with digital notes.", 
      imgSrc: flashcardimg 
    },
    { 
      title: "Practice Tests", 
      description: "Simulate real exam conditions with timed practice tests.", 
      imgSrc: flashcardimg
    },
    { 
      title: "Videos", 
      description: "Learn complex topics with interactive video lessons.", 
      imgSrc: flashcardimg
    },
    { 
      title: "Progress Tracker", 
      description: "Monitor your learning journey and track improvement.", 
      imgSrc: flashcardimg
    },
    { 
      title: "Interactive Exercises", 
      description: "Engage in hands-on learning with interactive exercises.", 
      imgSrc: flashcardimg
    },
    { 
      title: "Daily Challenges", 
      description: "Stay motivated with daily learning challenges and rewards.", 
      imgSrc: flashcardimg
    }
  ];

  return (
    <section className="bg-[#fdf9f6] py-12 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="bg-[#4D3E78] text-white p-6 rounded-[20px] shadow-lg relative flex flex-col items-center text-center font-medium font-['Roboto'] ">
            
            
            {/* Card Image */}
            <img src={card.imgSrc} alt={card.title} className="w-16 h-16 object-contain mb-4" />

            {/* Card Content */}
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-sm mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Flashcards;
