import React, { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";

const AboutUs = () => {
    const [showFullText1, setShowFullText1] = useState(false);
    const [showFullText2, setShowFullText2] = useState(false);
    const [showFullText3, setShowFullText3] = useState(false);
    
    const features = [
        "Quality education focused on better understanding",
        "Vast resources of Digital Library & E-Books",
        "One-on-one extra attention to enhance the students abilities",
    ];
    
    return (
        <section>
            <section className="w-full flex flex-col lg:flex-row items-center justify-between py-12">
                <div className="w-full lg:w-1/2 text-center lg:text-left px-6 md:px-16">
                    <h1 className="text-[50px] font-bold text-[#4D3E77] leading-[1.1] tracking-normal">
                        Our {" "} <span className="bg-[#4D3E77] text-white px-2 py-1 rounded-md inline-block">Roots </span>: 
                    </h1>
                    <h3 className="text-[30px] font-bold text-[#4D3E77] leading-[1.1] tracking-normal pt-5">
                        How a Vision for Better Learning Transformed into a Global Academic Movement 
                    </h3>

                    <div className="mt-5">
                        <p className="lg:text-[23px] text-[#4d3e78] leading-[1.3] font-normal max-w-[40rem] mx-auto">
                            {showFullText1 ? (
                                <>
                                    Roots Academy was founded in 2015 with a mission to create more than just an academic support service—we envisioned a space where students feel understood, empowered, and capable of excelling. It began with just a few passionate educators and a small group of students looking for a better way to learn. 
                                    Fast forward to 2025, and Roots Academy has supported over 1,000 learners across the globe. Our students span continents and cultures but are united by one goal: academic success in globally recognized programs like Cambridge IGCSE, CAIE O-Level, and A-Level. We've helped them achieve thousands of A and A grades*, earn distinctions, and secure admissions to top universities. These aren't just statistics—they are proof of our personalized academic approach.
                                    What sets Roots Academy apart is our refusal to be just another online tuition provider. While our academic support covers key subjects across IGCSE, O-Level, and A-Level curricula, we blend it with mentorship, resilience training, and future-focused learning strategies. Our students don't just prepare for exams—they grow as independent, confident thinkers.
                                    Our name, "Roots," stands for strength, depth, and growth. We believe that strong roots—built on consistent support, understanding, and innovation—help learners thrive in every challenge they face.
                                    Over the years, we've redefined what online tuition can look like. Instead of rigid structures, we offer flexible, student-centered learning experiences. While the term "tuition" appears in what we offer, what we truly provide is a guided journey through knowledge, skills, and self-belief.
                                </>
                            ) : (
                                <>
                                    Roots Academy was founded in 2015 with a mission to create more than just an academic support service—we envisioned a space where students feel understood, empowered, and capable of excelling. It began with just a few passionate educators and a small group of students looking for a better way to learn.Instead of relying on traditional tuition methods, our focus was to make learning personal, meaningful, and results-driven.
                                    The journey wasn't fueled by advertisements or gimmicks—it was powered by student outcomes, word-of-mouth referrals, and a growing reputation for academic excellence. In those early days, we were known for our deep commitment to students, personalized feedback, and flexible learning support. These foundations became the roots of our success...
                                </>
                            )}
                        </p>
                        <button 
                            onClick={() => setShowFullText1(!showFullText1)}
                            className="mt-4 px-4 py-2 bg-[#4D3E77] text-white rounded-md hover:bg-[#3b2e5a] transition duration-300"
                        >
                            {showFullText1 ? 'See Less' : 'See More'}
                        </button>
                    </div>
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
                    <h1 className="text-[50px] font-bold text-[#4D3E77] leading-[1.1] tracking-normal">
                    Growing 
                    <span className="bg-[#4D3E77] text-white px-2 py-1 rounded-md inline-block mx-1">
                       Forward 
                       </span>
                    : 
                    </h1>
                    <h3 className="text-[30px] font-bold text-[#4D3E77] leading-[1.1] tracking-normal pt-5">
                    Innovation, Technology & A Team that Cares                    </h3>
                    <div className="mt-5">
                        <p className="lg:text-[23px] text-[#4d3e78] leading-[1.3] font-normal max-w-[40rem] mx-auto">
                            {showFullText2 ? (
                                <>
                                  At Roots Academy, we believe that the future of education lies in the perfect blend of technology, empathy, and expertise. What began with a few individuals in 2015 has now blossomed into a team of over 30 highly driven professionals, including subject specialists, academic coordinators, tech experts, and student success advisors. Together, we are dedicated to shaping the future of IGCSE, O-Level, and A-Level learners through modern, effective, and caring academic support.
                                  While many associate “tuition” with a traditional setup, our model embraces the digital transformation of education. We’ve built a system where students benefit from intelligent tracking tools, interactive virtual classrooms, and customized feedback loops. Every student receives attention tailored to their pace, learning style, and academic goals.
                                  Technology is at the heart of what we do—but it’s always balanced with a human-first approach. Our teachers are more than instructors; they are mentors who listen, encourage, and guide students with compassion. Whether a student is struggling with IGCSE Physics or needs strategy support for A-Level Business, our team creates a structured yet flexible path toward academic improvement.
                                  Our consistent results over the years are not by chance—they are the outcome of intentional planning, academic integrity, and a growth mindset culture that values innovation. We don’t just prepare students for exams—we prepare them for the future. We’re constantly exploring smarter ways to teach and new ways to engage. From real-time doubt-clearing to interactive concept reviews, our platform offers everything a student needs to thrive in today’s academic landscape.
                                  The term “tuition” still exists in what we do—for search engines and students who are looking for structured academic help. But Roots Academy is so much more than that. We are a growing global ecosystem of learners and educators, working together to build success stories that stretch beyond grades and report cards.
                                  In every student’s journey, there’s a moment when things click. When confidence grows. When challenges begin to feel manageable. Roots Academy is where those moments happen—powered by innovation, guided by experts, and built on trust.

                                </>
                            ) : (
                                <>At Roots Academy, we believe that the future of education lies in the perfect blend of technology, empathy, and expertise. What began with a few individuals in 2015 has now blossomed into a team of over 30 highly driven professionals, including subject specialists, academic coordinators, tech experts, and student success advisors. Together, we are dedicated to shaping the future of IGCSE, O-Level, and A-Level learners through modern, effective, and caring academic support...
                                </>
                            )}
                        </p>
                        <button 
                            onClick={() => setShowFullText2(!showFullText2)}
                            className="mt-4 px-4 py-2 bg-[#4D3E77] text-white rounded-md hover:bg-[#3b2e5a] transition duration-300"
                        >
                            {showFullText2 ? 'See Less' : 'See More'}
                        </button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center px-6 md:px-16">
                    <div className="px-6 md:px-16 py-10">
                        <ul className="space-y-4 mb-6">
                            {features.map((text, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="text-white px-2 rounded-full">
                                        <FaCheckCircle color='#4D3E77' size='30px'/>
                                    </div>
                                    <span className="text-lg text-[#4d3e78] font-['Roboto'] max-w-[40rem]">{text}</span>
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
                        Our <span className="bg-[#4D3E77] text-white px-2 py-1 rounded-md inline-block">Story</span> 
                    </h1>
                    <div className="mt-5">
                        <p className="lg:text-[23px] text-[#4d3e78] leading-[1.3] font-normal max-w-[40rem] mx-auto">
                            {showFullText3 ? (
                                <>
                                    Online Tuitions was created by a dedicated group of teachers for achieving excellence in educational standards by making lectures more easy, interactive and accessible for everyone around the world.

                                    Each student at Online Tuitions has a personal, customized path that is specifically built for their goals, skill level and pace. Regardless of where they are located around the world, our students receive quality education from qualified teachers.
                                </>
                            ) : (
                                <>
                                    Online Tuitions was created by a dedicated group of teachers for achieving excellence in educational standards by making lectures more easy, interactive and accessible for everyone around the world...
                                </>
                            )}
                        </p>
                        <button 
                            onClick={() => setShowFullText3(!showFullText3)}
                            className="mt-4 px-4 py-2 bg-[#4D3E77] text-white rounded-md hover:bg-[#3b2e5a] transition duration-300"
                        >
                            {showFullText3 ? 'See Less' : 'See More'}
                        </button>
                    </div>
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