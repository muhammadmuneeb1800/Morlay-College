import React from 'react'
import Image from 'next/image'




export default function Card3({ itemsthree }) {
  return (
    <>
<div className="flex overflow-x-auto lg:space-x-10 space-x-8 lg:justify-center my-20">
      {itemsthree.map((item, index) => (
        <div key={index} className="relative flex-none mx-2 hover:shadow-2xl cursor-pointer transform hover:scale-105 transition-transform duration-300">
          <Image src={item.imageSrc}width={450} alt={item.text} className="object-cover shadow-md rounded-b-lg" />
          {/* <div className="absolute inset-0 flex items-center px-2 text-white text-xl pt-28 text-start font-semibold">
            {item.text}
          </div> */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-black"></div>
        </div>
      ))}
    </div>
    </>
  )
}
