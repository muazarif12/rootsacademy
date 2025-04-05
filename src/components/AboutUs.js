import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
const AboutUs = () => {
    const features = [
        "Quality education focused on better understanding",
        "Vast resources of Digital Library & E-Books",
        "One-on-one extra attention to enhance the students abilities",
      ];
  return (
    <section>
    <section className="w-full flex flex-col lg:flex-row items-center justify-between py-12">
      <div className="w-full lg:w-1/2 text-center lg:text-left px-6 md:px-16">
      <h1 className="text-[45px] font-bold text-[#4D3E77] leading-[1.1] tracking-normal">
      Learning
      Without  <span className="bg-[#4D3E77] text-white px-2 py-1 rounded-md inline-block">Walls</span> 
          </h1>
          <p className="lg:text-[23px] text-[#4d3e78] leading-[1.3] font-normal max-w-[40rem] mx-auto mt-5">
          As the leading student-first connected learning platform, our mission is to help every student achieve their goals, and ace their exams and beyond.          </p>
      </div>
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center px-6 md:px-16">
        <img
          src="https://online-tuitions.com/wp-content/uploads/2023/06/about_03.png"
          alt="Learning platform illustration"
          className="w-full h-auto"
        />
      </div>
      
    </section>
    <section className="w-full flex flex-col lg:flex-row items-center justify-between pt-20">
      <div className="w-full lg:w-1/2 text-center lg:text-left px-6 md:px-16">
      <h1 className="text-[45px] font-bold text-[#4D3E77] leading-[1.1] tracking-normal">
        Educate ,
        <span className="bg-[#4D3E77] text-white px-2 py-1 rounded-md inline-block  mx-1"> Empower </span>
        , Transform 
          </h1>
          <p className="lg:text-[23px] text-[#4d3e78] leading-[1.3] font-normal max-w-[40rem] mx-auto mt-5">
          Online Tuitions was created by a dedicated group of teachers for achieving excellence in educational 
          standards by making lectures more easy, interactive and accessible for everyone around the world.

            Each student at Online Tuitions has a personal, customized path that is specifically built 
            for their goals, skill level and pace. Regardless of where they are located around the world,
             our students receive quality education from qualified teachers.

            Our content provides engaging and interesting learning opportunities, guiding candidates to identify their strengths and fill in their learning gaps. When you participate in our Online Educational Lectures, you’re joining a global community of like-minded individuals looking to expand their understanding                 
            </p>
      </div>
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center px-6 md:px-16">
      <div className="px-6 md:px-16 py-10">
      <ul className="space-y-4 mb-6">
        {features.map((text, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className=" text-white px-2 rounded-full">
            <FaCheckCircle color='#4D3E77' size='30px'/>
            </div>
            <span className="text-lg text-[#4d3e78]  font-['Roboto'] max-w-[40rem] ">{text}</span>
          </li>
        ))}
      </ul>

      <button 
        className="w-full text-white text-xl font-semibold p-4 mt-5 rounded-[10px] bg-[#4D3E78] transition duration-300 hover:bg-[#3b2e5a] hover:scale-105"
        >        
        Let's Connect
      </button>
    </div>
      </div>
      
    </section>
    <section className="w-full flex flex-col lg:flex-row items-center justify-between pt-40">
      <div className="w-full lg:w-1/2 text-center lg:text-left px-6 md:px-16">
      <h1 className="text-[45px] font-bold text-[#4D3E77] leading-[1.1] tracking-normal">
      
      Our  <span className="bg-[#4D3E77] text-white px-2 py-1 rounded-md inline-block">Story</span> 
          </h1>
          <p className="lg:text-[23px]  text-[#4d3e78] leading-[1.3] font-normal max-w-[40rem] mx-auto mt-5">
          Online Tuitions was created by a dedicated group of teachers for achieving excellence in educational standards by making lectures more easy, interactive and accessible for everyone around the world.

Each student at Online Tuitions has a personal, customized path that is specifically built for their goals, skill level and pace. Regardless of where they are located around the world, our students receive quality education from qualified teachers.                    </p>
      </div>
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center px-6 md:px-16">
        <img
          src="https://online-tuitions.com/wp-content/uploads/2023/06/about_02.png"
          alt=""
          className="w-full h-auto"
        />
      </div>
      
    </section>
    </section>
  );
};







export default AboutUs;




