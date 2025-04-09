import React from "react";
import Image from "next/image";
import MastershowAll from "@/assets/images/mastershow-all.png";
import MastershowDescription from "@/assets/images/mastershow-description.png";

const Mastershow = () => {
  return (
    <>
      {/* <h1>This is Character Chrono Carnival</h1> */}
      <div className="flex h-screen overflow-hidden">
      <div className="w-[24%] h-screen bg-[#b90f1c] fixed">
        <div className="flex flex-col justify-center items-center h-full px-8">
          <h1 className="text-white uppercase text-9xl font-extrabold pb-6">
            #1
          </h1>
          <h2 className="uppercase text-5xl font-extrabold text-white pb-6">
            Mastershow
          </h2>
          <p className="text-white text-2xl font-bold">Personality:</p>
          <p className="text-white text-2xl text-center">
            Mystery, mischieve, full of surprises
          </p>
        </div>
      </div>
      <div className="flex-grow h-screen overflow-y-auto ml-[24%]">
        <div className="h-screen relative">
            <Image
              src={MastershowAll}
              alt="MastershowAll"
              layout="fill"
              objectFit="contain"
            />
        </div>
        <div className="h-screen relative">
            <Image
              src={MastershowDescription}
              alt="MastershowDescription"
              layout="fill"
              objectFit="contain"
            />
        </div>
      </div>
    </div>
    </>
  );
};

export default Mastershow;
