import Link from "next/link";
import React from "react";
import Image from "next/image";
import ListCharacterPage from "@/assets/images/character-page/character-page.png";

const CharacterPage = () => {
  return (
    <>
      <div className="relative">
        <div className="flex justify-evenly items-center h-screen pt-[30%]">
          <Link href="/character/chrono-carnival">
            <div className="w-[128px] h-[128px] hover:cursor"></div>
          </Link>
          <Link href="/character/red-queen">
            <div className="w-[128px] h-[128px] hover:cursor"></div>
          </Link>
          <Link href="/character/chrono-scatters-project">
            <div className="w-[128px] h-[128px] hover:cursor"></div>
          </Link>
          <Link href="/character/sentivels">
            <div className="w-[128px] h-[128px] hover:cursor"></div>
          </Link>
        </div>
        <div className="absolute top-0 left-0 right-0 -z-10">
          <Image
            src={ListCharacterPage}
            alt="About Me"
            className="w-full h-screen object-cover"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default CharacterPage;
