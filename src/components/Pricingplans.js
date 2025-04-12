import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
const levelOptions = [
  { label: "Year 9", value: "year9" },
  { label: "IGCSE/O Level", value: "igcse" },
  { label: "A Level", value: "alevel" },
];

const plansData = {
  year9: [
    {
      title: "Solo Core",
      subtitle: "Access to ONE subject of your choice",
      price: "SAR 225/month",
      originalPrice: null,
      discount: null,
      features: [
        "Individual attention",
        "24/7 Support"
      ],
      note: "Ideal for students focusing on one subject only.",
      color: "bg-white border-gray-300"
    },
    {
      title: "Dual Core",
      subtitle: "Access to TWO subjects of your choice",
      price: "SAR 400/month",
      originalPrice: "SAR 450",
      discount: "Save SAR 50",
      features: [
        "Full access to both subjects",
        "Individual attention",
        "24/7 Support"
      ],
      note: "Designed for learners who want to manage two subjects effectively.",
      color: "bg-blue-100 border-blue-300"
    },
    {
      title: "Tri Core",
      subtitle: "Access to THREE subjects of your choice",
      price: "SAR 525/month",
      originalPrice: "SAR 675",
      discount: "Save SAR 150",
      features: [
        "Best balance of variety and value",
        "Individual attention",
        "24/7 Support"
      ],
      note: "Perfect for students managing a well-rounded academic load.",
      color: "bg-yellow-100 border-yellow-300"
    },
    {
      title: "Quad Core",
      subtitle: "Access to FOUR subjects of your choice",
      price: "SAR 700/month",
      originalPrice: "SAR 900",
      discount: "Save SAR 200",
      features: [
        "Maximum value plan",
        "Individual attention",
        "24/7 Support"
      ],
      note: "Ideal for full-time students covering multiple subjects.",
      color: "bg-green-100 border-green-300"
    }
  ],
  igcse: [
    {
      title: "Solo Core",
      subtitle: "Access to ONE subject of your choice",
      price: "SAR 225/month",
      originalPrice: null,
      discount: null,
      features: [
        "Individual attention",
        "24/7 Support"
      ],
      note: "Ideal for students focusing on one subject only.",
      color: "bg-white border-gray-300"
    },
    {
      title: "Dual Core",
      subtitle: "Access to TWO subjects of your choice",
      price: "SAR 400/month",
      originalPrice: "SAR 450",
      discount: "Save SAR 50",
      features: [
        "Full access to both subjects",
        "Individual attention",
        "24/7 Support"
      ],
      note: "Designed for learners who want to manage two subjects effectively.",
      color: "bg-blue-100 border-blue-300"
    },
    {
      title: "Tri Core",
      subtitle: "Access to THREE subjects of your choice",
      price: "SAR 525/month",
      originalPrice: "SAR 675",
      discount: "Save SAR 150",
      features: [
        "Best balance of variety and value",
        "Individual attention",
        "24/7 Support"
      ],
      note: "Perfect for students managing a well-rounded academic load.",
      color: "bg-yellow-100 border-yellow-300"
    },
    {
      title: "Quad Core",
      subtitle: "Access to FOUR subjects of your choice",
      price: "SAR 700/month",
      originalPrice: "SAR 900",
      discount: "Save SAR 200",
      features: [
        "Maximum value plan",
        "Individual attention",
        "24/7 Support"
      ],
      note: "Ideal for full-time students covering multiple subjects.",
      color: "bg-green-100 border-green-300"
    }
  ],
  alevel: [
    {
      title: "Solo Core",
      subtitle: "Access to ONE subject of your choice",
      price: "SAR 225/month",
      originalPrice: null,
      discount: null,
      features: [
        "Individual attention",
        "24/7 Support"
      ],
      note: "Ideal for students focusing on one subject only.",
      bgColor: "#FBECEE",
      borderColor: "#991B1B"
    },
    {
      title: "Dual Core",
      subtitle: "Access to TWO subjects of your choice",
      price: "SAR 400/month",
      originalPrice: "SAR 450",
      discount: "Save SAR 50",
      features: [
        "Full access to both subjects",
        "Individual attention",
        "24/7 Support"
      ],
      note: "Designed for learners who want to manage two subjects effectively.",
      bgColor: "#EBF3E8",
      borderColor: "#065F46"
    },
    {
      title: "Tri Core",
      subtitle: "Access to THREE subjects of your choice",
      price: "SAR 525/month",
      originalPrice: "SAR 675",
      discount: "Save SAR 150",
      features: [
        "Best balance of variety and value",
        "Individual attention",
        "24/7 Support"
      ],
      note: "Perfect for students managing a well-rounded academic load.",
      bgColor: "#EDEFF5",
      borderColor: "#1E40AF"
    },
    {
      title: "Quad Core",
      subtitle: "Access to FOUR subjects of your choice",
      price: "SAR 700/month",
      originalPrice: "SAR 900",
      discount: "Save SAR 200",
      features: [
        "Maximum value plan",
        "Individual attention",
        "24/7 Support"
      ],
      note: "Ideal for full-time students covering multiple subjects.",
      bgColor: "#FBEEE1",
      borderColor: "#92400E"
    }
    
  ]
};


