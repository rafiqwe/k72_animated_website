import localFont from "next/font/local";
import Link from "next/link";
import React from "react";

const customFont = localFont({
  src: "../../../public/font/Lausanne-300.woff2",
});

const HomeBottomText = () => {
  return (
    <div
      className={`flex mb-2 items-center  justify-center gap-5 ${customFont.className}`}
    >
      <div className="uppercase rounded-full  hover:text-[#D3FD50] transition-colors hover:border-[#D3FD50] border-3 pt-2  border-white  px-4 ">
        <Link href={"/project"} className="leading-[6vw] text-[5.5vw] ">
          project
        </Link>
      </div>
      <div className="uppercase rounded-full  hover:text-[#D3FD50] transition-colors hover:border-[#D3FD50] border-3 pt-2  border-white  px-4 ">
        <Link href={"/agence"} className="leading-[6vw] text-[5.5vw]">
          agence
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
