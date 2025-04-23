import React from "react";
import Link from "next/link"
import { QrCode } from "lucide-react";

const Landing = () => {
  return (
    <>
      <div id='home'></div>
      <div className="bg-[url('/images/LAND.png')] h-screen bg-cover bg-[16%] overflow-x-hidden sticky top-0 flex flex-col md:flex-row">

        <div className="w-full h-3/4 md:w-4/5 md:h-full md:order-last flex flex-col items-center md:items-start justify-center text-white px-4 md:px-8">
          <div className="flex flex-col items-center md:items-start mt-24 md:mt-0">
            <p className="fontsize-heading text-shadow-title">GCETTS presents -</p>

            <h1
              id="texatech-heading"
              className="pb-15 font-bold text-center md:text-left font-audioWide text-shadow-title"
              style={{ fontSize: 'clamp(3rem, 14vw, 6rem)' }}
            >
              TEXATECH
            </h1>

            <p className="text-base font-medium text-center md:text-left fontsize-heading text-shadow-title"> 1st-3rd May, 2025 <br /> at GCETTS Campus</p>
          </div>
          <Link href="/register"> <button className="flex items-center justify-center border-violet-400 border-2 bg-violet-900 rounded-lg px-2 text-white hover:bg-violet-800 hover:text-white text-4xl transition-all duration-300 shadow-sm p-2 py-3 my-4 cursor-pointer hover:scale-110"><QrCode size={35} className="mr-2" />Register Now</button>
          </Link>
        </div>

        <div className="w-full h-1/2 md:w-1/2 md:h-full md:order-first"></div>
      </div>
    </>
  );
};

export default Landing;