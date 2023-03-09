
import Image from 'next/image'
import React from 'react'
import { signIn } from "next-auth/react"

const Login = () => {
    return (
    <div className='grid content-center justify-center w-full h-screen '>
            <Image 
            src='https://links.papareact.com/t4i'
            height={400}
            width={400}
            style={{objectFit: 'contain'}}
            alt=''
            />
            <h1 onClick={() => {signIn()}} className='p-5 my-2 bg-blue-500 rounded-full text-white text-center cursor-pointer'>Login to Havir's Fake Facebook</h1>
            <h1 className='p-5 bg-blue-200 rounded-full text-black font-bold text-center '>Try the google login</h1>
    </div>
    )
}

export default Login
