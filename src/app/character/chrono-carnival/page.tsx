import Link from "next/link";
import React from "react";
import Image from "next/image";
import Mastershow from "@/assets/images/mastershow.png";
import Jester from "@/assets/images/jester.png";
import Alicia from "@/assets/images/alicia.png";
import Alice from "@/assets/images/alice.png";

const CharacterOne = () => {
  return (
    <>
      {/* <h1>This is Character Chrono Carnival</h1> */}
      <div className="flex">
        <div className="w-[24%] h-screen bg-[#b90f1c]">
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
        <div className="w-[19%] h-screen relative">
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
        <div className="w-[23%] h-screen bg-green-600 relative ">
          <Link href="/character/chrono-carnival/jester">
            <div className="absolute w-full h-full z-10 bg-[rgba(0,0,0,0.5)] hover:bg-transparent cursor"></div>
            <Image
              className="cursor"
              src={Jester}
              alt="Jester"
              layout="fill"
              objectFit="cover"
            />
          </Link>
        </div>
        <div className="w-[18%] h-screen bg-orange-600 relative ">
          <Link href="/character/chrono-carnival/alicia">
            <div className="absolute w-full h-full z-10 bg-[rgba(0,0,0,0.5)] hover:bg-transparent cursor"></div>
            <Image
              className="cursor"
              src={Alicia}
              alt="Alicia"
              layout="fill"
              objectFit="cover"
            />
          </Link>
        </div>
        <div className="w-[16%] h-screen bg-pink-600 relative ">
          <Link href="/character/chrono-carnival/alice">
            <div className="absolute w-full h-full z-10 bg-[rgba(0,0,0,0.5)] hover:bg-transparent cursor"></div>
            <Image
              className="cursor"
              src={Alice}
              alt="Alice"
              layout="fill"
              objectFit="cover"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default CharacterOne;
