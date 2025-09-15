"use client";

import NavDataContext, { useNav } from "@/app/contexts/NavContext";
import Link from "next/link";
import React, { useContext } from "react";

const FullScreenNav = () => {
  const { isNavOpen, setIsNavOpen } = useNav();

  return (
    <div
      className={`h-screen ${
        isNavOpen ? "block" : "hidden"
      }  absolute overflow-x-hidden   text-white flex flex-col  top-0 w-full bg-black`}
    >
      <div className="flex items-center justify-between w-full px-5">
        <div className="p-2">
          <Link href={"/"}>
            <div className="w-25">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 103 44"
              >
                <path
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </div>
          </Link>
        </div>
        <div
          onClick={() => setIsNavOpen(false)}
          className="w-32 h-32 pt-5   cursor-pointer"
        >
          <div className="h-44 w-0.5 -rotate-45 origin-top absolute  bg-white"></div>
          <div className="h-44 w-0.5 right-5 rotate-45 origin-top absolute  bg-white"></div>
        </div>
      </div>

      <div className="py-2">
        <div className="">
          <div className="link origin-top relative border-t-1 border-white">
            <h1 className="text-5xl lg:text-[8vw] text-center py-3 lg:leading-[0.8]   uppercase">
              project
            </h1>
            <div className="moveLink absolute text-black items-center h-full flex top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className=" h-[6vw] rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center  uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="h-[6vw] rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8]  uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="h-[6vw] rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="h-[6vw] rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="link origin-top relative border-t-1 border-white">
            <h1 className="text-5xl lg:text-[8vw] py-3 text-center lg:leading-[0.8]   uppercase">
              agence
            </h1>
            <div className="moveLink absolute text-black items-center h-full flex top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className=" h-[6vw] rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center  uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="h-[6vw] rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8]  uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="h-[6vw] rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="h-[6vw] rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="link origin-top relative border-t-1 border-white">
            <h1 className="text-5xl lg:text-[8vw] py-3 text-center lg:leading-[0.8]   uppercase">
              contact
            </h1>
            <div className="moveLink absolute text-black items-center h-full flex top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className=" h-[6vw] rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center  uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="h-[6vw] rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8]  uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="h-[6vw] rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="h-[6vw] rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="link origin-top relative border-t-1 border-white">
            <h1 className="text-5xl lg:text-[8vw] py-3 text-center lg:leading-[0.8]   uppercase">
              blogs
            </h1>
            <div className="moveLink absolute text-black items-center h-full flex  top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className=" h-[6vw] rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center  uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="h-[6vw] rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8]  uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="h-[6vw] rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="h-[6vw] rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
