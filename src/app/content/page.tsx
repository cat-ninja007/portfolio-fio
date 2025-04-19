import Link from "next/link";
import React from "react";
import Image from "next/image";

import RedBackground from "@/assets/images/bg_front_cover.png";
import DiamondPattern from "@/assets/images/bg_diamond_pattern.png";


const ContentPage = () => {
  return (
    <>
      <div className="relative">
        <div className="h-screen relative w-screen z-0">
          <Image
            src={RedBackground}
            alt="RedBackground"
            layout="fill"
            objectFit="cover"
          />
          <div className="h-screen relative w-screen z-10 flex items-center">
            <Image
              src={DiamondPattern}
              alt="DiamondPattern"
              layout="fill"
              objectFit="cover"
            />
            <div className="title absolute top-[10%] left-[20%]">
              <h1 className="uppercase text-7xl">Content</h1>
            </div>
            <div className="card-container border-2 border-white h-[80%] flex items-center">
              <Link href="/about" className="relative left-[10%] cursor hover:transform hover:-translate-y-7 transition-transform duration-300 ease-in-out">
                <div className="w-64 h-96 border-2 bg-yellow-500"></div>
              </Link>
              <Link href="/illustration" className="relative -left-[5%] top-[10%] cursor hover:transform hover:-translate-y-7 transition-transform duration-300 ease-in-out">
                <div className="w-64 h-96 border-2 bg-blue-500 rotate-8"></div>
              </Link>
              <Link href="/character" className="relative -left-[15%] top-[20%] cursor hover:transform hover:-translate-y-7 transition-transform duration-300 ease-in-out">
                <div className="w-64 h-96 border-2 bg-green-500  rotate-14"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <h1>This is Content Page</h1>
      <Link href="/about">
        <div className="w-[64px] h-[64px] bg-red-600"></div>'
      </Link>
      <Link href="/illustration">
        <div className="w-[64px] h-[64px] bg-pink-600"></div>'
      </Link>
      <Link href="/character">
        <div className="w-[64px] h-[64px] bg-purple-600"></div>'
      </Link> */}
    </>
  );
};

export default ContentPage;
