import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid'
import Contact from './Contact'

const contacts = [
    { src: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg', name:'Elon Musk' },
    { src: 'https://media.snl.no/media/28002/standard_compressed_Bill_gates.jpg', name:'Bill Gates' },
    { src: 'https://static.wirtualnemedia.pl/media/top/zuckerberg-meta655.jpg', name:'Mark Zuckerberg' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/640px-Dwayne_Johnson_2014_%28cropped%29.jpg', name:'Dwayne Johnson' },
]

const Widgets = () => {
  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
        <div className='flex justify-between items-center text-gray-500 mb-5'>
            <h2 className='text-xl'>Contacts</h2>
            <div className='flex space-x-2'>
                <VideoCameraIcon className='h-6' />
                <SearchIcon className='h-6' />
                <DotsHorizontalIcon className='h-6' />
            </div>
        </div>

        {contacts.map(contact => (
            <Contact key={contact.src} src={contact.src} name={contact.name} />
        ))}
    </div>
  )
}

export default Widgets