// components/TeacherCard.jsx
import React from "react";
import Hassan from "../assets/images/PIC Without Background/PIC Without Background/Hassan Tariq.png"
import Hamza from "../assets/images/PIC Without Background/PIC Without Background/Hamza Tariq.png"
import Hamna from "../assets/images/PIC Without Background/PIC Without Background/femaleAvatar.png"
import Bilal from "../assets/images/PIC Without Background/PIC Without Background/Bilal.png"
import Danish from "../assets/images/PIC Without Background/PIC Without Background/maleAvatar.png"
import Khizer from "../assets/images/PIC Without Background/PIC Without Background/Khizer.png"
import Zayyan from "../assets/images/PIC Without Background/PIC Without Background/Zayyan.png"
import Sami from "../assets/images/PIC Without Background/PIC Without Background/Sami Dan Wala.png"
import BilalAli from "../assets/images/PIC Without Background/PIC Without Background/Bilal Ali.png"
import BilalTaha from "../assets/images/PIC Without Background/PIC Without Background/Bilal Taha.png"
import Mubashir from "../assets/images/PIC Without Background/PIC Without Background/Mubasshir.png"
import Mudassir from "../assets/images/PIC Without Background/PIC Without Background/Mudassir.png"
import Umar from "../assets/images/PIC Without Background/PIC Without Background/Uamr-removebg-preview.png"
import HamzaAli from "../assets/images/PIC Without Background/PIC Without Background/Hamza Ali.png"
import AbdullahG from "../assets/images/PIC Without Background/PIC Without Background/Abdullah Graphix.png"
import AbdullahM from "../assets/images/PIC Without Background/PIC Without Background/Abdullah Moderatr.png"
import female from "../assets/images/PIC Without Background/PIC Without Background/femaleAvatar.png"
import male from "../assets/images/PIC Without Background/PIC Without Background/maleAvatar.png"











const teachers = [
  {
    name: "Hassan",
    description: "Mathematics & Physics teacher with over 8 years of experience, dedicated to helping students master complex concepts and problem-solving.",
    image: Hassan,
  },
  {
    name: "Hamza",
    description: "Chemistry educator with 8+ years of experience, committed to building a strong foundation in chemical principles and lab skills.",
    image: Hamza,
  },
  {
    name: "Hamna Hassan",
    description: "Biology instructor with 3+ years of experience, passionate about helping students understand biological processes and life science concepts.",
    image: Hamna,
  },
  {
    name: "Bilal",
    description: "Mathematics teacher with 3+ years of experience, focused on explaining mathematical theories and problem-solving techniques to students.",
    image: Bilal,
  },
  {
    name: "Danish Siddiqui",
    description: "Biology educator with 3+ years of experience, specializing in explaining biological phenomena and fostering deep comprehension of life sciences.",
    image: Danish,
  },
  {
    name: "Khizer",
    description: "Computer Science instructor with 2+ years of experience, passionate about teaching coding, algorithms, and software development techniques.",
    image: Khizer,
  },
  {
    name: "Zayyan",
    description: "Computer Science teacher with 4+ years of experience, focused on teaching programming languages, data structures, and tech development.",
    image: Zayyan,
  },
  {
    name: "Sami Dana Wala",
    description: "Accounting teacher with 2+ years of experience, dedicated to teaching accounting principles, financial statements, and business management.",
    image: Sami,
  },
];

