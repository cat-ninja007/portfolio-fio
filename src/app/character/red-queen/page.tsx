import React from "react";
import Image from "next/image";
import RedQueenBg from "@/assets/images/character-page/red-queen/bg-red-queen.webp";

const RedQueen = () => {
  return (
    <>
      <div>
        <div className="absolute">
          <Image
            src={RedQueenBg}
            alt="Red Queen Background"
            className="w-full h-screen object-cover"
          />
        </div>


      </div>
    </>
  )
};

export default RedQueen;