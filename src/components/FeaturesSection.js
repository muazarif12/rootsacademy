import React from "react";
// import featureVideo2 from "../assets/videos/video2.mp4" // path of video2
// import featureVideo3 from "../assets/videos/video3.mp4" // path of video3
// import featureVideo4 from "../assets/videos/video4.mp4" // path of video4
// import featureVideo5 from "../assets/videos/video5.mp4" // path of video5

const features = [
  {
    title: "Replay and Resolve",
    description: "Join live classes in real time for direct support, instant feedback, and deeper understanding. Ask questions, engage with experienced  teacher, and stay fully connected to your learning..",
    videoSrc: "https://cdn.prod.website-files.com/6784e13057450193c3cbe00a/67920fe46e78e143c78d4568_Chemistry%20Short%20Video%20Lecture-transcode.mp4",  //demo
    //poster: "https://cdn.prod.website-files.com/6784e13057450193c3cbe00a/67920fe46e78e143c78d4568_Chemistry%20Short%20Video%20Lecture-poster-00001.jpg",
    //videoSrc: featureVideo2, // real 
    bgColor: "bg-red-100",
    borderColor: "border-red-300",
    textColor: " text-pink-800",
    width: "w-[561.6px]",
    height: "h-[475px]",
    padding: "p-6",
    borderRadius: "rounded-[15px]",
  },
  {
    title: "Bit Sized Assignments",
    description: "Tackle topical past paper questions step-by-step with our teacher-guided walkthroughs. These bite-sized assignments are crafted to mirror real exam patterns, helping you understand examiner expectations and improve accuracy. Top teachers solve exam questions step-by-step, showing you exactly what examiners want.",
    videoSrc: "https://cdn.prod.website-files.com/66a9d3b309fadf5baa213c6b/67a614f6c2304ee3cb6879f8_econcrop-transcode.mp4", //demo
    //poster: "https://cdn.prod.website-files.com/66a9d3b309fadf5baa213c6b/67a614f6c2304ee3cb6879f8_econcrop-poster-00001.jpg",
    //videoSrc: featureVideo3, // real
    bgColor: "bg-green-100",
    borderColor: "border-green-300",
    textColor: "text-green-800",
    width: "w-[450px]",
    height: "h-[475px]",
    padding: "p-6",
    borderRadius: "rounded-[15px]",
  },
  {
    title: "Instant Support, 24/7",
    description: "Confused about a topic? Whether it’s late at night or early morning, get answers by messaging your assistant or teacher anytime. on a question? Get help anytime, anywhere - on your phone, laptop, or tablet.",
    videoSrc: "https://cdn.prod.website-files.com/6784e13057450193c3cbe00a/679213e703317cd1456221df_Chemistry%20Short%20Academic%20Support-transcode.mp4", //demo
    //poster: "https://cdn.prod.website-files.com/6784e13057450193c3cbe00a/679213e703317cd1456221df_Chemistry%20Short%20Academic%20Support-poster-00001.jpg",
    //videoSrc: featureVideo4, // real
    bgColor: "bg-blue-100",
    borderColor: "border-green-300",
    textColor: "text-blue-800",
    width: "w-[450px]",
    height: "h-[475px]",
    padding: "p-6",
    borderRadius: "rounded-[15px]",
  },
  {
    title: "Real Practice. Real Feedback.",
    description: "Submit tests and assignments on student portal, and receive detailed evaluations to guide your improvement. It's not just about practice—it's about progress.",
    videoSrc: "https://cdn.prod.website-files.com/6784e13057450193c3cbe00a/67921404b91f5fc62e6a297b_Chemistry%20Short%20Crash%20Courses-transcode.mp4", //demo
    //poster: "https://cdn.prod.website-files.com/6784e13057450193c3cbe00a/67921404b91f5fc62e6a297b_Chemistry%20Short%20Crash%20Courses-poster-00001.jpg",
    //videoSrc: featureVideo5, // real
    bgColor: "bg-yellow-100",
    borderColor: "border-yellow-300",
    textColor: "text-yellow-800",
    width: "w-[561.6px]",
    height: "h-[475px]",
    padding: "p-6",
    borderRadius: "rounded-[15px]",
  },
];

