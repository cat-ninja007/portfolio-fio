import React from "react";
import Image from "next/image";

// Full Body Image
import MastershowPoseFront from "@/assets/images/character-page/chrono-carnival/mastershow/mastershow-front.webp";
import MastershowPoseFront2 from "@/assets/images/character-page/chrono-carnival/mastershow/mastershow-front-2.webp";
import MastershowPoseLeft from "@/assets/images/character-page/chrono-carnival/mastershow/mastershow-left.webp";
import MastershowPoseBack from "@/assets/images/character-page/chrono-carnival/mastershow/mastershow-back.webp";
import MastershowPoseRight from "@/assets/images/character-page/chrono-carnival/mastershow/mastershow-right.webp";
// Expression
import MastershowCwing from "@/assets/images/character-page/chrono-carnival/mastershow/mastershow-cwing.webp";
import MastershowMad from "@/assets/images/character-page/chrono-carnival/mastershow/mastershow-mad.webp";
import MastershowNyehehe from "@/assets/images/character-page/chrono-carnival/mastershow/mastershow-nyehehe.webp";
import MastershowShocked from "@/assets/images/character-page/chrono-carnival/mastershow/mastershow-shocked.webp";
import MastershowTvt from "@/assets/images/character-page/chrono-carnival/mastershow/mastershow-TvT.webp";

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
            <h2 className="uppercase text-4xl font-bold text-white pb-6">
              Mastershow
            </h2>
            <p className="text-white text-xl font-bold">Personality:</p>
            <p className="text-white text-xl text-center">
              Mystery, mischieve, full of surprises
            </p>
          </div>
        </div>
        <div className="h-screen overflow-y-auto ml-[24%] overflow-x-hidden">
          <div className="h-screen relative">
            <div className="relative mb-20">
              <div className="grid grid-cols-2 px-8 pt-6">
                <Image
                  src={MastershowPoseFront2}
                  alt="MastershowPoseFront"
                  className="w-full h-full object-contain p-6"
                />
                <div>
                  <p className="text-2xl pt-8">
                    <b>Story board: </b>mastershow is the owner of the carnival,
                    he used to perform new trick but now he&apos;s more to handling
                    theh recruitment and show. As time passes by the carnival
                    felt like his own family
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 px-8 ">
                <div>
                  <p className="text-2xl">
                    <b>Character Line: </b>&quot;I&apos;ve been with this family for so
                    long and I can&apos;t wait to see more to join and show up new
                    surprises&quot;
                  </p>
                </div>
                <Image
                  src={MastershowPoseFront}
                  alt="MastershowPoseFront"
                  className="w-full h-full object-contain absolute p-20 top-[25%] left-[25%]"
                />
              </div>
            </div>

            <div className="grid grid-cols-4 h-1/2 px-8">
              <Image
                src={MastershowPoseFront}
                alt="MastershowPoseFront"
                className="w-full h-full object-contain pt-6 "
              />
              <Image
                src={MastershowPoseLeft}
                alt="MastershowPoseFront"
                className="w-full h-full object-contain "
              />
              <Image
                src={MastershowPoseBack}
                alt="MastershowPoseFront"
                className="w-full h-full object-contain pt-6"
              />
              <Image
                src={MastershowPoseRight}
                alt="MastershowPoseFront"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="grid grid-cols-3 w-[75%] h-1/2 px-8">
              <Image
                src={MastershowCwing}
                alt="MastershowPoseFront"
                className="w-full h-full object-contain"
              />
              <Image
                src={MastershowMad}
                alt="MastershowPoseFront"
                className="w-full h-full object-contain"
              />
              <Image
                src={MastershowNyehehe}
                alt="MastershowPoseFront"
                className="w-full h-full object-contain"
              />
              <Image
                src={MastershowShocked}
                alt="MastershowPoseFront"
                className="w-full h-full object-contain"
              />
              <Image
                src={MastershowTvt}
                alt="MastershowPoseFront"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mastershow;
