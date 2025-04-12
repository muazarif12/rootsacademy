import React from "react";
import Slider from "react-slick";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const videoSlides = [
    {
        title: "A Level Chemistry",
        chapter: "Arenes",
        lesson: "Structure of Benzene",
        thumbnail: "https://i.vimeocdn.com/video/1974004726-d_1280",
        vimeoLink: "https://vimeo.com/1049625330",
    },
    {
        title: "A Level Mathematics",
        chapter: "Differentiation",
        lesson: "The second derivative",
        thumbnail: "https://i.vimeocdn.com/video/1974007071-d_1280",
        vimeoLink: "https://vimeo.com/1049627426",
    },
    // Add more items as needed
];

const CustomArrow = ({ onClick, direction }) => {
    const isLeft = direction === "left";
    return (
        <button
        onClick={onClick}
        className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#4D3E77] flex items-center justify-center text-white hover:bg-[#6C56AB] transition"
      >
        {isLeft ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        )}
      </button>
    );
  };

const VideoCarouselSlick = () => {
    const sliderRef = React.useRef();

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        swipe: false,
        draggable: false,
    };




    return (
        <section className=" py-24 px-4">
            <div className="text-center mb-16 font-['Inter_Tight']">
                <h1 className="text-[41px] font-bold text-[#4D3E77] leading-[1.1] tracking-normal mt-0 mb-4 max-w-[48rem] mx-auto">
                    Bringing The classroom to your screen Live and Interactive
                </h1>
                <p className="text-[23px] text-[#4d3e78] leading-[1.3] font-normal mt-0 mb-0 tracking-normal font-['Inter_Tight'] max-w-[44rem] mx-auto">
                    Unlock the power of real-time learning with expert-led live classes! Engage in interactive
                    discussions, get instant answers, and receive personalized guidance—all from home. Master A
                    concepts like never before!
                </p>
            </div>


            {/* Carousel */}
            <Slider {...settings} ref={sliderRef}>
                {videoSlides.map((video, index) => (
                    <div key={index}>
                        <div className="mx-auto w-full max-w-[860px] px-4">
                            <div className="relative w-full max-w-[790px] h-[445px] mx-auto rounded-xl overflow-hidden border-[8px] border-[#C9B8F9] shadow-lg">
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-full object-cover"
                                />
                                <a
                                    href={video.vimeoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition"
                                >
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/0/375.png"
                                        alt="Play"
                                        className="w-14 h-14"
                                    />
                                </a>
                            </div>

                            <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-6 max-w-[820px] mx-auto px-2">
                                {/* Left: Title & info */}
                                <div className="text-left text-[#4D3E77] font-['Inter_Tight']">
                                    <h4 className="text-[30px] font-bold mt-4">{video.title}</h4>
                                    <p className="text-[18px] font-normal mt-0">Chapter: {video.chapter}</p>
                                    <p className="text-[18px] font-normal">Lesson: {video.lesson}</p>
                                </div>

                                {/* Right: Arrows + label */}
                                <div className="flex items-center gap-4 mt-10 pt-2">
                                    <CustomArrow onClick={() => sliderRef.current.slickPrev()} direction="left" />
                                    <CustomArrow onClick={() => sliderRef.current.slickNext()} direction="right" />
                                    <span className="text-[#5A4B8B] font-semibold ml-2">Next video</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default VideoCarouselSlick;