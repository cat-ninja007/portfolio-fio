import Link from 'next/link';
import React from 'react'

const ContentPage = () => {
  return (
    <>
      <h1>This is Content Page</h1>
      <Link href="/about">
        <div className="w-[64px] h-[64px] bg-red-600"></div>'
      </Link>
      <Link href="/illustration">
        <div className="w-[64px] h-[64px] bg-pink-600"></div>'
      </Link>
      <Link href="/character">
        <div className="w-[64px] h-[64px] bg-purple-600"></div>'
      </Link>
    </>
  )
}

export default ContentPage;