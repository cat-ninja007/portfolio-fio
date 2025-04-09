import React from "react";
import Image from "next/image";
import Link from "next/link";
import AliceAll from "@/assets/images/alice-all.png";
import AliceDescription from "@/assets/images/alice-description.png";

const Alice = () => {
  return (
    <>
      {/* <h1>This is Character Chrono Carnival</h1> */}
      <div className="flex h-screen overflow-hidden">
      <div className="w-[24%] h-screen bg-[#545454] fixed">
        <div className="flex flex-col justify-center items-center h-full px-8">
          <h1 className="text-white uppercase text-9xl font-extrabold pb-6">
            #4
          </h1>
          <h2 className="uppercase text-5xl font-extrabold text-white pb-6">
            Alice
          </h2>
          <p className="text-white text-2xl font-bold">Personality:</p>
          <p className="text-white text-2xl text-center">
            Energetic, Younger sister, like to learn new tricks
          </p>
        </div>
      </div>
      <div className="flex-grow h-screen overflow-y-auto ml-[24%]">
        <div className="h-screen relative">
            <Image
              src={AliceAll}
              alt="AliceAll"
              layout="fill"
              objectFit="contain"
            />
        </div>
        <div className="h-screen relative">
            <Image
              src={AliceDescription}
              alt="AliceDescription"
              layout="fill"
              objectFit="contain"
            />
        </div>
      </div>
    </div>
    </>
  );
};

export default Alice;
