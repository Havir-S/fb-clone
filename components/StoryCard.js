import Image from 'next/image'
import React from 'react'

const StoryCard = ({src, profile, name}) => {
  return (
    <div className='cursor-pointer relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 overflow-x p-1 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse'>
        <Image
            className='opacity-0 absolute lg:opacity-100 rounded-full z-50 top-3'
            src={profile}
            width={40}
            height={40}
            style={{ width: '40px', height: '40px',  objectFit: 'cover'}}
            alt=''
        />
        <Image
            className='object-cover rounded-full filter brightness-75 lg:rounded-3xl w-full h-auto'
            src={src}
            fill
            alt=''
        />
    </div>
  )
}

export default StoryCard