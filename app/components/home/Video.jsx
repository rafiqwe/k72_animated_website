import React from "react";

const Video = () => {
  return (
    <div className="w-full h-full">
      <video
        autoPlay
        loop
        muted   
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/video/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
