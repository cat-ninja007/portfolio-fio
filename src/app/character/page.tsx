import Link from 'next/link'
import React from 'react'

const CharacterPage = () => {
  return (
    <>
      <h1>This is Character Page</h1>
      <Link href="/character/chrono-carnival">
        <div className="w-[64px] h-[64px] bg-green-600"></div>
      </Link>
      <Link href="/character/red-queen">
        <div className="w-[64px] h-[64px] bg-red-600"></div>
      </Link>
      <Link href="/character/chrono-scatters-projects">
        <div className="w-[64px] h-[64px] bg-pink-600"></div>
      </Link>
      <Link href="/character/sentivels">
        <div className="w-[64px] h-[64px] bg-purple-600"></div>
      </Link>
      
    </>
  )
}

export default CharacterPage