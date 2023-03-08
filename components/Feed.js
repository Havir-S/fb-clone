import React, { useState, useEffect, useRef } from 'react'
import InputBox from './InputBox'
import Posts from './Posts'
import Stories from './Stories'


const Feed = ({posts}) => {
  

  return (
    <div className='flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide'>
        <div className='mx-auto max-w-md md:max-w-lg'>
            {/* STORIES */}
            <Stories />
            <InputBox />
            
            <Posts posts={posts} />
            
        </div>
    </div>
  )
}

export default Feed