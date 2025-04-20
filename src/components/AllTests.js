

import { FaQuoteLeft } from "react-icons/fa"; // Quote icon
import pakistanFlag from "../assets/images/pakistaniFlag.jpeg"
import saudiFlag from "../assets/images/saudiflag.png";
import "@fontsource/roboto"; // Default weight (400)
import "@fontsource/roboto/700.css"; // Bold





export default function Testimonials() {
    const testimonials = [
        {
            text: "Sir Hassan makes Physics more approachable by explaining concepts in a clear and simple way. The support provided is always helpful, ensuring a better understanding of the subject. Rather than just focusing on theory, he ensures that practical applications and real-world examples are incorporated into lessons, making the subject more relatable and interesting. His patience and dedication to each student’s learning journey is truly commendable, and I am grateful for his guidance.",
            author: "Tahreem Awan - Physics, Chemistry A* - AS Level - PISJES",
            bgColor: "#fff7d6",
            borderColor: "#6F541D",
            country: saudiFlag,
        },
        
        {
            text: "I am incredibly grateful for the guidance and support provided by Sir Hassan. Beyond his profound knowledge and passion for the subject, what truly sets him apart is his genuine dedication to each student’s growth. He takes the time to ensure that difficult topics are broken down in an easily understandable manner, and his ability to engage students through interactive lessons has made a significant impact on my learning. Thanks to him, I have developed a deep appreciation for Physics and Chemistry, and I cannot thank him enough for his efforts.",
            author: "Maryam Tahir – Physics A  Chemistry A - AS level  - PISJES",
            bgColor: "#f7d6ff",
            borderColor: "#541D6F",
            country: saudiFlag,
        },
        {
            text: "He's a very good teacher, very satisfied. Very knowledgeable and good at teaching. Very happy to study from him. A good experience and would recommend.",
            author: "Midha Khalid - Chemistry A* - IGCSE – PISJES",
            bgColor: "#d6f7ff",
            borderColor: "#1D546F",
            country: saudiFlag,
        },
        {
            text: "Sir Hamza is an inspiring and dedicated educator who makes learning engaging, supports students with patience, and has had a lasting impact on my academic journey. His way of explaining concepts is truly exceptional, making difficult topics much easier to grasp. His passion for teaching and commitment to his students' success make him one of the best teachers I have ever had. I am truly grateful for his guidance and support throughout my studies.",
            author: "Khair ul Wara – Physics Chemistry Mathematics A - AS level  - PISJES",
            bgColor: "#d6fff7",
            borderColor: "#1D6F54",
            country: saudiFlag,
        },
        {
            text: "Sir Hassan is a highly skilled and dedicated physics tutor whose teaching methods make complex concepts accessible and engaging. His ability to simplify challenging topics, such as electromagnetism and quantum mechanics, allows students to develop a deeper understanding of the subject. He not only ensures conceptual clarity but also provides valuable exam tips and problem-solving strategies. His efforts and dedication have played a crucial role in my academic success, and I highly recommend him to any student looking to excel in Physics.",
            author: "Ibrahim Imran – Physics A* Chemistry Mathematics A - IGCSE - PISJES",
            bgColor: "#ffd6d6",
            borderColor: "#6F1D1D",
            country: saudiFlag,
        },
        {
            text: "Sir Hamza is a great and dedicated teacher. The way he explains things and his softness; I never saw this element in any other teacher ever. His patience and willingness to go the extra mile to ensure that his students understand the subject make him an outstanding mentor. Would love to meet him once in my life when I would visit Karachi!", 
            author: "Faiz Qureshi - Physics A – AS Level – Roots Millenium Pakistan",
            bgColor: "#f7f0d6",
            borderColor: "#6F541D",
            country: pakistanFlag,
        },
        {
            text: "Sir Hassan is overall a great teacher, his explanation for physics is phenomenal which is something not commonly seen for physics teachers! The notes are super helpful and can make the topic a lot easier. His teaching style allows for better retention of knowledge, and his willingness to assist students outside of class hours shows his dedication to their success. I truly appreciate his effort and guidance in my academic journey.",
            author: "Ayesha Ijaz - Physics A* Comp Science A - IGCSE – PISJES",
            bgColor: "#d6d6ff",
            borderColor: "#1D1D6F",
            country: saudiFlag,
        },
        {
            text: "Sir Hassan teaches with great dedication and effort. He is very concerned about his students and is always ready to help them in any way possible. His passion for mathematics is very evident in his style of teaching and it helps his students strive towards their goal. His enthusiasm and ability to explain concepts in a simple and effective manner have greatly improved my understanding of the subject. I truly appreciate his guidance and support.",
            author: "Esha Kamil – AS Level PISJES",
            bgColor: "#d6fff7",
            borderColor: "#1D6F54",
            country: saudiFlag,
        },
        {
            text: "I appreciate the effort and dedication you put into teaching. Your lessons are always well-structured and clear, making complex topics easier to understand. You have a great ability to engage the class and create an environment where students feel comfortable asking questions. Your guidance has been invaluable in my academic journey, and I truly admire the passion you bring to teaching.",
            author: "Rayan Akbar Qureshi - A2 Level - PISJES",
            bgColor: "#fff7d6",
            borderColor: "#6F541D",
            country: saudiFlag,
        },
        {
            text: "Sir Zayyan has helped me improve greatly in Computer Science. Thanks to his classes, I've managed to get high marks in school tests and exams. He also helped me clear concepts which I had trouble with. His patience and in-depth knowledge of the subject have made a significant impact on my learning experience. I truly appreciate all the effort he puts into teaching.",
            author: "Malik Abdul Moiz AS Level - Private",
            bgColor: "#d6ffd6",
            borderColor: "#1D6F1D",
            country: pakistanFlag,
        }
    ];
    

    return (
      <section className="bg-[#fdf9f6] py-20 pt-[140px] pb-[160px] relative">
        <div className="w-full max-w-[1200px] mx-auto">
        <div className="text-center mb-10 font-['Roboto'] px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#4D3E77] leading-tight tracking-normal mt-0 mb-0">
                <span className="bg-[#4D3E77] text-white px-3 py-2 rounded-md inline-block">
                Testimonials
                </span>
            </h1>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 px-10 space-y-4">
  {testimonials.map((testimonial, index) => (
    <div key={index} className="break-inside-avoid">
      <TestimonialCard testimonial={testimonial} />
    </div>
  ))}
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
            {testimonial.text}
          </div>
    
          {/* Author & Country Container */}
          <div className="absolute bottom-2 left-2 flex items-center gap-2 px-3 py-2">
            {/* Country Icon */}
            <img 
              className="w-[30px] h-[30px] rounded-full" 
              src={testimonial.country} 
              alt="country" 
            />

            {/* Author */}
            <span className="text-sm md:text-lg font-bold font-['Roboto']" style={{ color: testimonial.borderColor }}>
              {testimonial.author}
            </span>
          </div>

    
          {/* Placeholder Image */}
          <img 
            className="w-[35px] md:w-[35px] h-[35px] md:h-[35px] absolute top-4 right-4" 
            src="https://placehold.co/41x49" 
            alt="Placeholder" 
          />
        </div>
      );
    };
      