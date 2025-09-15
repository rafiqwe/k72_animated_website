"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import localFont from "next/font/local";
import Image from "next/image";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const myFont = localFont({
  src: "../../public/font/Lausanne-300.woff2",
});

const Page = () => {
  const imageDivRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
  );

  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ];

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        start: "top 28%",
        end: "top -160%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          let imageIndex =
            self.progress < 1
              ? Math.floor(self.progress * imageArray.length)
              : imageArray.length - 1;

          setCurrentImage(imageArray[imageIndex]);
        },
      },
    });
  });

  return (
    <>
      <div className="section1">
        <div
          ref={imageDivRef}
          className="absolute h-[20vw] w-[14.5vw] rounded-3xl left-[31vw] top-35 overflow-hidden"
        >
          <Image
            src={currentImage}
            fill
            alt="Dynamic Team Member"
            sizes="14.5vw"
            className="object-cover transition-all duration-300"
          />
        </div>
        <div className={`relative ${myFont.className} py-1`}>
          <div className="mt-[56vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[17vw]">
              SEVEN7Y <br /> TWO
            </h1>
          </div>
          <div className="pl-[40%] mt-10">
            <p className="text-6xl">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp; We’re inquisitive and open-minded, and we make
              sure creativity crowds out ego from every corner. A brand is a
              living thing, with values, a personality and a story. If we ignore
              that, we can achieve short-term success, but not influence that
              goes the distance. We bring that perspective to every brand story
              we help tell.
            </p>
          </div>
        </div>
      </div>
      <div className="section h-screen"></div>
    </>
  );
};

export default Page;
