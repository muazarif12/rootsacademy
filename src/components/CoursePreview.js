import React, { useState } from "react";
import courseImage from "../assets/images/video_image.PNG"; // path of video image
import featureVideo from "../assets/videos/feature.mp4" // path of

const CoursePreview = () => {
  const [videoVisible, setVideoVisible] = useState(false);
  
  const handlePlayClick = () => {
    setVideoVisible(true);
  };
  
  const handleCloseVideo = () => {
    setVideoVisible(false);
  };
  
  return (
    <div className="flex justify-center mt-12 mb-20 px-4">
      {/* Container for the video image with overlay */}
      <div 
        className="relative border-4 border-purple-300 rounded-xl shadow-xl bg-white overflow-hidden w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl" 
        style={{ aspectRatio: '1920/1272' }}
      >
        {/* Image as background */}
        <img
          src={courseImage}
          alt="Courses"
          className="w-full h-full object-cover"
        />
        
        {/* Video Play Button Overlay */}
        {!videoVisible && (
          <div
            onClick={handlePlayClick}
            className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-0 cursor-pointer"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM10.6219 8.41459C10.5562 8.37078 10.479 8.34741 10.4 8.34741C10.1791 8.34741 10 8.52649 10 8.74741V15.2526C10 15.3316 10.0234 15.4088 10.0672 15.4745C10.1897 15.6583 10.4381 15.708 10.6219 15.5854L15.5008 12.3328C15.5447 12.3035 15.5824 12.2658 15.6117 12.2219C15.7343 12.0381 15.6846 11.7897 15.5008 11.6672L10.6219 8.41459Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
        )}
        
        {/* Video container (only visible when the video is active) */}
        {videoVisible && (
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black">
            <video
              src={featureVideo}
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
            <button
              onClick={handleCloseVideo}
              className="absolute top-2 right-2 text-white text-xl bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200 z-10"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursePreview;
