import React from "react";
import Image from "next/image";
import Link from "next/link";
import JesterAll from "@/assets/images/jester-all.png";
import JesterDescription from "@/assets/images/jester-description.png";

const Jester = () => {
  return (
    <>
      {/* <h1>This is Character Chrono Carnival</h1> */}
      <div className="flex h-screen overflow-hidden">
      <div className="w-[24%] h-screen bg-[#b90f1c] fixed">
        <div className="flex flex-col justify-center items-center h-full px-8">
          <h1 className="text-white uppercase text-9xl font-extrabold pb-6">
            #2
          </h1>
          <h2 className="uppercase text-5xl font-extrabold text-white pb-6">
            Jester
          </h2>
          <p className="text-white text-2xl font-bold">Personality:</p>
          <p className="text-white text-2xl text-center">
            Energetic, older sister, like to learn new tricks
          </p>
        </div>
      </div>
      <div className="flex-grow h-screen overflow-y-auto ml-[24%]"> {/* Use flex-grow and ml */}
        <div className="h-screen relative">
            <Image
              src={JesterAll}
              alt="JesterAll"
              layout="fill"
              objectFit="contain"
            />
        </div>
        <div className="h-screen relative">
            <Image
              src={JesterDescription}
              alt="JesterDescription"
              layout="fill"
              objectFit="contain"
            />
        </div>
      </div>
    </div>
    </>
  );
};

export default Jester;
