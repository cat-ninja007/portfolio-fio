import Link from "next/link";
import React from "react";
import Image from "next/image";
import Mastershow from "@/assets/images/character-page/chrono-carnival/mastershow/mastershow-front.webp";
import Jester from "@/assets/images/character-page/chrono-carnival/jester/jester-dynamic-pose-1.webp";
import Alicia from "@/assets/images/character-page/chrono-carnival/alicia/Alicia-pose-front.webp";
import Alice from "@/assets/images/character-page/chrono-carnival/alice/Alice-front.webp";

const CharacterOne = () => {
  return (
    <>
      {/* <h1>This is Character Chrono Carnival</h1> */}
      <div className="grid grid-cols-4">
        <div className="h-screen bg-[#b90f1c]">
          <div className="flex flex-col justify-center h-screen pl-5">
            <h1 className="text-white uppercase text-6xl font-extrabold pb-10">
              Chrono <br />
              Carnival
            </h1>
            <p className="text-white font-bold pl-5">
              by: Fiona Yulanda Wiyanto
            </p>
          </div>
        </div>
        <div className="col-span-3 h-screen relative">
          <div className="grid grid-cols-4">
            <div className="h-screen relative">
              <Link href="/character/chrono-carnival/mastershow">
                <div className="absolute w-full h-full z-10 bg-[rgba(0,0,0,0.5)] hover:bg-transparent cursor"></div>
                <Image
                  src={Mastershow}
                  alt="Mastershow"
                  layout="fill"
                  objectFit="cover"
                  className="cursor"
                />
              </Link>
            </div>
            <div className="h-screen relative">
              <Link href="/character/chrono-carnival/jester">
                <div className="absolute w-full h-full z-10 bg-[rgba(0,0,0,0.5)] hover:bg-transparent cursor"></div>
                <Image
                  src={Jester}
                  alt="Jester"
                  layout="fill"
                  objectFit="cover"
                  className="cursor"
                  objectPosition="63% 50%"
                />
              </Link>
            </div>
            <div className="h-screen relative">
              <Link href="/character/chrono-carnival/alicia">
                <div className="absolute w-full h-full z-10 bg-[rgba(0,0,0,0.5)] hover:bg-transparent cursor"></div>
                <Image
                  src={Alicia}
                  alt="Alicia"
                  layout="fill"
                  objectFit="cover"
                  className="cursor"
                  objectPosition="18% 50%"
                />
              </Link>
            </div>
            <div className="h-screen relative">
              <Link href="/character/chrono-carnival/alice">
                <div className="absolute w-full h-full z-10 bg-[rgba(0,0,0,0.5)] hover:bg-transparent cursor"></div>
                <Image
                  src={Alice}
                  alt="Alice"
                  layout="fill"
                  objectFit="cover"
                  className="cursor"
                  objectPosition="66% 50%"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default CharacterOne;
