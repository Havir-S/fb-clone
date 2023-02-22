import Image from 'next/image'
import React from 'react'

const Contact = ({src, name}) => {
  return (
    <div className='relative flex items-center space-x-3 mb-2 p-2 rounded-xl hover:bg-gray-200 cursor-pointer  '>
        <Image 
            className='rounded-full'
            width={50}
            height={50}
            src={src}
            alt=''
            style={{objectFit: 'cover', height: '50px'}}
        />
        <p>{name}</p>
        <div className='absolute animate-pulse bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full' />
    </div>
  )
}

export default Contact