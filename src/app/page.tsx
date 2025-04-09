import Image from "next/image";
import Link from "next/link";
import WelcomeBackground from "@/assets/images/homepage.png";
import RedBackground from "@/assets/images/bg_front_cover.png";
import Curtain from "@/assets/images/curtain.png";
import DiamondPattern from "@/assets/images/bg_diamond_pattern.png";
import GoldenClock from "@/assets/images/golden_clock.png";
import Frame from "@/assets/images/frame.png";
import HomepageText from "./components/HomepageText";

const Home = () => {
  return (
    <>
      <div className="relative">
        <div className="h-screen relative w-screen z-0">
          <Image
            src={RedBackground}
            alt="RedBackground"
            layout="fill"
            objectFit="cover"
          />
          <div className="h-screen relative w-screen z-10">
            <Image
              src={DiamondPattern}
              alt="DiamondPattern"
              layout="fill"
              objectFit="cover"
            />
            <div className="h-screen relative w-screen z-10">
              <Image
                src={Curtain}
                alt="Curtain"
                layout="fill"
                objectFit="cover"
              />
              <div className="relative -z-10 w-[42%] top-[58%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] ">
                <Image src={GoldenClock} alt="GoldenClock" />
              </div>
              <div className="relative z-10 w-[70%] -top-[80%] left-[50%] transform -translate-x-[50%] translate-y-[50%]">
                <Image src={Frame} alt="Frame" />
              </div>
            </div>
            <div className="relative z-10 -top-[55%] ">
              <p className="text-center text-3xl text-[#bf9b6a]">portfolio</p>
            </div>
            <div className="relative z-10 -top-[54%] ">
              <p className="text-center text-7xl text-[#bf9b6a]">
                Between Crown
              </p>
              <p className="text-center text-7xl text-[#bf9b6a]">& Heart</p>
              <div className="flex justify-center mt-6">
                <Link href="/content" >
                  <div className="w-12 h-12 hover:bg-red-400 hover:mask-b-from-10% rounded-full cursor"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <h3 className="absolute text-center text-white text-4xl top-[56%] left-[20%]
        lg:text-5xl lg:top-[50%] lg:left-[48%]
        "
        >portfolio</h3> */}
      {/* <div className="absolute top-[60%] left-[38%] pb-20">
          <h2 className="relative text-center text-white font-bold text-7xl ">Between Crown <br/> & Heart</h2>
          <Link href="/content">
            <div className="relative w-20 h-24 mt-10 left-[40%]"></div>
          </Link>
        </div> */}
      {/* <Link href="/content">
          <div className="w-20 h-20 border-white border-4 absolute top-[79%] left-[51%] cursor"></div>'
        </Link> */}
    </>
  );
};

export default Home;
