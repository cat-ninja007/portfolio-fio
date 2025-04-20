import React from "react";
import Image from "next/image";
import ChronoScatterPage from "@/assets/images/character-page/chrono-scatters-project/chrono-scatters-page.png"
import ChronoScatterPage2 from "@/assets/images/character-page/chrono-scatters-project/chrono-scatters-page2.png"
import ChronoScatterPage3 from "@/assets/images/character-page/chrono-scatters-project/chrono-scatters-page3.png"
import ChronoScatterPage4 from "@/assets/images/character-page/chrono-scatters-project/chrono-scatters-page4.png"

const ChronoScattersProject = () => {
  return (
    <>
      <div>
        <Image 
          src={ChronoScatterPage}
          alt="About Me"
          className="w-full h-screen object-cover"
          priority
        />
      </div>
      <div>
        <Image 
          src={ChronoScatterPage2}
          alt="About Me"
          className="w-full h-screen object-cover"
          priority
        />
      </div>
      <div>
        <Image 
          src={ChronoScatterPage3}
          alt="About Me"
          className="w-full h-screen object-cover"
          priority
        />
      </div>
      <div>
        <Image 
          src={ChronoScatterPage4}
          alt="About Me"
          className="w-full h-screen object-cover"
          priority
        />
      </div>
    </>
  )
};

export default ChronoScattersProject;