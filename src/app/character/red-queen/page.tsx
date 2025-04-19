import React from "react";
import Image from "next/image";
import RedQueenPage1 from "@/assets/images/character-page/red-queen/red-queen.png"
import RedQueenPage2 from "@/assets/images/character-page/red-queen/red-queen-page2.png"

const RedQueen = () => {
  return (
    <>
      <div>
        <Image 
          src={RedQueenPage1}
          alt="About Me"
          className="w-full h-screen object-cover"
          priority
        />
      </div>
      <div>
        <Image 
          src={RedQueenPage2}
          alt="About Me"
          className="w-full h-screen object-cover"
          priority
        />
      </div>
    </>
  )
};

export default RedQueen;