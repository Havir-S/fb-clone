import Image from 'next/image'
import React from 'react'

const StoryCard = ({src, profile, name}) => {
  return (
    <div className='relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor:pointer overflow-x p-3'>
        <Image
            className='opacity-0 absolute lg:opacity-1 z-2 rounded-full top-10'
            src={profile}
            width={40}
            height={40}
            style={{objectFit: 'cover'}}
        />
        <Image
            className='object-cover rounded-full filter brightness-75 lg:rounded-3xl w-full h-auto'
            src={src}
            fill
        />
        
    </div>
  )
}

export default StoryCard