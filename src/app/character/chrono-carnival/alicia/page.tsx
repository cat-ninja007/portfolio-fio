import React from "react";
import Image from "next/image";
import AliciaAll from "@/assets/images/alicia-all.png";
import AliciaDescription from "@/assets/images/alicia-description.png";

const Alicia = () => {
  return (
    <>
      {/* <h1>This is Character Chrono Carnival</h1> */}
      <div className="flex h-screen overflow-hidden">
      <div className="w-[24%] h-screen bg-[#545454] fixed">
        <div className="flex flex-col justify-center items-center h-full px-8">
          <h1 className="text-white uppercase text-9xl font-extrabold pb-6">
            #3
          </h1>
          <h2 className="uppercase text-5xl font-extrabold text-white pb-6">
            Alicia
          </h2>
          <p className="text-white text-2xl font-bold">Personality:</p>
          <p className="text-white text-2xl text-center">
            Elegant, demure, she's close knit with master show and jester
          </p>
        </div>
      </div>
      <div className="flex-grow h-screen overflow-y-auto ml-[24%]">
        <div className="h-screen relative">
            <Image
              src={AliciaAll}
              alt="AliciaAll"
              layout="fill"
              objectFit="contain"
            />
        </div>
        <div className="h-screen relative">
            <Image
              src={AliciaDescription}
              alt="AliciaDescription"
              layout="fill"
              objectFit="contain"
            />
        </div>
      </div>
    </div>
    </>
  );
};

export default Alicia;
