import flashcardimg from "../assets/images/flashcard.png";

import icon1 from "../assets/Icons 2D/Student Portal.png";
import icon2 from "../assets/Icons 2D/1 to 1 support.png";

import icon3 from "../assets/Icons 2D/Rewards.png";
import icon4 from "../assets/Icons 2D/Live classes.png";
import icon5 from "../assets/Icons 2D/Digital resources.png";
import icon6 from "../assets/Icons 2D/past papers 2.png";
import icon7 from "../assets/Icons 2D/assignments.png";
import icon8 from "../assets/Icons 2D/reviewed assignments.png";

import icon9 from "../assets/Icons 2D/Academic Support 1.png";







const Flashcards = () => {
  const cards = [
    
      { 
        title: "Student Portal", 
        description: "Track progress, access materials & submit assignments—all in one place!", 
        imgSrc: icon1 
      },
      { 
        title: "One-on-One Support", 
        description: "Get personalized guidance with our teacher assistants and student counselor to overcome academic challenges.", 
        imgSrc: icon2 
      },
      { 
        title: "Monthly Rewards", 
        description: "Compete in tests & win prize money for securing positions.", 
        imgSrc: icon3 
      },
      { 
        title: "Live Interactive Classes", 
        description: "Engage in real-time discussions with expert teachers.", 
        imgSrc: icon4 
      },
      { 
        title: "Digital Resources", 
        description: "Access e-books, notes, past papers, recordings & worksheets and all the resources you need.", 
        imgSrc: icon5 
      },
      { 
        title: "Past Papers Practice", 
        description: "Get complete access to a vast archive [20+ years] of topical and yearly past papers, covering every variant to help you master every concept.", 
        imgSrc: icon6 
      },
      { 
        title: "Assignments & Tests", 
        description: "Reinforce your learning by focusing on individual topics through targeted assessments.", 
        imgSrc: icon7 
      },
      { 
        title: "Evaluation", 
        description: "Receive personalized, detailed evaluation and feedback on every submitted script - whether it is test or assignment.", 
        imgSrc: icon8 
      },
      { 
        title: "Academic Support", 
        description: "Get the help you need, whenever and wherever you need it, to stay on track and succeed.", 
        imgSrc: icon9 
      }
    ]
    
  ;

  return (
    <section className=" flex flex-col items-center text-center py-12 px-6">
      <div className="max-w-[1030px] w-full">
        <h1 className="text-[36px] sm:text-[42px] md:text-[50px] lg:text-[60px] font-bold text-[#4D3E77] leading-[1.2]">
          All you need to {" "}
          <span className="bg-[#4D3E77] text-white px-2 py-1 rounded-md inline-block">
            Ace
          </span>{" "}
          your exam
        </h1>
      
      </div>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-10">
        {cards.map((card, index) => (
          <div key={index} className="bg-white text-white p-6 rounded-[20px] shadow-lg relative flex flex-col items-center text-center font-medium font-['Roboto'] ">
            
            
            {/* Card Image */}
            <img src={card.imgSrc} alt={card.title} className="w-24 h-24 object-contain mb-4" />

            {/* Card Content */}
            <h3 className="text-lg font-semibold text-[#4D3E77]">{card.title}</h3>
            <p className="text-sm mt-2 text-[#4D3E77]" >{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Flashcards;
