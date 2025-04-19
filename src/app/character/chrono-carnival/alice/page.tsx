import React from "react";
import Image from "next/image";

import AliceFront from "@/assets/images/character-page/chrono-carnival/alice/Alice-front.webp";
import AliceLeft from "@/assets/images/character-page/chrono-carnival/alice/Alice-left.webp";
import AliceBack from "@/assets/images/character-page/chrono-carnival/alice/Alice-back.webp";
import AliceRight from "@/assets/images/character-page/chrono-carnival/alice/Alice-right.webp";

import AliceHappy from "@/assets/images/character-page/chrono-carnival/alice/Alice-happy.webp";
import AliceMad from "@/assets/images/character-page/chrono-carnival/alice/Alice-mad.webp";
import AliceSad from "@/assets/images/character-page/chrono-carnival/alice/Alice-sad.webp";

const Alice = () => {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <div className="w-[24%] h-screen bg-[#545454] fixed">
          <div className="flex flex-col justify-center items-center h-full px-8">
            <h1 className="text-white uppercase text-9xl font-extrabold pb-6">
              #4
            </h1>
            <h2 className="uppercase text-4xl font-bold text-white pb-6">
              Alice
            </h2>
            <p className="text-white text-xl font-bold">Personality:</p>
            <p className="text-white text-xl text-center">
              Energetic, Younger sister, like to learn new tricks
            </p>
          </div>
        </div>
        <div className="h-screen overflow-y-auto ml-[24%] overflow-x-hidden">
          <div className="h-screen relative">
            <div className="relative mb-20">
              <div className="grid grid-cols-2 px-8">
                <div className="relative">
                  <Image
                    src={AliceFront}
                    alt="AliceFront"
                    className="w-full h-full scale-125 relative -left-14 -top-6"

                  />
                </div>
                <div>
                  <p className="text-2xl pt-8">
                    <b>Story board : Twin 1 (Alicia) </b>she like to perform in
                    a bit of more to attraction and acrobatic, she like it when
                    mastershow bringing new stuff and jester bring exciting
                    story of adventure.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 px-8 ">
                <div>
                  <p className="text-2xl">
                    <b>Character Line: </b>“ iii love it when master brings back
                    new stuff, it all looks awesome yet i dont know what’s it
                    for. OH OH and sis jessy is THE BEST when she tells us her
                    adventure and performance they’re awasomeee”
                  </p>
                </div>
                <Image
                  src={AliceFront}
                  alt="AliceFront"
                  className="w-full h-full object-contain absolute p-20 top-[25%] left-[25%]"
                />
              </div>
            </div>

            <div className="flex h-1/2">
              <div className="relative w-[100%]">
                <Image
                  src={AliceFront}
                  alt="AliceFront"
                  className="w-full h-full scale-120"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="100% 50%"
                />
              </div>
              <div className="relative w-[80%]">
                <Image
                  src={AliceLeft}
                  alt="AliceLeft"
                  className="w-full h-full pt-6"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="80% 50%"
                />
              </div>
              <div className="relative w-[80%]">
                <Image
                  src={AliceBack}
                  alt="AliceBack"
                  className="w-full h-full pt-6"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="90% 50%"
                />
              </div>
              <div className="relative w-[80%]">
                <Image
                  src={AliceRight}
                  alt="AliceRight"
                  className="w-full h-full pt-6"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="90% 50%"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 w-[75%] h-1/2 px-8">
              <Image
                src={AliceHappy}
                alt="AliceHappy"
                className="w-full h-full object-contain"
              />
              <Image
                src={AliceSad}
                alt="AliceSad"
                className="w-full h-full object-contain"
              />
              <Image
                src={AliceMad}
                alt="AliceMad"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alice;