const PricingPlans = () => {
  const [selectedLevel, setSelectedLevel] = useState("year9");
  const plans = plansData[selectedLevel];

  return (
    <section className="px-4">
      <div className="flex gap-4 justify-center mb-8">
        {levelOptions.map((option) => (
          <button
            key={option.value}
            className={`px-6 py-2 rounded-[15px] font-semibold shadow transition-colors transform transition-all duration-300 hover:scale-105 duration-200 border hover:brightness-110
              ${selectedLevel === option.value
                ? "bg-purple-200 text-[#4D3E77] border-purple-300"
                : "bg-[#4D3E77] text-white border-purple-700 hover:bg-purple-800"}`}
            onClick={() => setSelectedLevel(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto my-10 p-5 lg:px-12">
        {plans.map((plan, index) => (
          <div 
            key={index}
            className={`border p-8 rounded-[20px] shadow-md  px-10 `}
            style={{ background:`${plan.bgColor}`,border: `1px solid ${plan.borderColor+"80"}` }}

            >
            <h2 className="text-[30px] font-bold mb-1 pt-5px "
                style={{ color: "#4D3E77"}}
                >{plan.title}</h2>
            <p className="text-sm text-gray-600  mb-3 pt-5px"
                style={{ color: "#4D3E77"}}

            >{plan.subtitle}</p>

            <ul className="text-gray-700 mb-4 space-y-1">
              {plan.features.map((feature, idx) => (
                <li
                key={idx}
                className="flex items-start space-x-3  text-lg sm:text-base"
                style={{ color: "#4D3E77"}}
              >
                <FaCheckCircle style={{ marginTop: '4px', flexShrink: 0 }} />
                <span><strong>{feature}</strong></span>
              </li>
              
              ))}
            </ul>

            <div className="mb-2">
            {plan.originalPrice && (
              <div className="text-[20px] line-through text-red-500">
                {plan.originalPrice}
              </div>
            )}
            <div className="text-[30px] font-bold text-gray-900"
                style={{ color: "#4D3E77"}}

            >
              {plan.price}
            </div>
          </div>


            {plan.discount && (
              <p className="text-sm text-white bg-red-500 px-2 py-1 rounded-md inline-block mb-3">
                {plan.discount}
              </p>
            )}

            <p className="text-sm text-gray-600 mb-4">{plan.note}</p>

            <button 
        className="w-full text-white text-xl font-semibold p-4 mt-5 rounded-[10px] bg-[#4D3E78] transition duration-300 hover:bg-[#3b2e5a] hover:scale-105"
        >        
        Register Now
      </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;