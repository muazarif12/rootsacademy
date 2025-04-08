import React, { useState } from "react";

const levelOptions = [
  { label: "Year 9", value: "year9" },
  { label: "IGCSE/O Level", value: "igcse" },
  { label: "A Level", value: "alevel" },
];

const plansData = {
  year9: [
    {
      title: "Year 9 Basic",
      description: "Covers essential topics.",
      subjects: ["Math", "English", "Science"],
      price: "Rs 10,000",
      monthlyPrice: "Rs 2000/month",
      discount: "10% off for first 3 months",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  igcse: [
    {
      title: "IGCSE Standard",
      description: "Core subjects and exam prep.",
      subjects: ["Math", "Physics", "Chemistry"],
      price: "Rs 20,000",
      monthlyPrice: "Rs 4000/month",
      discount: "15% off yearly",
      color: "bg-purple-200 border-purple-300",
    },
  ],
  alevel: [
    {
      title: "01 Subject",
      description: "Individual Attention\n24/7 Support",
      price: "SAR 225/month",
      color: "bg-purple-100 border-purple-300",
    },
    {
      title: "02 Subjects",
      description: "SAR 450 SAR 400",
      price: "SAR 400/month",
      discount: "Discount SAR 50",
      color: "bg-blue-100 border-blue-300",
    },
    {
      title: "03 Subjects",
      description: "SAR 675 SAR 525",
      price: "SAR 525/month",
      discount: "Discount SAR 150",
      color: "bg-orange-100 border-orange-300",
    },
    {
      title: "04 Subjects",
      description: "SAR 900 SAR 700",
      price: "SAR 700/month",
      discount: "Discount SAR 200",
      color: "bg-green-100 border-green-300",
    },
  ],
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

      <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto my-10 p-5">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border p-6 rounded-[20px] shadow-md ${plan.color}`}
          >
            <h2 className="text-xl font-bold mb-3">{plan.title}</h2>
            <p className="text-gray-700 mb-4 whitespace-pre-line">{plan.description}</p>
            {plan.subjects && (
              <ul className="text-gray-700 mb-4">
                {plan.subjects.map((subject, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    ✅ {subject}
                  </li>
                ))}
              </ul>
            )}
            <p className="text-lg font-bold text-gray-900">{plan.price}</p>
            {plan.monthlyPrice && (
              <p className="text-sm text-red-600">{plan.monthlyPrice}</p>
            )}
            {plan.discount && (
              <p className="text-sm text-white bg-red-500 px-2 py-1 rounded-md mt-2 inline-block">
                {plan.discount}
              </p>
            )}
            <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-[10px] w-full hover:bg-purple-800">
              Register Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;