import Image from 'next/image'
import React from 'react'
import {ChatAltIcon, ThumbUpIcon } from '@heroicons/react/solid';
import ModalImage from "react-modal-image";

const Post = ({name, message, email, timestamp, image, postImage, openPic}) => {
  return (
    <div className='flex flex-col'>
        <div className={`p-5 bg-white mt-5 ${postImage ? 'rounded-t-2xl' : 'rounded-2xl' } shadow-sm`}>
            <div className='flex items-center space-x-2'>
                <img className='rounded-full' src={image} alt='' width={40} />
                
                <div>
                    <p className='font-medium'>{name}</p>
                    {timestamp ? (
                    <p className='text-xs text-gray-400'>
                        {new Date(timestamp?.toDate()).toLocaleString()}
                    </p>
                    ) : (
                        <p className='text-xs text-gray-400'>Loading</p>
                    )}
                    
                </div>
            </div>

            <p className='pt-4'>{message}</p>
        </div>

        {postImage && (
            <div className='relative h-56 md:h-96 bg-white '>
                <Image onClick={(e) => {openPic(e)}} alt='' src={postImage}  fill style={{objectFit: 'cover'}} className='cursor-pointer'/>
                {/* <ModalImage
                    className=' object-cover m-auto'
                    width={40} height={40} 
                    small={postImage}
                    large={postImage}
                    alt=""
                />; */}
            </div>
        )}

        <div className='flex justify-between items-center rounded-b-2xl text-gray-400 border-t bg-white shadow-md'>
            <div className='inputIcon rounded-none rounded-bl-2xl'>
                <ThumbUpIcon className='h-4' />
                <p className='text-xs sm:text-base'>Like</p>
            </div>

            <div className='inputIcon rounded-none'>
                <ChatAltIcon className='h-4' />
                <p className='text-xs sm:text-base'>Share</p>
            </div>

            <div className='inputIcon rounded-none rounded-br-2xl'>
                <ChatAltIcon className='h-4' />
                <p className='text-xs sm:text-base'>Share</p>
            </div>
        </div>
    </div>
  )
}

export default Post