const FeaturesSection = () => {
  return (
    <section className=" py-20 mt-0 pt-[140px] px-[5%] pb-[160px] relative">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Heading Section */}
        <div className="text-3xl font-semibold text-center mb-2 font-['Inter_Tight']">
          <h1 className="text-[41px] font-bold text-[#4D3E77] leading-[1.1] tracking-normal mt-0 mb-0">
            The{" "}
            <span className="bg-[#4D3E77] text-white px-2 py-1 rounded-md inline-block">
              Ultimate
            </span>{" "}
            A Level Toolkit
          </h1>
          <p className="text-[23px] text-[#4d3e78] leading-[1.3] font-normal mt-0 mb-0 tracking-normal font-['Inter_Tight'] max-w-[40rem] mx-auto">
            Our platform has helped students across 100+ countries achieve their dream grades.
            It’s not just a promise – it’s our guarantee.
          </p>
        </div>

        {/* Flexbox Container */}
        <div className="flex flex-col gap-3"> {/* Vertical gap between rows */}
          {/* First Row */}
          <div className="flex flex-wrap justify-center gap-3"> {/* Horizontal gap between cards */}
            {/* Card 1 (Wider) */}
            <div className={`${features[0].padding} ${features[0].borderRadius} border ${features[0].bgColor} ${features[0].borderColor} flex-[5_1_0%] min-w-[300px] min-h-[475px] flex flex-col`}>
              <div className="mb-4 flex-1">
                <h2 className={`text-[20px] font-semibold ${features[0].textColor}`}>
                  {features[0].title}
                </h2>
                <p className="text-[15px] text-gray-900 mt-1">
                  {features[0].description}
                </p>
              </div>
              <div className="w-full aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  src={features[0].videoSrc}
                  //poster={features[0].poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>

            {/* Card 2 (Narrower) */}
            <div className={`${features[1].padding} ${features[1].borderRadius} border ${features[1].bgColor} ${features[1].borderColor} flex-[4_1_0%] min-w-[300px] min-h-[475px] flex flex-col`}>
              <div className="mb-4 flex-1">
                <h2 className={`text-[20px] font-semibold ${features[1].textColor}`}>
                  {features[1].title}
                </h2>
                <p className="text-[15px] text-gray-900 mt-1">
                  {features[1].description}
                </p>
              </div>
              <div className="w-full aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  src={features[1].videoSrc}
                  //poster={features[1].poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap justify-center gap-3"> {/* Horizontal gap between cards */}
            {/* Card 3 (Wider) */}
            <div className={`${features[2].padding} ${features[2].borderRadius} border ${features[2].bgColor} ${features[2].borderColor} flex-[4_1_0%] min-w-[300px] min-h-[475px] flex flex-col`}>
              <div className="mb-4 flex-1">
                <h2 className={`text-[20px] font-semibold ${features[2].textColor}`}>
                  {features[2].title}
                </h2>
                <p className="text-[15px] text-gray-900 mt-1">    
                  {features[2].description}
                </p>
              </div>
              <div className="w-full aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  src={features[2].videoSrc}
                  //poster={features[2].poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>

            {/* Card 4 (Narrower) */}
            <div className={`${features[3].padding} ${features[3].borderRadius} border ${features[3].bgColor} ${features[3].borderColor} flex-[5_1_0%] min-w-[300px] min-h-[475px] flex flex-col`}>
              <div className="mb-4 flex-1">
                <h2 className={`text-[20px] font-semibold ${features[3].textColor}`}>
                  {features[3].title}
                </h2>
                <p className="text-[15px] text-gray-900 mt-1">
                  {features[3].description}
                </p>
              </div>
              <div className="w-full aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  src={features[3].videoSrc}
                  //poster={features[3].poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;