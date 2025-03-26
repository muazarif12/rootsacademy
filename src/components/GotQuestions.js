import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion"; // ✅ Import motion for smooth animations


export default function FAQSection() {
    const faqs = [
        { question: "Which Subjects do you offer?", answer: "We offer Math, Science, English, and more!" },
        { question: "How do I enroll?", answer: "You can enroll by signing up on our website." },
        { question: "Is there a free trial?", answer: "Yes, we offer a 7-day free trial!" },
        { question: "Do you provide certifications?", answer: "Yes, we provide official course completion certificates." },
        { question: "Can I cancel anytime?", answer: "Yes, you can cancel your subscription anytime." },
        { question: "What payment methods do you accept?", answer: "We accept credit/debit cards, PayPal, and more." }
      ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-[#4C397D] min-h-screen flex flex-col justify-center items-center p-10 text-white">
      {/* Main Container */}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Section: Header */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold">
            Got <span className="bg-white text-[#4C397D] px-2 rounded-md">Questions?</span>
          </h2>
          <p className="mt-4 text-lg font-medium">
            Find all the answers to common questions here. If you're still on the fence and need extra support – book a free consultation with our team. We're here to help you succeed.
          </p>
          <button className="mt-6 bg-purple-300 text-purple-900 font-semibold px-6 py-3 rounded-lg transform transition-all duration-300 hover:scale-105 hover:brightness-110">
            Contact us
          </button>
        </div>

{/* Right Section: FAQ Grid */}
            <div className="lg:w-1/2 mt-10 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="w-72">
                        {/* Question Button */}
                        <button
                            className="bg-white text-left text-[#4C397D] px-6 py-4 rounded-lg flex justify-between items-center w-full shadow-md transform transition-all duration-300 hover:scale-105 hover:brightness-110"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            {faq.question}
                            <FaChevronDown className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
                        </button>

                        {/* Expanding Answer (with smooth animation) */}
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="bg-gray-100 text-left text-[#4C397D] p-4 mt-2 rounded-md shadow-sm">
                            {faq.answer}
                            </div>
                        </motion.div>
                        </div>
                    ))}
                    </div>
                </div>

      {/* Call-to-Action Section */}
      <div className="mt-20 bg-white text-gray-900 p-6 rounded-xl shadow-lg w-full max-w-3xl flex flex-col sm:flex-row justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">Still confused? Get in touch with us.</h3>
          <p className="text-gray-600">Get personalized support and the answers to all your questions.</p>
        </div>
        <button className="mt-10 sm:mt-0 bg-purple-300 text-purple-900 font-semibold px-6 py-3 rounded-lg transform transition-all duration-300 hover:scale-105 hover:brightness-110">
          Book a demo
        </button>
      </div>
    </div>
  );
}
