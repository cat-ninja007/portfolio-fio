import React from 'react'
import Image from 'next/image'
import AboutImage from "@/assets/images/aboutme/about-me.png"

const AboutPage = () => {
  return (
    <>
      <div>
        <Image 
          src={AboutImage}
          alt="About Me"
          className="w-full h-screen object-cover"
          priority
        />
      </div>
    </>
  )
}

export default AboutPage