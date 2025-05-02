import React, { useState } from 'react';
import scoreA from "../assets/images/Blog Posts/How to Score A.png"
import ChooseA from "../assets/images/Blog Posts/Why Choose Online.png"
import Support from "../assets/images/Blog Posts/Teaching in Both.png"
import Top5 from "../assets/images/Blog Posts/Top 5 Reasons.png"
import UnlockPotential from "../assets/images/Blog Posts/Portal & App.png"
import IBCC from "../assets/images/Blog Posts/Expert IBCC.png"
import OvsA from "../assets/images/Blog Posts/Expert IBCC (2).png"


const BlogCard = ({ image, date, title, color, content, onClick }) => {
  // Color variants for card backgrounds
  

  return (
    <div 
      className="max-w-sm rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
      onClick={onClick}
    >
      {/* Image Container with colored background and overlay text */}
      <div className={`relative  '}`}>
        <img 
          className="w-full object-cover mix-blend-soft-light" 
          src={image} 
          alt={title} 
        />
        
        
      </div>
      
      {/* Date Content */}
      <div className="p-5 bg-white">
        <p className="text-gray-600 text-sm">{date}</p>
        
        {/* Full title (for mobile/accessibility) */}
        <h3 className="font-bold text-xl text-gray-800 mt-2">{title}</h3>
      </div>
    </div>
  );
};

// Blog Post Modal component
const BlogPostModal = ({ post, onClose }) => {
  if (!post) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-screen overflow-y-auto">
        {/* Full image at the top */}
        <div className="relative">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-auto object-cover"
          />
          <button 
            className="absolute top-4 right-4 bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <p className="text-gray-500 text-sm mb-2">{post.date}</p>
          <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
          <div className="prose max-w-none">
            {post.content}
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t flex justify-end">
          <button 
            className="px-4 py-2 bg-purple-300 rounded-lg hover:bg-purple-200"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};


