import React from "react";
import Image from "next/image";

import AliciaPoseFront from "@/assets/images/character-page/chrono-carnival/alicia/Alicia-pose-front.webp";
import AliciaLeft from "@/assets/images/character-page/chrono-carnival/alicia/Alicia-left.webp";
import AliciaBack from "@/assets/images/character-page/chrono-carnival/alicia/Alicia-back.webp";
import AliciaRight from "@/assets/images/character-page/chrono-carnival/alicia/Alicia-right.webp";

import AliciaHappy from "@/assets/images/character-page/chrono-carnival/alicia/Alicia-happy.webp";
import AliciaMad from "@/assets/images/character-page/chrono-carnival/alicia/Alicia-mad.webp";
import AliciaSad from "@/assets/images/character-page/chrono-carnival/alicia/Alicia-sad.webp";
const Alicia = () => {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <div className="w-[24%] h-screen bg-[#545454] fixed">
          <div className="flex flex-col justify-center items-center h-full px-8">
            <h1 className="text-white uppercase text-9xl font-extrabold pb-6">
              #3
            </h1>
            <h2 className="uppercase text-4xl font-bold text-white pb-6">
              Alicia
            </h2>
            <p className="text-white text-xl font-bold">Personality:</p>
            <p className="text-white text-xl text-center">
              Elegant, demure, she’s close knit with master show and jester
            </p>
          </div>
        </div>
        <div className="h-screen overflow-y-auto ml-[24%] overflow-x-hidden">
          <div className="h-screen relative">
            <div className="relative mb-20">
              <div className="grid grid-cols-2 px-8 pt-6">
                <Image
                  src={AliciaPoseFront}
                  alt="AliciaPoseFront"
                  className="w-full h-full object-contain p-6"
                />
                <div>
                  <p className="text-2xl pt-8">
                    <b>Story board : Twin 1 (Alicia) </b>she likes tea party and
                    performing new tricks especially that includes dancing and
                    looks elegant, also like’s to spend time with Mastershow and
                    jester, they’re like family
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 px-8 ">
                <div>
                  <p className="text-2xl">
                    <b>Character Line: </b>“ i like to spend time with master
                    and jessy, hearing their new story, teavhing us new things
                    and they also praised me when i perform new tricks ”
                  </p>
                </div>
                <Image
                  src={AliciaPoseFront}
                  alt="AliciaPoseFront"
                  className="w-full h-full object-contain absolute p-20 top-[25%] left-[25%]"
                />
              </div>
            </div>

            <div className="flex h-1/2">
              <div className="relative w-[80%]">
                <Image
                  src={AliciaPoseFront}
                  alt="AliciaPoseFront"
                  className="w-[50%] h-full pt-6"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="-50% 50%"
                />
              </div>
              <div className="relative w-[80%]">
                <Image
                  src={AliciaLeft}
                  alt="AliciaLeft"
                  className="w-full h-full pt-6"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="80% 50%"
                />
              </div>
              <div className="relative w-[80%]">
                <Image
                  src={AliciaBack}
                  alt="AliciaBack"
                  className="w-full h-full pt-6"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="90% 50%"
                />
              </div>
              <div className="relative w-[80%]">
                <Image
                  src={AliciaRight}
                  alt="AliciaRight"
                  className="w-full h-full pt-6"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="90% 50%"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 w-[75%] h-1/2 px-8">
              <Image
                src={AliciaSad}
                alt="AliciaSad"
                className="w-full h-full object-contain"
              />

              <Image
                src={AliciaMad}
                alt="MastershowPoseFront"
                className="w-full h-full object-contain"
              />

              <Image
                src={AliciaHappy}
                alt="AliciaHappy"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alicia;
