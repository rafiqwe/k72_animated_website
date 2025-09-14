import localFont from "next/font/local";
import React from "react";
import Video from "./Video";

const lausanneFont = localFont({
  src: "../../../public/font/Lausanne-500.woff2",
});

const HomeHeroText = () => {
  return (
    <div className={`${lausanneFont.className} text-center mt-5`}>
      <div className={`uppercase text-[9.5vw] flex items-center justify-center leading-[8vw]`}>
        The spark for
      </div>
      <div className={`uppercase text-[9.5vw] justify-center gap-3 leading-[8vw] flex items-center`}>all 
        <div className="rounded-full h-[7vw] w-[16vw] -mt-4  overflow-hidden   ">
          <Video/>
        </div> things</div>
      <div className={`uppercase text-[9.5vw] flex items-center justify-center leading-[8vw]`}>creative</div>
    </div>
  );
};

export default HomeHeroText;