// Demo component showing multiple blog cards in a grid
const BlogGrid = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  
  const blogPosts = [
    {
      id: 1,
      image: scoreA,
      date: "April 15, 2025",
      title: "How to Score A* in O-Level Maths – Expert Tips",
      color: "green",
      content: (
        <div>
          <p className="mb-4">O-Level Mathematics is a crucial stepping stone for many students, and achieving an A* can open doors to future academic success. However, the subject's complexity often poses a significant challenge. At Roots Academy, our experienced tutors have a proven track record of guiding students to excel in O-Level Maths. We've distilled their expertise into a set of actionable tips to help you achieve that coveted A*.</p>
          
          <h3 className="text-xl font-semibold mb-2">Master the Basics First</h3>
          <p className="mb-4">Before diving into advanced topics, ensure your foundational skills are rock solid. Strong basics in arithmetic, algebra, and geometry are non-negotiable. Many students struggle because they overlook these fundamentals. Roots Academy emphasizes building a robust base, ensuring you have the necessary tools to tackle complex problems.</p>
          
          <h3 className="text-xl font-semibold mb-2">Practice with Past Papers</h3>
          <p className="mb-4">Past papers are your best friend when preparing for O-Level Maths. Solving them under timed conditions simulates the actual exam environment. This practice helps you:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Understand the exam pattern</li>
            <li>Identify frequently asked question types</li>
            <li>Improve your speed and accuracy</li>
          </ul>
          <p className="mb-4">Roots Academy tutors stress the importance of consistent past paper practice to familiarize yourself with the Cambridge assessment style.</p>
          
          <h3 className="text-xl font-semibold mb-2">Learn Time Management</h3>
          <p className="mb-4">Time management is a critical skill often overlooked. Many students lose marks not because they lack knowledge, but because they run out of time. Roots Academy tutors provide strategies to effectively allocate time across different sections and questions. Learning to pace yourself is essential for maximizing your score.</p>
          
          <h3 className="text-xl font-semibold mb-2">Focus on Weak Areas</h3>
          <p className="mb-4">It's tempting to focus on your strengths, but neglecting your weaknesses is a recipe for disaster. Identify your problem areas and dedicate extra time to them. Don't hesitate to ask your Roots Academy tutor for additional support and resources. They can provide targeted guidance to help you overcome your challenges.</p>
          
          <h3 className="text-xl font-semibold mb-2">Weekly Quizzes and Mock Tests</h3>
          <p className="mb-4">Regular assessments are crucial for tracking your progress and building confidence. At Roots Academy, we conduct:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Weekly quizzes to reinforce concepts</li>
            <li>Full-length mock exams to simulate the exam environment</li>
          </ul>
          <p className="mb-4">These assessments help you identify areas for improvement and build the stamina needed for the actual exam.</p>
          
          <h3 className="text-xl font-semibold mb-2">Tips from High Achievers</h3>
          <p>Learning from those who have achieved A* grades can be incredibly motivating. Roots Academy frequently shares insights and techniques from our successful students. Their experiences provide valuable guidance and inspiration, showing you that achieving an A* is within reach.</p>
        </div>
      )
    },
    {
      id: 2,
      image: ChooseA,
      date: "April 5, 2025",
      title: "Why Choose Online A-Level Tuition in 2025",
      color: "purple",
      content: (
        <div>
          <p className="mb-4">A-Level exams are a pivotal milestone in a student's academic journey, shaping their future educational and career prospects. As we move into 2025, the landscape of education continues to evolve, with online learning becoming increasingly prevalent. Roots Academy has positioned itself as a leading provider of high-quality online A-Level tuition, offering Cambridge students in Pakistan a smart and effective way to achieve their academic goals.</p>
          
          <p className="mb-4">The traditional model of commuting to physical tuition centers is rapidly becoming outdated. Online A-Level tuition offers a dynamic, flexible, and accessible learning environment that caters to the needs of modern students. Roots Academy leverages cutting-edge technology and pedagogical expertise to deliver an unparalleled learning experience.</p>
          
          <h3 className="text-xl font-semibold mb-2">Learn from Anywhere</h3>
          <p className="mb-4">One of the most significant advantages of online A-Level tuition is the freedom to learn from anywhere. Say goodbye to the stress of long commutes and rigid schedules. With Roots Academy, you can access top-tier education from the comfort of your home, eliminating geographical barriers and maximizing your study time. This flexibility allows you to create a learning environment that suits your individual needs.</p>
          
          <h3 className="text-xl font-semibold mb-2">Access to Cambridge Experts</h3>
          <p className="mb-4">At Roots Academy, we understand the importance of expert guidance. Our tutors are not just subject matter experts; they are Cambridge-trained professionals who possess an in-depth understanding of the A-Level curriculum and examination requirements. This expertise ensures that you receive targeted instruction and valuable insights into what examiners look for, giving you a competitive edge.</p>
          
          <h3 className="text-xl font-semibold mb-2">Customized Learning Experience</h3>
          <p className="mb-4">We recognize that every student has unique learning needs and preferences. Roots Academy creates personalized study plans that cater to your specific academic level, goals, and preferred learning pace. This customized approach allows you to focus on areas where you need the most support, ensuring efficient and effective learning.</p>
          
          <h3 className="text-xl font-semibold mb-2">Advanced E-Learning Tools</h3>
          <p className="mb-4">Our online A-Level classes are powered by advanced e-learning tools that enhance the learning experience. From screen sharing and interactive whiteboards to recorded sessions and digital resources, we leverage technology to make complex A-Level topics easy to understand. These tools facilitate interactive learning, allowing for real-time engagement and effective knowledge retention.</p>
          
          <h3 className="text-xl font-semibold mb-2">Cost-Effective Learning</h3>
          <p>Online tuition often proves to be more cost-effective than traditional in-person coaching. With Roots Academy, you eliminate travel expenses, the need for printed notes, and scheduling conflicts. This cost-effective approach provides you with exceptional value without compromising on quality.</p>
        </div>
      )
    },
    {
      id: 3,
      image: Support,
      date: "March 20, 2025",
      title: "Supporting Urdu & English Speaking Students",
      color: "red",
      content: (
        <div>
          <p className="mb-4">The Cambridge curriculum, while globally recognized for its high standards, can present a unique challenge for students in Pakistan who are more comfortable with Urdu. Many students find it difficult to fully grasp complex concepts when delivered exclusively in English. Recognizing this gap, Roots Academy has developed a specialized bilingual approach to online tuition, catering to the specific needs of Urdu and English-speaking students in IGCSE, O-Level, and A-Level programs.</p>
          
          <p className="mb-4">We understand that language should not be a barrier to learning. Our bilingual approach ensures that students can fully comprehend and engage with the material, leading to improved understanding and performance.</p>
          
          <h3 className="text-xl font-semibold mb-2">Breaking the Language Barrier</h3>
          <p className="mb-4">Subjects like Physics, Biology, and Economics often involve intricate theories and terminologies. For many students, these concepts can be daunting when presented solely in English. Our bilingual tutors bridge this gap by explaining complex ideas in both English and Urdu. This dual-language approach enhances clarity, facilitates better understanding, and improves retention, ensuring that students fully grasp the material.</p>
          
          <h3 className="text-xl font-semibold mb-2">Higher Engagement in Class</h3>
          <p className="mb-4">When students are comfortable with the language of instruction, they are more likely to participate actively in class. This increased engagement translates to more questions, deeper discussions, and a more profound understanding of the subject matter. Roots Academy's bilingual environment fosters a supportive and interactive learning experience.</p>
          
          <h3 className="text-xl font-semibold mb-2">Culturally Aligned Teaching</h3>
          <p className="mb-4">We recognize the importance of cultural context in education. Our tutors are sensitive to the academic and cultural backgrounds of Pakistani students, tailoring their teaching style to be more relatable and effective. This cultural alignment enhances the learning experience and creates a supportive environment where students feel understood and valued.</p>
          
          <h3 className="text-xl font-semibold mb-2">Parent-Teacher Communication</h3>
          <p className="mb-4">Parental involvement is crucial for student success. Recognizing that many parents prefer to communicate in Urdu, Roots Academy facilitates seamless communication between parents and tutors in their preferred language. This ensures that parents are well-informed about their child's progress and can actively participate in their academic journey.</p>
          
          <h3 className="text-xl font-semibold mb-2">Consistent Exam Prep</h3>
          <p>While instruction is delivered in both Urdu and English, Roots Academy ensures that students are thoroughly prepared to answer exams in English, maintaining the integrity of the Cambridge standards. Our tutors provide targeted exam preparation, focusing on developing students' English language proficiency in an academic context.</p>
        </div>
      )
    },
    {
      id: 4,
      image: Top5,
      date: "March 10, 2025",
      title: "Top 5 Reasons for Online Cambridge Tuition",
      color: "blue",
      content: (
        <div>
          <p className="mb-4">The educational landscape in Pakistan is rapidly evolving, with online learning emerging as a preferred choice for students preparing for Cambridge exams. No longer just a supplementary option, online tuition is now a powerful and effective primary method of education. At Roots Academy, we've witnessed a significant surge in students opting for online learning each year.</p>
          
          <p className="mb-4">The traditional model of physical tuition centers is increasingly being replaced by the convenience and effectiveness of online education. Roots Academy is at the forefront of this transformation, providing students with access to high-quality, flexible, and personalized learning experiences.</p>
          
          <h3 className="text-xl font-semibold mb-2">1. Flexibility and Convenience</h3>
          <p className="mb-4">One of the most significant advantages of online tuition is the unparalleled flexibility and convenience it offers. Students can attend classes from the comfort of their homes, eliminating the need for time-consuming commutes to academies. This saves valuable study time and reduces stress, allowing students to focus on their academic goals. With Roots Academy, students can create a learning schedule that fits seamlessly into their busy lives.</p>
          
          <h3 className="text-xl font-semibold mb-2">2. Expert Tutors at Your Fingertips</h3>
          <p className="mb-4">Online platforms like Roots Academy provide access to a vast pool of highly qualified tutors who specialize in IGCSE, O-Level, and A-Level subjects. With just a few clicks, students can connect with experienced educators who possess in-depth knowledge of the Cambridge curriculum. This accessibility to expert guidance ensures that students receive top-tier instruction, regardless of their location.</p>
          
          <h3 className="text-xl font-semibold mb-2">3. Personalized Attention</h3>
          <p className="mb-4">Personalized learning is a cornerstone of effective education. Roots Academy's one-on-one online sessions allow tutors to focus entirely on the student's individual needs and weak areas. This tailored approach ensures that students receive targeted support, leading to improved understanding and enhanced performance. By addressing specific challenges, students can build confidence and achieve their academic goals.</p>
          
          <h3 className="text-xl font-semibold mb-2">4. Bilingual Teaching Support</h3>
          <p className="mb-4">Recognizing the importance of linguistic comfort, Roots Academy offers bilingual tutors who can teach in both English and Urdu. This approach makes complex subjects easier to grasp, particularly for students who are more comfortable with their native language. By bridging the language gap, we ensure that students fully comprehend the material, leading to better academic outcomes.</p>
          
          <h3 className="text-xl font-semibold mb-2">5. Better Academic Results</h3>
          <p>The proof is in the results. Roots Academy's success stories speak volumes about the effectiveness of our online tuition. Students consistently demonstrate improved grades, increased confidence, and enhanced motivation to excel. Our comprehensive approach, expert tutors, and personalized support empower students to achieve their full potential.</p>
        </div>
      )
    },
    {
      id: 5,
      image: UnlockPotential,
      date: "February 25, 2025",
      title: "Unlock Your Potential with Student Portal & App",
      color: "teal",
      content: (
        <div>
          <p className="mb-4">In today's fast-paced academic environment, having the right tools at your fingertips can make all the difference between simply passing and achieving your desired grades. Roots Academy understands this crucial need and has developed a cutting-edge student portal and mobile application designed to empower you on your educational journey.</p>
          
          <p className="mb-4">We've harnessed the power of technology to create an ecosystem that supports your learning, enhances your engagement, and ultimately drives you towards achieving your academic goals.</p>
          
          <h3 className="text-xl font-semibold mb-2">Seamless Access to Personalized Learning Resources</h3>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>24/7 Availability:</strong> Access your course materials, recorded lectures, and digital notes anytime, anywhere.</li>
            <li><strong>Tailored Content:</strong> Our portal provides personalized learning resources based on your individual needs and learning style.</li>
            <li><strong>Practice Tests & Quizzes:</strong> Sharpen your skills and build confidence with a wide range of practice tests and quizzes.</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-2">Real-Time Progress Tracking & Performance Analysis</h3>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Detailed Progress Reports:</strong> Monitor your academic performance with detailed progress reports.</li>
            <li><strong>Performance Analytics:</strong> Gain insights into your learning patterns and identify areas where you need to focus.</li>
            <li><strong>Goal Setting & Tracking:</strong> Set realistic academic goals and track your progress towards achieving them.</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-2">Direct Communication & Collaboration with Expert Tutors</h3>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Instant Messaging:</strong> Connect with your tutors directly through our integrated messaging system.</li>
            <li><strong>Live Q&A Sessions:</strong> Participate in live Q&A sessions with expert tutors.</li>
            <li><strong>Collaborative Learning:</strong> Engage in collaborative learning activities with your peers.</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-2">Enhanced Learning Experience Through Mobile Accessibility</h3>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Learn on the Go:</strong> Access your course materials and connect with your tutors anytime, anywhere.</li>
            <li><strong>Push Notifications:</strong> Stay updated with important announcements and reminders.</li>
            <li><strong>Offline Access:</strong> Download course materials for offline access, ensuring continuous learning.</li>
          </ul>
        </div>
      )
    },
    {
      id: 6,
      image:IBCC,
      date: "February 15, 2025",
      title: "Expert IBCC Subject Combination Guidance",
      color: "orange",
      content: (
        <div>
          <p className="mb-4">Choosing the right A-Level subjects is a crucial step for Pakistani students aiming for higher education. Beyond academic interest, aligning your subject combination with the Inter Board Committee of Chairmen (IBCC) equivalence requirements is essential for seamless progression to Pakistani universities. Roots Academy provides expert guidance, ensuring your A-Level choices pave the way for your desired academic and career paths.</p>
          
          <p className="mb-4">Understanding the IBCC's specific criteria can be challenging. Roots Academy simplifies this process, offering personalized advice to optimize your subject selection and secure your future.</p>
          
          <h3 className="text-xl font-semibold mb-2">Why IBCC Equivalence Matters for Your A-Levels</h3>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>University Admissions:</strong> IBCC equivalence is a fundamental requirement for admission to Pakistani universities.</li>
            <li><strong>Career Pathways:</strong> Correct subject combinations align with specific fields of study, opening doors to desired careers.</li>
            <li><strong>Smooth Transition:</strong> Ensuring your A-Levels meet IBCC standards prevents potential roadblocks in your academic journey.</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-2">Roots Academy's Expert Guidance on A-Level Subject Combinations</h3>
          
          <h4 className="text-lg font-medium mb-2">Understanding IBCC Requirements</h4>
          <ul className="list-disc pl-5 mb-4">
            <li>We provide up-to-date information on IBCC regulations, ensuring your subject choices comply with current standards.</li>
            <li>Our advisors clarify the minimum subject requirements and specific criteria for various fields.</li>
          </ul>
          
          <h4 className="text-lg font-medium mb-2">Personalized Subject Selection</h4>
          <ul className="list-disc pl-5 mb-4">
            <li>We assess your academic strengths, interests, and career aspirations to recommend suitable subject combinations.</li>
            <li>Whether you're aiming for medical, engineering, business, or humanities fields, we provide tailored guidance.</li>
          </ul>
          
          <h4 className="text-lg font-medium mb-2">Field-Specific Recommendations</h4>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Medical Fields:</strong> We guide you on the essential Biology, Chemistry, and Physics combinations.</li>
            <li><strong>Engineering Fields:</strong> We advise on the crucial Mathematics, Physics, and Chemistry subject choices.</li>
            <li><strong>Business & Social Sciences:</strong> We recommend relevant subjects like Economics, Business Studies, and Accounting.</li>
          </ul>
        </div>
      )
    },
    {
      id: 7,
      image: OvsA,
      date: "February 5, 2025",
      title: "Demystifying Cambridge Grades: O-Level vs. A-Level",
      color: "indigo",
      content: (
        <div>
          <p className="mb-4">Navigating the Cambridge International Examinations system can feel overwhelming, especially when grasping the grading structure and the distinct roles of O-Levels and A-Levels. At Roots Academy, we simplify these concepts for Pakistani students and parents, empowering informed academic decisions.</p>
          
          <h3 className="text-xl font-semibold mb-2">Understanding the Cambridge Grading System: A Clear Overview</h3>
          <p className="mb-4">The Cambridge International Examinations system employs a standardized grading scale to evaluate student performance, facilitating global recognition of academic achievements.</p>
          
          <h4 className="text-lg font-medium mb-2">IGCSE and O-Level Grading Explained</h4>
          <ul className="list-disc pl-5 mb-4">
            <li>These qualifications typically utilize the A* to G grading scale.</li>
            <li>A* represents the highest level of achievement, indicating exceptional performance, while G is the minimum passing grade.</li>
            <li>Grade boundaries are established post-examination series, reflecting the overall student performance distribution.</li>
          </ul>
          
          <h4 className="text-lg font-medium mb-2">A-Level Grading Explained</h4>
          <ul className="list-disc pl-5 mb-4">
            <li>A-Levels utilize the A* to E grading scale.</li>
            <li>A* represents the highest possible grade.</li>
            <li>A-Levels are typically structured into AS (Advanced Subsidiary) and A2 components, contributing to the final A-Level grade.</li>
            <li>The overall A-Level grade is a combination of the AS and A2 grades.</li>
          </ul>
          
          <h4 className="text-lg font-medium mb-2">Key Takeaways</h4>
          <ul className="list-disc pl-5 mb-4">
            <li>Grade boundaries are subject to variation across examination series.</li>
            <li>A comprehensive understanding of these boundaries is crucial for accurate result interpretation.</li>
            <li>Coursework and practical assessments, when applicable, contribute to the overall grade.</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-2">How Roots Academy Empowers Your Cambridge Journey</h3>
          <p className="mb-4">Roots Academy provides expert online tuition for both O-Levels and A-Levels, empowering Pakistani students to excel. Our experienced tutors possess in-depth knowledge of the Cambridge grading system and can guide you through the intricacies of each qualification.</p>
          
          <p>We offer personalized study plans tailored to your individual needs, exam-focused strategies designed to maximize your grades, and clear explanations of the grading system and exam requirements.</p>
        </div>
      )
    }
  ];

  const handleCardClick = (post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="container mx-auto p-4 bg-gray-50">
        <div className="text-center mb-10 font-['Roboto'] px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#4D3E77] leading-tight tracking-normal mt-0 mb-0">

              <span className="bg-[#4D3E77] text-white px-3 py-2 rounded-md inline-block">
               Blogs
              </span>
              
            </h1>
          </div>      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map(post => (
          <BlogCard 
            key={post.id}
            image={post.image}
            date={post.date}
            title={post.title}
            color={post.color}
            onClick={() => handleCardClick(post)}
          />
        ))}
      </div>
      
      {/* Modal for displaying full blog post */}
      {selectedPost && (
        <BlogPostModal 
          post={selectedPost} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
};

export default BlogGrid;