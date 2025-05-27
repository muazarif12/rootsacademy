import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import video1 from "../assets/videos/biology_video.mp4"
import video2 from "../assets/videos/chemistry_video.mp4"
import video3 from "../assets/videos/physics_video.mp4"
import video4 from "../assets/videos/igcse_biology_video.mp4"

const videoSlides = [
    {
        title: "AS Biology",
        chapter: "10",
        lesson: "Gaseous Exchange",
        videoSrc: video1,
    },
    {
        title: "AS Chemistry",
        chapter: "Chapter 15",
        lesson: "Chemical Formulas",
        videoSrc: video2,
    },
    {
        title: "AS Physics",
        chapter: "Chapter 6",
        lesson: "Work, Energy, and Power",
        videoSrc: video3,
    },
    {
        title: "IGCSE Biology",
        chapter: "Chapter 17",
        lesson: "Inheritance",
        videoSrc: video4,
    },
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
    const sliderRef = useRef();
    const [playingVideo, setPlayingVideo] = useState(null);
    const videoRefs = useRef({});

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

    const handlePlayVideo = (videoSrc, index) => {
        const videoElement = videoRefs.current[index];
        if (videoElement) {
            videoElement.play()
                .then(() => {
                    setPlayingVideo(index); // Show native controls after video starts playing
                })
                .catch((error) => {
                    console.error("Error playing video:", error);
                });
        }
        console.log("Playing video:", videoSrc);
    };

    const handleVideoEnd = (index) => {
        setPlayingVideo(null);
    };

    const handleVideoPlay = (index) => {
        setPlayingVideo(index);
    };

    const handleVideoPause = (index) => {
        // Keep controls visible even when paused
        // setPlayingVideo(null); // Uncomment this if you want to hide controls when paused
    };

    return (
        <section className="py-24 px-4">
            <div className="text-center mb-16 font-['Inter_Tight']">
                <h1 className="text-[41px] font-bold text-[#4D3E77] leading-[1.1] tracking-normal mt-0 mb-4 max-w-[48rem] mx-auto">
                    Step Into <span className="bg-[#4D3E77] text-white px-1 rounded-md">A*</span> Success
                </h1>
                <p className="text-[23px] text-[#4d3e78] leading-[1.3] font-normal mt-0 mb-0 tracking-normal font-['Inter_Tight'] max-w-[44rem] mx-auto">
                    Unlock the power of real-time learning with expert led live classes! Engage in interactive
                    discussions, get instant answers, and receive personalized guidance all from home. Master A
                    concepts like never before!
                </p>
            </div>

            {/* Carousel */}
            <Slider {...settings} ref={sliderRef}>
                {videoSlides.map((video, index) => (
                    <div key={index}>
                        <div className="mx-auto w-full max-w-[860px] px-4">
                            <div className="relative w-full max-w-[790px] h-[445px] mx-auto rounded-xl overflow-hidden border-[8px] border-[#C9B8F9] shadow-lg">
                                <video
                                    ref={el => videoRefs.current[index] = el}
                                    src={video.videoSrc}
                                    className="w-full h-full object-cover"
                                    muted
                                    preload="metadata"
                                    controls={playingVideo === index} // Show native controls only when playing
                                    onEnded={() => handleVideoEnd(index)}
                                    onPlay={() => handleVideoPlay(index)}
                                    onPause={() => handleVideoPause(index)}
                                />
                                
                                {/* Custom Play Button Overlay - Only show when not playing */}
                                {playingVideo !== index && (
                                    <div
                                        onClick={() => handlePlayVideo(video.videoSrc, index)}
                                        className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition cursor-pointer"
                                    >
                                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-8 h-8 text-[#4D3E77] ml-1"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                )}
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
                                    <CustomArrow onClick={() => sliderRef.current?.slickPrev()} direction="left" />
                                    <CustomArrow onClick={() => sliderRef.current?.slickNext()} direction="right" />
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
