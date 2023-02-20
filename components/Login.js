// import { useSession, signIn, signOut } from "next-auth/react"
// export default function Component() {
//   const { data: session } = useSession()
  
//   if (session) {
//     console.log(session.user)
//     return (
//       <>
//         Signed in as {session.user.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     )
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   )
// }

import Image from 'next/image'
import React from 'react'
import { signIn } from "next-auth/react"

const Login = () => {
    return (
    <div className='grid place-items-center'>
            <Image 
            src='https://links.papareact.com/t4i'
            height={400}
            width={400}
            style={{objectFit: 'contain'}}
            alt=''
            />
            <h1 onClick={() => {signIn()}} className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'>Login with Facebook</h1>
    </div>
    )
}

export default Login
