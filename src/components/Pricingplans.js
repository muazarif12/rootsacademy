import React from "react";

const plans = [
  {
    title: "Solo Core (for one subject)",
    description: "Access to ONE subject of your choice",
    price: "Rs 15,000 / month",
    color: "bg-purple-100 border-purple-300",
  },
  {
    title: "Dual Core (for two subjects)",
    description:
      "All of our courses & features (listed below) for ONE A level subject of your choice\nOne time payment Access till end of May/June 2025 exams",
    price: "Rs 21,000",
    discount: "Save 12.5% , no recurring cost",
    color: "bg-blue-100 border-blue-300",
  },
  {
    title: "Quad Core (for four subjects)",
    description: "Access to four subjects of your choice",
    price: "Rs 15,000 / month",
    color: "bg-orange-100 border-orange-300",
  },
  {
    title: "All Access (for all your subjects)",
    description:
      "Our best value offer\nAccess all of our courses & features (listed below) for all of your A level subjects\nOne time payment Access till end of May/Jun 2025 exams",
    subjects: [
      "Chemistry (CAIE, AQA, Edexcel iAL)",
      "Physics (CAIE, AQA, Edexcel iAL)",
      "Biology (CAIE)",
      "Maths (CAIE, Edexcel iAL)",
      "Economics (CAIE, AQA, Edexcel iAL)",
      "Business (CAIE, AQA, Edexcel iAL)",
      "Accounting (CAIE)",
      "Psychology (CAIE)",
    ],
    price: "Rs 30,000",
    monthlyPrice: "As low as Rs 6000 per month",
    color: "bg-green-100 border-green-300",
  },
];

const PricingPlans = () => {
  return (
    <div className="grid md:grid-cols-2 gap-3 max-w-5xl mx-auto my-10 p-5">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`border p-6 rounded-lg shadow-md ${plan.color}`}
        >
          <h2 className="text-xl font-bold mb-3">{plan.title}</h2>
          <p className="text-gray-700 mb-4">{plan.description}</p>
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
            Register Now !
          </button>
        </div>
      ))}
    </div>
  );
};

export default PricingPlans;
