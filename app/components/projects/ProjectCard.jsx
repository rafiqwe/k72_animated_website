"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import localFont from "next/font/local";
import Image from "next/image";
import React, { useRef } from "react";

const customFont = localFont({
  src: "../../../public/font/Lausanne-500.woff2",
});

const ProjectCard = ({ image }) => {

  // gsap.registerPlugin(ScrollTrigger);

  // useGSAP(function () {
  //   gsap.from(imageDivRef.current, {
  //     height: "300px",
  //     stagger: {
  //       amount: 0.3,
  //     },
  //     scrollTrigger: {
  //       trigger: listRef.current,
  //       start: "top 30%",
  //       scrub: true,
  //       markers: true,
  //       end: "top -100%",
  //     },
  //   });
  // });

  return (
    <>
      <div className="md:w-1/2 w-full relative group hover:opacity-90 transition-all  rounded-4xl overflow-hidden h-full">
        <Image src={image?.image1} alt="projets" fill className="object-cover" />
        <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute flex items-center justify-center w-full h-full top-0 left-0 text-center">
          <h1
            className={`text-[5vw] uppercase border-2 rounded-full z-20 text-white px-5 pt-2 ${customFont.className}`}
          >
            view project
          </h1>
        </div>
      </div>
      {/* Second Image */}
      <div className="lg:w-1/2 w-full relative group hover:opacity-90 transition-all rounded-4xl overflow-hidden h-full">
          <Image
            src={image?.image2} // <-- changed from image1 to image2 (so both aren't the same)
            alt="projets"
            fill
            sizes="50vw"
            className="object-cover"
          />
          <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute flex items-center justify-center w-full h-full top-0 left-0 text-center">
            <h1
              className={`text-[5vw] uppercase border-2 rounded-full z-20 text-white px-5 pt-2 ${customFont.className}`}
            >
              view project
            </h1>
          </div>
        </div>
    </>
  );
};

export default ProjectCard;
