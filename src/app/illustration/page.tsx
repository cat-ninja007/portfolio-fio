import React from 'react'
import Image from 'next/image'
import IllustrationImage from "@/assets/images/illustration/illustration.png"
import IllustrationImage2 from "@/assets/images/illustration/illustration-page2.png"
import IllustrationImage3 from "@/assets/images/illustration/illustration-page3.png"

const IllustrationPage = () => {
  return (
    <>
      <div>
        <Image 
          src={IllustrationImage}
          alt="About Me"
          className="w-full h-screen object-cover"
          priority
        />
      </div>
      <div>
        <Image 
          src={IllustrationImage2}
          alt="About Me"
          className="w-full h-screen object-cover"
          priority
        />
      </div>
      <div>
        <Image 
          src={IllustrationImage3}
          alt="About Me"
          className="w-full h-screen object-cover"
          priority
        />
      </div>
    </>
  )
}

export default IllustrationPage