import { useSession } from 'next-auth/react';
import Image from 'next/image'
import React, {useRef, useState} from 'react'
import {VideoCameraIcon, CameraIcon, EmojiHappyIcon } from '@heroicons/react/solid';


import { db } from '../firebase';
import { collection, addDoc, serverTimestamp, getDoc, updateDoc  } from "firebase/firestore"; 
import { getStorage, ref, uploadString, getDownloadURL } from "firebase/storage";

const InputBox = () => {
    const {data: session, status} = useSession();
    const storage = getStorage();
    
    const inputRef = useRef(null);
    const filePickerRef = useRef(null);
    const [imageUpload, setImageUpload] = useState(null);

    const sendPost = async (e) => {
        e.preventDefault();

        if (!inputRef.current.value) return;

        try {
            const docRef = await addDoc(collection(db, "posts"), {
                message: inputRef.current.value,
                name: session.user.name,
                email: session.user.email,
                image: session.user.image,
                timestamp:serverTimestamp()
            })
            
            console.log("Document written with ID: ", docRef);

            if (imageUpload) {
                const storageRef = ref(storage, `posts/${docRef.id}`);
                const uploadTask = await uploadString(storageRef, imageUpload, 'data_url').then((snapshot) => {

                    getDownloadURL(ref(storage, `posts/${docRef.id}`)).then(url => {
                        updateDoc(docRef, {postImage: url})
                    })

                    
                    
                  });
                
                removeImage();
            }
          } catch (e) {
            console.error("Error adding document: ", e);
          }

        // db.collection('posts').add({
        //     message: inputRef.current.value,
        //     name: session.user.name,
        //     email: session.user.email,
        //     image: session.user.image,
        //     // timestamp:firestore.FieldValue.serverTimestamp(),
        // })

        inputRef.current.value = '';
    }

    const addImageToPost = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setImageUpload(readerEvent.target.result);
        }
    }


    const removeImage = () => {
        setImageUpload(null);
    }

  return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
        <div className=' flex space-x-4 p-4 items-center'>
            <Image
                className='rounded-full'
                src={session.user.image}
                width={40}
                height={40}
                alt=''
            />
            <form className='flex flex-1'>
                <input ref={inputRef} className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none' type='text' placeholder={`What's on your mind, ${session.user.name}?`} />
                <button hidden type='submit' onClick={sendPost}>Submit</button>
            </form>

            {imageUpload && (
                <div onClick={removeImage} className='flex flex-col filter hover:bright-110 transition duration-100 transform hover:scale-105 cursor-pointer'>
                    <img className='h-10 object-contain' src={imageUpload} alt='' />
                    <p className='text-xs text-red-500 text-center'>Remove</p>
                </div>
            )}
        </div>

        <div className='flex justify-evenly p-3 border-t'>
            <div className='inputIcon'>
                <VideoCameraIcon className='h-7 text-red-500' />
                <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
            </div>

            <div onClick={() => {filePickerRef.current.click()}} className='inputIcon'>
                <CameraIcon className='h-7 text-green-400' />
                <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
                <input ref={filePickerRef} onChange={addImageToPost} type='file' hidden />
            </div>

            <div className='inputIcon'>
                <EmojiHappyIcon className='h-7 text-yellow-300' />
                <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
            </div>
        </div>
    </div>
  )
}

export default InputBox