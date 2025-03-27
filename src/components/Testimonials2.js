import { FaQuoteLeft } from "react-icons/fa"; // Quote icon
import saudiFlag from "../assets/images/saudiflag.png";
import "@fontsource/roboto"; // Default weight (400)
import "@fontsource/roboto/700.css"; // Bold





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
          text: "Sir Hamza has been incredibly helpful in making chemistry easier to understand. He explains complex topics in a simple, clear way, and ensures we understand each concept before moving forward. I especially appreciate that every lesson is well-prepared and organized, and that he always takes the time to answer questions. I’ve noticed a big improvement in my performance in chemistry thanks to their teaching. I’m very thankful to have a teacher who is not only knowledgeable but also truly invested in their students’ success.",
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
        text: "Sir Hamza has been incredibly helpful in making chemistry easier to understand. He explains complex topics in a simple, clear way, and ensures we understand each concept before moving forward. I especially appreciate that every lesson is well-prepared and organized, and that he always takes the time to answer questions. I’ve noticed a big improvement in my performance in chemistry thanks to their teaching. I’m very thankful to have a teacher who is not only knowledgeable but also truly invested in their students’ success.",
        author: "Tahreem Awan - Physics, Chemistry A* - PISJES",
        bgColor: "#F3E8F8",
        borderColor: "#4F1C58",
        country: saudiFlag,
        width: "w-[330px]",
        height: "h-[580px]"
    },
    ];

    return (
      <section className="bg-[#fdf9f6] py-20 pt-[140px] pb-[160px] relative">
        <div className="w-full max-w-[1200px] mx-auto">
        <div className="text-center mb-16 font-['Roboto']">
          <h1 className="text-[60px] font-bold text-[#4D3E77] leading-[1.1] tracking-normal mt-0 mb-0">
            
            <span className="bg-[#4D3E77] text-white px-2 py-1 rounded-md inline-block">
              Testimonials
            </span>{" "}
            
          </h1>
          
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-3 px-10">
            {/* Column 1 - Small, Large */}
            <div className="flex flex-col gap-3">
              <TestimonialCard testimonial={testimonials[0]} />
              <TestimonialCard testimonial={testimonials[1]} />
            </div>
    
            {/* Column 2 - Large, Small */}
            <div className="flex flex-col gap-3">
              <TestimonialCard testimonial={testimonials[3]} />
              <TestimonialCard testimonial={testimonials[2]} />
            </div>
    
            {/* Column 3 - Small, Large */}
            <div className="flex flex-col gap-3">
              <TestimonialCard testimonial={testimonials[4]} />
              <TestimonialCard testimonial={testimonials[5]} />
            </div>
          </div>
    
          {/* View All Button */}
          <div className="flex justify-center mt-10">
          <button className="mt-10 sm:mt-5 bg-purple-300 text-purple-900 font-semibold px-6 py-3 rounded-lg transform transition-all duration-300 hover:scale-105 hover:brightness-110">
          View all
        </button>
          </div>
        </div>
      </section>
    );
  }
    const TestimonialCard = ({ testimonial }) => {
      return (
        <div
          style={{ backgroundColor: testimonial.bgColor, borderColor: testimonial.borderColor+"80" }}
          className="relative p-6 rounded-[20px] border shadow-lg w-full max-w-[400px] mx-auto md:mx-0"
        >
          {/* Quote Icon */}
          <FaQuoteLeft 
            className="absolute top-4 left-4 text-xl md:text-2xl" 
            style={{ color: testimonial.borderColor }} 
          />
    
          {/* Text Content */}
          <div className="h-full flex items-center justify-center text-base md:text-medium lg:text-lg sm:text-sm font-medium font-['Roboto'] pb-16 pt-5 px-3 text-left"
            style={{ color: testimonial.borderColor }}
          >
            "{testimonial.text}"
          </div>
    
          {/* Author */}
          <div className="absolute bottom-7 left-14 md:left-14 text-sm md:text-lg font-bold font-['Roboto'] "
            style={{ color: testimonial.borderColor }}
          >
            {testimonial.author}
          </div>
    
          {/* Country Icon */}
          <img 
            className="w-[35px] md:w-[35px] h-[35px] md:h-[35px] absolute bottom-6 left-4 rounded-full" 
            src={testimonial.country} 
            alt="country" 
          />
    
          {/* Placeholder Image */}
          <img 
            className="w-[35px] md:w-[35px] h-[35px] md:h-[35px] absolute top-4 right-4" 
            src="https://placehold.co/41x49" 
            alt="Placeholder" 
          />
        </div>
      );
    };
      