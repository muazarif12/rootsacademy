import { FaCheckCircle } from 'react-icons/fa';

const PricingFeaturesSection = () => {
  const features = [
    { title: 'Student Portal', desc: 'Track progress, access materials, and submit assignments—all in one place.' },
    { title: 'Teacher Assistance', desc: 'Get one-on-one support to tackle academic challenges.' },
    { title: 'Student Counselling', desc: 'Seek guidance to overcome obstacles and boost performance.' },
    { title: 'Prize Money', desc: 'Win up to 100 SAR in monthly tests.' },
    { title: 'Live Lectures', desc: 'Engage in real-time interactive learning.' },
    { title: 'E-Books & Notes', desc: 'Access digital resources for thorough preparation.' },
    { title: 'Class Recordings', desc: 'Review lessons anytime, at your own pace.' },
    { title: 'Past Papers', desc: 'Get organized topical and yearly past papers.' },
    { title: 'Assignments & Tests', desc: 'Complete tasks and track progress effectively.' },
    { title: 'Quizzes', desc: 'Take quick tests after each sub-topic.' },
    { title: 'Checked Scripts', desc: 'Receive detailed assignment feedback.' },
    { title: '24/7 Support', desc: 'Get academic help anytime.' },
  ];

  return (
    <section className="bg-[#FFF9F6] px-6 sm:px-10 md:px-20 py-16 text-[#4D3E77] font-['Inter_Tight']">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">What’s actually included?</h2>
      <p className="text-sm sm:text-base text-[#4D3E77] mb-6">Well, quite literally, everything.</p>

      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3 text-sm sm:text-base">
            <FaCheckCircle className="text-[#4D3E77] mt-1 flex-shrink-0" />
            <span>
              <strong>{feature.title}</strong> – {feature.desc}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PricingFeaturesSection;
