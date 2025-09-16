import localFont from "next/font/local";
import React from "react";
import Video from "./Video";

const lausanneFont = localFont({
  src: "../../../public/font/Lausanne-500.woff2",
});

const HomeHeroText = () => {
  return (
    <div className="relative">
      <div className={`${lausanneFont.className} text-center mt-96 lg:mt-5`}>
        <div
          className={`uppercase text-[9.5vw] flex items-center justify-center leading-[8vw]`}
        >
          The spark for
        </div>
        <div
          className={`uppercase text-[9.5vw] justify-center gap-3 leading-[8vw] flex items-center`}
        >
          all
          <div className="rounded-full h-[7vw] w-[16vw] -mt-4  overflow-hidden   ">
            <Video />
          </div>{" "}
          things
        </div>
        <div
          className={`uppercase text-[9.5vw] flex items-center justify-center leading-[8vw]`}
        >
          creative
        </div>
      </div>
      <div className="flex relative  mb-5 items-end justify-end  w-full right-0">
        <p className="w-[70vw] lg:w-[40vw] text-sm lg:text-xl">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
          K72 is an agency that builds brands from every angle. Today, tomorrow
          and years from now. We think the best sparks fly when comfort zones
          get left behind and friction infuses our strategies, brands and
          communications with real feeling. We’re transparent, honest and say
          what we mean, and when we believe in something, we’re all in.
        </p>
      </div>
    </div>
  );
};

export default HomeHeroText;
