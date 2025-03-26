import { FaQuoteLeft } from "react-icons/fa"; // Quote icon
import saudiFlag from "../assets/images/saudiflag.png";


export default function Testimonials() {
    const testimonials = [
        {
            text: "Sir Hamza is a commendable teacher who has helped me to perform well in chemistry by simplifying complex concepts. His classes have always been very engaging and interactive, which makes it easier to focus and learn.",
            author: "Mahnoor Faisal - Distinction (PISJES)",
            bgColor: "#fff7d6",
            borderColor: "#6F541D",
            country: saudiFlag,
            width: "w-[330px]",
            height: "h-[320px]"
        },
        {
            text: "Sir Hamza has been incredibly helpful in making chemistry easier to understand. He explains complex topics in a simple, clear way, and ensures we understand each concept before moving forward. I especially appreciate that every lesson is well-prepared and organized, and that he always takes the time to answer questions. I’ve noticed a big improvement in my performance in chemistry thanks to their teaching. I’m very thankful to have a teacher who is not only knowledgeable but also truly invested in their students’ success.",
            author: "Tahreem Awan - Physics, Chemistry A* - PISJES",
            bgColor: "#DEFEF9",
            borderColor: "#366F76",
            country: saudiFlag,  
            width: "w-[330]",
            height: "h-[580px]"
        },
        {
            text: "Sir Hamza is a commendable teacher who has helped me to perform well in chemistry by simplifying complex concepts. His classes have always been very engaging and interactive, which makes it easier to focus and learn.",
            author: "Mahnoor Faisal - Distinction (PISJES)",
            bgColor: "#D6F2FF",
            borderColor: "#1F2A9B",
            country: saudiFlag,
            width: "w-[330px]",
            height: "h-[320px]"
        },  {
          text: "Sir Hamza has been incredibly helpful in making chemistry easier to understand. He explains complex topics in a simple, clear way, and ensures we understand each concept before moving forward...",
          author: "Tahreem Awan - Physics, Chemistry A* - PISJES",
          bgColor: "#EDEFFC ",
          borderColor: "#1F2A9B",
          country: saudiFlag,
          width: "w-[330px]",
          height: "h-[580px]"
      },{
        text: "Sir Hamza is a commendable teacher who has helped me to perform well in chemistry by simplifying complex concepts. His classes have always been very engaging and interactive, which makes it easier to focus and learn.",
        author: "Mahnoor Faisal - Distinction (PISJES)",
        bgColor: "#D6F2FF",
        borderColor: "#1F2A9B",
        country: saudiFlag,
        width: "w-[330px]",
        height: "h-[320px]"
    },  
       {
        text: "Sir Hamza has been incredibly helpful in making chemistry easier to understand. He explains complex topics in a simple, clear way, and ensures we understand each concept before moving forward...",
        author: "Tahreem Awan - Physics, Chemistry A* - PISJES",
        bgColor: "#F3E8F8",
        borderColor: "#4F1C58",
        country: saudiFlag,
        width: "w-[330px]",
        height: "h-[580px]"
    },
    ];

    return (
      <div className="flex justify-center">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pl-40 pr-40 pb-30">
        {/* Column 1 - Small, Large */}
        <div className="flex flex-col gap-2">
          <TestimonialCard testimonial={testimonials[0]} />
          <TestimonialCard testimonial={testimonials[1]} />
        </div>
        
        {/* Column 2 - Large, Small */}
        <div className="flex flex-col gap-2">
          <TestimonialCard testimonial={testimonials[3]} />
          <TestimonialCard testimonial={testimonials[2]} />
        </div>
        
        {/* Column 3 - Small, Large */}
        <div className="flex flex-col gap-2">
          <TestimonialCard testimonial={testimonials[4]} />
          <TestimonialCard testimonial={testimonials[5]} />
        </div>
      </div>
      </div>
    );
  }
  
  const TestimonialCard = ({ testimonial }) => {
    return (
      <div
        style={{ backgroundColor: testimonial.bgColor, borderColor: testimonial.borderColor+"80" }}
        className={`relative p-6 rounded-[27px] border ${testimonial.height} w-[400px] shadow-lg shadow-blue-500/30`}
      >
        {/* Quote Icon */}
        <FaQuoteLeft className="absolute top-6 left-6 text-2xl" style={{ color: testimonial.borderColor }} />
  
        {/* Text Content */}
        <div className="h-full flex items-center justify-center text-lg font-semibold font-['Inter'] px-4 pb-6"
             style={{ color: testimonial.borderColor ,fontSize:"15px"}}>
          "{testimonial.text}"
        </div>
  
        {/* Author */}
        <div className="absolute bottom-10 left-20 text-lg font-bold font-['Inter']"
             style={{ color: testimonial.borderColor,fontSize:"16px"}}>
          {testimonial.author}
        </div>
  
        {/* Country Icon */}
        <img className="w-[49px] h-[49px] absolute bottom-8 left-4 rounded-full" src={testimonial.country} alt="country" />
  
        {/* Placeholder Image */}
        <img className="w-[41px] h-[49px] absolute top-4 right-4" src="https://placehold.co/41x49" alt="Placeholder" />
      </div>
    );
  };
  