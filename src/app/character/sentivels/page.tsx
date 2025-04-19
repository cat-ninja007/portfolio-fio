"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SentivelsBg from "@/assets/images/character-page/sentivels/starry-night-portfo-bg.png";
import SentivelsStars from "@/assets/images/character-page/sentivels/stars-page.png";
import SentivelsTitle from "@/assets/images/character-page/sentivels/sentivels-title.png";
import SentivelsBook from "@/assets/images/character-page/sentivels/sentivels-book.png";
import SentivelsBookHolder from "@/assets/images/character-page/sentivels/book-holder-assets.png";

const Sentivels = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/character/sentivels/sentivels-details");
  };
  return (
    <>
      <div className="relative">
        <div className="absolute -z-30 left-0 right-0">
          <Image
            src={SentivelsBg}
            alt="Sentivels Stars"
            className="w-full h-screen object-cover"
          />
        </div>
        <div className="absolute -z-20 left-0 right-0 -top-10 h-screen">
          <Image
            src={SentivelsStars}
            alt="Sentivels Stars"
            className="w-full h-screen object-cover scale-75 "
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src={SentivelsTitle}
            alt="Sentivels Title"
            className="object-cover scale-70 mt-10"
          />
          <div className="cursor -mt-[25%]" onClick={handleClick}>
            <Image
              src={SentivelsBook}
              alt="Sentivels Book"
              className="object-cover cursor hover:scale-60 transition-transform duration-300 scale-55"
            />
          </div>
          <Image
            src={SentivelsBookHolder}
            alt="Sentivels Book Holder"
            className="object-cover scale-65 -mt-[20%] ml-[2%] rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Sentivels;
