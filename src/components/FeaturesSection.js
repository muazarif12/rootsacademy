import React from "react";

const features = [
  {
    title: "Epic Courses Made by The Best",
    description: "Learn from teachers who've helped students score A*’s for 26+ years. Our video lessons break down complex topics into digestible chunks that stick.",
    videoSrc: "https://cdn.prod.website-files.com/6784e13057450193c3cbe00a/67920fe46e78e143c78d4568_Chemistry%20Short%20Video%20Lecture-transcode.mp4",
    poster: "https://cdn.prod.website-files.com/6784e13057450193c3cbe00a/67920fe46e78e143c78d4568_Chemistry%20Short%20Video%20Lecture-poster-00001.jpg",
    bgColor: "bg-red-100",
    borderColor: "border-red-300",
    textColor: "text-red-800",
    width: "w-[561.6px]",  // Width of the card (561.6px)
    height: "h-[475px]",  // Auto height to adjust based on content
    padding: "p-6",  // Padding inside the card
    borderRadius: "rounded-[15px]",  // Border radius for rounded corners
  },
  {
    title: "Past Paper Mastery",
    description: "Watch top teachers solve exam questions step-by-step, showing you exactly what examiners want.",
    videoSrc: "https://cdn.prod.website-files.com/66a9d3b309fadf5baa213c6b/67a614f6c2304ee3cb6879f8_econcrop-transcode.mp4",
    poster: "https://cdn.prod.website-files.com/66a9d3b309fadf5baa213c6b/67a614f6c2304ee3cb6879f8_econcrop-poster-00001.jpg",
    bgColor: "bg-green-100",
    borderColor: "border-green-300",
    textColor: "text-green-800",
    width: "w-[374.4px]",  // Width of the card (374.4px)
    height: "h-[475px]",  // Auto height to adjust based on content
    padding: "p-6",  // Padding inside the card
    borderRadius: "rounded-[15px]",  // Border radius for rounded corners
  },
  {
    title: "Expert Support",
    description: "Stuck on a question? Get help anytime, anywhere - on your phone, laptop, or tablet.",
    videoSrc: "https://cdn.prod.website-files.com/6784e13057450193c3cbe00a/679213e703317cd1456221df_Chemistry%20Short%20Academic%20Support-transcode.mp4",
    poster: "https://cdn.prod.website-files.com/6784e13057450193c3cbe00a/679213e703317cd1456221df_Chemistry%20Short%20Academic%20Support-poster-00001.jpg",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-300",
    textColor: "text-blue-800",
    width: "w-[374.4px]",  // Width of the card (374.4px)
    height: "h-[475px]",  // Auto height to adjust based on content
    padding: "p-6",  // Padding inside the card
    borderRadius: "rounded-[15px]",  // Border radius for rounded corners
  },
  {
    title: "Timed Crash Courses",
    description: "Turn months of revision into a clear, manageable plan with our 90 & 60-day crash courses. Perfect for busy students aiming for top grades.",
    videoSrc: "https://cdn.prod.website-files.com/6784e13057450193c3cbe00a/67921404b91f5fc62e6a297b_Chemistry%20Short%20Crash%20Courses-transcode.mp4",
    poster: "https://cdn.prod.website-files.com/6784e13057450193c3cbe00a/67921404b91f5fc62e6a297b_Chemistry%20Short%20Crash%20Courses-poster-00001.jpg",
    bgColor: "bg-yellow-100",
    borderColor: "border-yellow-300",
    textColor: "text-yellow-800",
    width: "w-[561.6px]",  // Width of the card (561.6px)
    height: "h-[475px]",  // Auto height to adjust based on content
    padding: "p-6",  // Padding inside the card
    borderRadius: "rounded-[15px]",  // Border radius for rounded corners
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-[#fdf9f6] py-20 mt-0 pt-[140px] px-[5%] pb-[160px] relative">
      <div className="w-full max-w-[960px] mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16 font-['Inter_Tight']">
          <h1 className="text-[41px] font-bold text-[#4D3E77] leading-[1.1] tracking-normal mt-0 mb-0">
            The{" "}
            <span className="bg-[#4D3E77] text-white px-2 py-1 rounded-md inline-block">
              Ultimate
            </span>{" "}
            A Level Toolkit
          </h1>
          <p className="text-[23px] text-[#4d3e78] leading-[1.3] font-normal mt-0 mb-0 tracking-normal font-['Inter_Tight'] max-w-[40rem] mx-auto">
            Our platform has helped students across 100+ countries achieve their dream grades.
            It’s not just a promise – it’s our 
            guarantee.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.padding} ${feature.borderRadius} border ${feature.bgColor} ${feature.borderColor} flex flex-col justify-between ${feature.width} ${feature.height}`}
            >
              <div className="mb-4">
                <h2 className={`text-[20px] font-semibold ${feature.textColor}`}>
                  {feature.title}
                </h2>
                <p className="text-[15px] text-gray-700 mt-1">{feature.description}</p>
              </div>
              <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  src={feature.videoSrc}
                  poster={feature.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