const team = [
  {
    name: "Umar",
    description: "Head of Student Excellence - Orchestrates transformative educational experiences, championing academic brilliance, igniting innovation, collaborating with educators to cultivate unparalleled student success and excellence.",
    image: Umar
  },
  {
    name: "Mubashir",
    description: "Lead Examiner - Ensures assessment integrity, elevating academic standards, guiding examination strategy, and championing fair evaluation for student success.",
    image: Mubashir
  },
  {
    name: "Uswa Anwer",
    description: "Junior Examiner - Supports assessment processes, analyzing data, crafting evaluations, and ensuring accuracy and fairness in student assessments.",
    image: female
  },
  {
    name: "Hamza Ali",
    description: "Junior Software Developer - Crafts code, collaborates on innovative solutions, debugs intricacies, and accelerates product evolution with precision.",
    image: HamzaAli
  },
  {
    name: "Saman Nasir",
    description: "Student Counsellor - Nurtures emotional wellbeing, provides tailored guidance, fosters resilience, and empowers students to navigate challenges confidently.",
    image: female,
  },
  {
    name: "Mudassir",
    description: "Learning Support Assistant - Facilitates individualized learning, offers targeted resources, assists educators, and champions educational experiences for every student.",
    image: Mudassir,
  },
  {
    name: "Zayyan ud Din",
    description: "Lead Software Developer - Architects scalable systems, mentors developers, spearheads innovation, and drives technological excellence across projects.",
    image: Zayyan,
  },
  {
    name: "Abdullah",
    description: "Moderator - Facilitates dynamic engaging discussions, orchestrates seamless communication, fosters community connection, and amplifies diverse voices for impactful dialogue.",
    image: AbdullahM,
  },
  {
    name: "Bilal Taha",
    description: "App Developer - Crafts intuitive applications at Roots Academy, delivering seamless user experiences and robust functionality for students.",
    image: BilalTaha,
  },
  {
    name: "Bilal Ali",
    description: "App Developer - Pioneers innovative solutions at Roots Academy, blending cutting-edge features with elegant design to enhance student engagement.",
    image: BilalAli
  },
  {
    name: "Wasay",
    description: "Website Developer - Engineers dynamic website at Roots Academy, integrating responsive design, seamless navigation, interactive elements for optimal access.",
    image: male
  },
  {
    name: "Muaz Arif",
    description: "Website Developer - Develops robust scalable web solutions at Roots Academy, crafting responsive interfaces, enhancing usability, driving student engagement.",
    image: male,
  },
  {
    name: "Abdullah",
    description: "Graphic Designer - Crafts compelling visuals and brand assets for Roots Academy, translating educational excellence into engaging, authentic, memorable designs.",
    image: AbdullahG,
  },
];

const TeachersNTeam = () => (
  <section className="py-12 px-4 max-w-7xl mx-auto">
    <div className="text-center mb-10">
      <h1 className="text-[45px] font-bold text-[#4D3E77] leading-[1.1] tracking-normal lg:pt-40">
        Meet Our Teachers
      </h1>      
      <p className="lg:text-[23px] text-[#4d3e78] leading-[1.3] font-normal max-w-[40rem] mx-auto mt-5">
        We are proud to have skilled and qualified team of subject specialists with us:
      </p>
    </div>

    <div className="grid gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
      {teachers.map((teacher, index) => (
        <TeacherCard key={index} {...teacher} />
      ))}
    </div>

    <div className="text-center mt-10"> 
      <h1 className="text-[45px] font-bold text-[#4D3E77] leading-[1.1] tracking-normal lg:pt-40">
        Meet Our Team
      </h1>      
      <p className="lg:text-[23px] text-[#4d3e78] leading-[1.3] font-normal max-w-[40rem] mx-auto mt-5">
        We have experienced and qualified team members with us who look after for the effective and efficient working of our operations.
      </p>
    </div>

    <div className="grid gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center pt-10">
      {team.map((member, index) => (
        <TeacherCard key={index} {...member} />
      ))}
    </div>
  </section>
);

export default TeachersNTeam;

const TeacherCard = ({ name, description, image, bgColor = "bg-white" }) => (
  <div className="relative lg:w-64 lg:h-[370px] max-w-xs rounded-[20px] overflow-hidden shadow-md group transition-all duration-300 cursor-pointer">
    
    {/* Image and Name (Always visible) */}
    <div className="flex flex-col items-center text-center gap-1 max-w-xs">
      <div className="lg:w-45 lg:h-45">
        <img src={image} alt={name} />
      </div>
    </div>

    {/* Bottom Card: shows name initially, expands on hover */}
    <div
      className={`rounded-[10px] bg-[#FDF9F6] absolute bottom-0 left-0 w-full px-4 overflow-hidden text-[#4d3e78] text-center transition-all duration-500 h-[60px] group-hover:h-[200px]`}
    >
      <div className="flex flex-col justify-center items-center gap-1 py-3">
        <h3 className="lg:text-[30px] text-[#4d3e78] font-bold mx-auto">{name}</h3>      
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-sm mt-1">{description}</p>
        </div>
      </div>
    </div>
  </div>
);