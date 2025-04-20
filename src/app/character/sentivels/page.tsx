import React from "react";
import Image from "next/image";
import SentivelsPage from "@/assets/images/character-page/sentivels/sentivels-page.png"
import SentivelsPage2 from "@/assets/images/character-page/sentivels/sentivels-page2.png"
import SentivelsPage3 from "@/assets/images/character-page/sentivels/sentivels-page3.png"
import SentivelsPage4 from "@/assets/images/character-page/sentivels/sentivels-page4.png"
import SentivelsPage5 from "@/assets/images/character-page/sentivels/sentivels-page5.png"
import SentivelsPage6 from "@/assets/images/character-page/sentivels/sentivels-page6.png"
const Sentivels = () => {
  return (
    <>
      <div>
        <Image 
          src={SentivelsPage}
          alt="About Me"
          className="w-full h-screen object-cover"
          priority
        />
      </div>
      <div>
        <Image 
          src={SentivelsPage2}
          alt="About Me"
          className="w-full h-screen object-cover"
          priority
        />
      </div>
      <div>
        <Image 
          src={SentivelsPage3}
          alt="About Me"
          className="w-full h-screen object-cover"
          priority
        />
      </div>
      <div>
        <Image 
          src={SentivelsPage4}
          alt="About Me"
          className="w-full h-screen object-cover"
          priority
        />
      </div>
      <div>
        <Image 
          src={SentivelsPage5}
          alt="About Me"
          className="w-full h-screen object-cover"
          priority
        />
      </div>
      <div>
        <Image 
          src={SentivelsPage6}
          alt="About Me"
          className="w-full h-screen object-cover"
          priority
        />
      </div>
    </>
  )
};

export default Sentivels;