import React from "react";
import Image from "next/image";
// Full Body Image
import JesterPoseFront from "@/assets/images/character-page/chrono-carnival/jester/jester-dynamic-pose-1.webp";
import JesterPoseFront2 from "@/assets/images/character-page/chrono-carnival/jester/jester-dynamic-pose-2.webp";
import JesterFront from "@/assets/images/character-page/chrono-carnival/jester/jester-front.webp";
import JesterPoseLeft from "@/assets/images/character-page/chrono-carnival/jester/jester-left.webp";
import JesterPoseBack from "@/assets/images/character-page/chrono-carnival/jester/jester-back.webp";
import JesterPoseRight from "@/assets/images/character-page/chrono-carnival/jester/jester-right.webp";

// Expression
import JesterPoseMad from "@/assets/images/character-page/chrono-carnival/jester/jester-mad.webp";
import JesterPoseShocked from "@/assets/images/character-page/chrono-carnival/jester/jester-shocked.webp";
import JesterPoseHappy from "@/assets/images/character-page/chrono-carnival/jester/jester-happy.webp";
import JesterPoseCried from "@/assets/images/character-page/chrono-carnival/jester/jester-cried.webp";

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
            <h2 className="uppercase text-4xl font-bold text-white pb-6">
              Jester
            </h2>
            <p className="text-white text-xl font-bold">Personality:</p>
            <p className="text-white text-xl text-center">
              Energetic, Cheerful, Older Sister, like to learn new things
            </p>
          </div>
        </div>
        <div className="h-screen overflow-y-auto ml-[24%] overflow-x-hidden">
          <div className="h-screen relative">
            <div className="relative mb-20">
              <div className="grid grid-cols-2 px-8 pt-6">
                <Image
                  src={JesterPoseFront}
                  alt="JesterPoseFront"
                  className="w-full h-full object-contain p-6"
                />
                <div>
                  <p className="text-2xl pt-8">
                    <b>Story board: </b>Jester is the second oldest recruitment,
                    she like to play with kids and mesmerize them with new
                    tricks and surprises. she also like to tell them stories,
                    nor hear their own stories of whishes and dreams.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 px-8 ">
                <div>
                  <p className="text-2xl">
                    <b>Character Line: </b>
                    “I like to perform new tricks for the kids and audience, it
                    makes me feel like i brought them joy and dreams of
                    inspiration”
                  </p>
                </div>
                <Image
                  src={JesterPoseFront2}
                  alt="JesterPoseFront2"
                  className="w-full h-full object-contain absolute p-20 top-[25%] left-[25%]"
                />
              </div>
            </div>

            <div className="flex h-1/2">
              <div className="relative w-[80%]">
                <Image
                  src={JesterFront}
                  alt="JesterFront"
                  className="w-full h-full pt-6"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="0% 50%"
                />
              </div>
              <div className="relative w-[80%]">
                <Image
                  src={JesterPoseLeft}
                  alt="JesterPoseLeft"
                  className="w-full h-full pt-6"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="-50% 50%"
                />
              </div>
              <div className="relative w-[80%]">
                <Image
                  src={JesterPoseBack}
                  alt="JesterPoseBack"
                  className="w-full h-full pt-6"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="20% 50%"
                />
              </div>
              <div className="relative w-[80%]">
                <Image
                  src={JesterPoseRight}
                  alt="JesterPoseRight"
                  className="w-full h-full pt-6"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="-20% 50%"
                />
              </div>
              
            </div>

            <div className="grid grid-cols-4 h-1/2 px-8">
              <Image
                src={JesterPoseMad}
                alt="JesterPoseMad"
                className="w-full h-full object-contain"
              />
              <Image
                src={JesterPoseHappy}
                alt="JesterPoseHappy"
                className="w-full h-full object-contain"
              />
              <Image
                src={JesterPoseCried}
                alt="JesterPoseCried"
                className="w-full h-full object-contain"
              />
              <Image
                src={JesterPoseShocked}
                alt="JesterPoseShocked"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jester;
