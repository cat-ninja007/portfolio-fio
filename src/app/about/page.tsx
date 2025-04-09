import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProfileImage from "@/assets/images/noimageavailable.webp"
import { FaPhone, FaEnvelope, FaInstagram, FaTwitter } from 'react-icons/fa'

const AboutPage = () => {
  return (
    <>
      {/* Main Container */}
      <div className='bg-[#eeefed] h-screen px-10 flex items-center'>

        {/* Image Container */}
        {/* <div> */}
        <div className="h-[80%] w-[28%] relative">
            <Image
              src={ProfileImage}
              alt="ProfileImage"
              layout="fill"
              objectFit="cover"
              className='rounded-4xl'
            />
        </div>
        {/* </div> */}

        {/* Content Container */}
        <div>

          {/* Top Content Container */}
          <div>

            {/* Top Left Content Container */}
            <div>
              {/* Introduction */}
              <div>
                <h2 className='text-[#323642] text-8xl font-extrabold'>Hello!</h2>
                <p>My name is Fiona Yulanda (Piok). My strengths are Visual Development, Illustration and Concept art. I love creating and storytelling. I look forward to contributing my creativity and skills to innovative projects.</p>
                <p>Hope you enjoy my portfolio!</p>
              </div>

              {/* Education */}
              <div>
                <p>2020 - 2024: Ho Chi Minh University of Fine Art</p>
              </div>
            </div>

            {/* Top Right Content Container */}
            <div></div>
          </div>

          {/* Bottom Content Container */}
          <div className='flex gap-8'>
            <div className='flex items-center'>
              <FaPhone className='text-white bg-[#323642] p-2 text-3xl rounded-full' />
              <p className='pl-2'>0789 368 731</p>
            </div>
            <div className='flex items-center'>
              <FaEnvelope className='text-white bg-[#323642] p-2 text-3xl rounded-full' />
              <p className='pl-2'>fioyulanda@gmail.com</p>
            </div>
            <div className='flex items-center'>
              <FaInstagram className='text-white bg-[#323642] p-2 text-3xl rounded-full' />
              <p className='pl-2'>@fioyulanda</p>
            </div>
            <div className='flex items-center'>
              <FaTwitter className='text-white bg-[#323642] p-2 text-3xl rounded-full' />
              <p className='pl-2'>@fioyulanda</p>
            </div>
          </div>

        </div>
      
      </div>
    </>
  )
}

export default AboutPage