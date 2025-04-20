import Link from "next/link";
import React from "react";
import Image from "next/image";

import ListContentPage from "@/assets/images/content-page.png"



const ContentPage = () => {
  return (
    <>
      <div className="relative">
        <div className="flex flex-col pt-64 pl-80 gap-7 h-screen">
          <Link href="/about">
            <div className="w-[300px] h-[100px] rounded-4xl bg-amber-950 hover:cursor hover:bg-amber-800 flex justify-center items-center">
              <p className="text-4xl font-bold text-white">About Me</p>
            </div>
          </Link>
          <Link href="/illustration">
            <div className="w-[300px] h-[100px] rounded-4xl bg-amber-950 hover:cursor hover:bg-amber-800 flex justify-center items-center">
              <p className="text-4xl font-bold text-white">Illustration</p>
            </div>
          </Link>
          <Link href="/character">
            <div className="w-[300px] h-[100px] rounded-4xl bg-amber-950 hover:cursor hover:bg-amber-800 flex justify-center items-center">
              <p className="text-4xl font-bold text-white">Character</p>
            </div>
          </Link>
          
          
        </div>
        <div className="absolute top-0 left-0 right-0 -z-10">
          <Image
            src={ListContentPage}
            alt="About Me"
            className="w-full h-screen object-cover"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default ContentPage;
