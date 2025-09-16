"use client";
import localFont from "next/font/local";
import ProjectCard from "../components/projects/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const customFont = localFont({
  src: "../../public/font/Lausanne-500.woff2",
});

const page = () => {
  const projects = [
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/BEST/BEST_site_menu_Thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/OSM/thumbnail_OSM_1280-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".hero", {
      height: "200px",
      scrollTrigger: {
        trigger: ".lol",
        start: "top 60%",
        scrub: true,
        markers: true,
        end: "top -100%",
      },
    });
  });
  return (
    <div className="px-4 relative pb-40 bg-white text-black">
      <div className="pt-[50vw] sm:pt-[20vw] md:pt-[20vw] lg:pt-[20vw]">
        <h1 className={`${customFont.className} text-[9.5vw] uppercase`}>
          projets
        </h1>
      </div>
      <div className="lg:-mt-15   lol w-full">
        {projects.map((elem, idx) => (
          <div
            key={idx}
            className="w-full hero h-[500px] mb-4 flex flex-col lg:flex-row lg:gap-4 gap-2"
          >
            <ProjectCard image={elem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
