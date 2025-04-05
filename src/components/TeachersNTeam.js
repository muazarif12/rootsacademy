// components/TeacherCard.jsx
import React from "react";



const teachers = [
  {
    name: "Hassan",
    subject: "Mathematics & Physics",
    university: "NUST",
    experience: "Teaching Experience 7+ Years",
    image: "https://online-tuitions.com/wp-content/uploads/2025/01/hassan-241x300.png",
  },
  {
    name: "Hamza",
    subject: "Chemistry",
    university: "NED, IBA",
    experience: "Teaching Experience 7+ Years",
    image: "https://online-tuitions.com/wp-content/uploads/2025/01/hamza-241x300.png",
  },
  {
    name: "Hamna Hassan",
    subject: "Biology",
    university: "JMSU",
    experience: "Teaching Experience 3+ Years",
    image: "https://online-tuitions.com/wp-content/uploads/2023/06/teacher_06-241x300.png",
  },
  {
    name: "Bilal",
    subject: "Mathematics",
    university: "NED",
    experience: "Teaching Experience 2+ Years",
    image: "https://online-tuitions.com/wp-content/uploads/2025/01/bilal-241x300.png",
  },
  {
    name: "Danish Siddiqui",
    subject: "Biology",
    university: "NUST",
    experience: "Teaching Experience 3+ Years",
    image: "https://online-tuitions.com/wp-content/uploads/2023/06/teacher_08-241x300.png",
    



  },
  {
    name: "Khizer",
    subject: "Subject",
    university: "IBA",
    experience: "Teaching Experience 2+ Years",
    image: "https://online-tuitions.com/wp-content/uploads/2025/01/khizer-241x300.png",
    

  },
  {
    name: "Zayyan",
    subject: "Computer Science",
    university: "FAST",
    experience: "Teaching Experience 3+ Years",
    image: "https://online-tuitions.com/wp-content/uploads/2025/01/zayyan-241x300.png",
    


  },
  {
    name: "Sami Dana Wala",
    subject: "Accounting",
    university: "IBA",
    experience: "Teaching Experience 2+ Years",
    image: "https://online-tuitions.com/wp-content/uploads/2025/01/sami-241x300.png",
    




  },
];
const team = [
    {
      name: "Umar",
      subject: "Head of Student Excellence",
      university: "IBA",
      image: "https://online-tuitions.com/wp-content/uploads/2025/01/umar-241x300.png",
    },
    {
      name: "Mubashir",
      subject: "Lead Examiner",
      university: "NED",
      image: "https://online-tuitions.com/wp-content/uploads/2025/01/mubasshir-241x300.png",
    },
    {
      name: "Uswa Anwer",
      subject: "Junior Examiner",
      university: "IBA",
      image: "https://online-tuitions.com/wp-content/uploads/2024/11/teacher_6543-241x300.png",
    },
    {
      name: "Muneeb Khan",
      subject: "Junior Software Developer",
      university: "FAST",
      image: "https://online-tuitions.com/wp-content/uploads/2025/01/muneeb-241x300.png",
    },
    {
      name: "Saman Nasir",
      subject: "Student Counsellor",
      university: "IBA",
      image: "https://online-tuitions.com/wp-content/uploads/2024/11/teacher_6542-241x300.png",
    },
    {
      name: "Mudassir",
      subject: "Learning Support Assistant",
      university: "NED",
      image: "https://online-tuitions.com/wp-content/uploads/2025/01/mudassir-241x300.png",
    },
    {
      name: "Zayyan ud Din",
      subject: "Lead Software Developer",
      university: "FAST",
      image: "https://online-tuitions.com/wp-content/uploads/2025/01/zayyan-241x300.png",
    },
    {
      name: "Abdullah",
      subject: "Co-Host",
      university: "SSUET",
      image: "https://online-tuitions.com/wp-content/uploads/2025/01/hammad-241x300.png",
    },
  ];
  

const TeachersNTeam = () => (
  <section className="py-12  px-4 max-w-7xl mx-auto">
    <div className="text-center mb-10">
    <h1 className="text-[45px] font-bold text-[#4D3E77] leading-[1.1] tracking-normal lg:pt-40">
      
      Meet Our Teachers
          </h1>      
          <p className="lg:text-[23px]  text-[#4d3e78] leading-[1.3] font-normal max-w-[40rem] mx-auto mt-5">
      We are proud to have skilled and qualified team of subject specialists with us:
      </p>
    </div>

    <div className="grid gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
      {teachers.map((teacher, index) => (
        <TeacherCard key={index} {...teacher} />
      ))}
    </div>

      <section //Team section >
      ></section>

    <div className="text-center mt-10"> 
    <h1 className="text-[45px] font-bold text-[#4D3E77] leading-[1.1] tracking-normal lg:pt-40">
      
      Meet Our Team
          </h1>      
          <p className="lg:text-[23px]  text-[#4d3e78] leading-[1.3] font-normal max-w-[40rem] mx-auto mt-5">
          We have experienced and qualified team members with us who look after for the effective and efficient working of our operations.

</p>
    </div>

    <div className="grid gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center pt-10">
      {team.map((teacher, index) => (
        <TeacherCard key={index} {...teacher} />
      ))}
    </div>
  </section>
);

export default TeachersNTeam;


const TeacherCard = ({ name, subject, university, experience, image }) => (
    <div className="flex flex-col items-center text-center gap-1 max-w-xs">
      <div className="lg:w-45 lg:h-45  ">
        <img src={image} alt={name} />
      </div>
      <h3 className="lg:text-[30px]  text-[#4d3e78]  font-bold  mx-auto ">{name}</h3>
      <p className="text-medium text-[#4d3e78]  ">{subject}</p>
      <p className="text-medium text-[#4d3e78] ">{university}</p>
      <p className="text-medium text-[#4d3e78]  font-semibold">{experience}</p>
    </div>
  );
  


  







