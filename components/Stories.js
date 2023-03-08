import React from 'react'
import StoryCard from './StoryCard'

const stories = [
    {
        name: 'Elon Musk',
        src: 'https://comparic.pl/wp-content/uploads/2021/03/Elon-Musk-cc.jpg',
        profile: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg'
    },
    {
        name: 'Krzysztof Szafran',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Dwayne_Johnson_Hercules_2014_%28cropped%29.jpg/640px-Dwayne_Johnson_Hercules_2014_%28cropped%29.jpg',
        profile: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/640px-Dwayne_Johnson_2014_%28cropped%29.jpg'
    },
    {
        name: 'Bill Gates',
        src: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Bill.Gates.jpg',
        profile: 'https://media.snl.no/media/28002/standard_compressed_Bill_gates.jpg'
    },
    {
        name: 'Mark Zuckerberg',
        src: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg',
        profile: 'https://static.wirtualnemedia.pl/media/top/zuckerberg-meta655.jpg'
    },
    {
        name: 'Bill Gates',
        src: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Bill_Gates_%282020%29_02.jpg',
        profile: 'https://media.snl.no/media/28002/standard_compressed_Bill_gates.jpg'
    },
]

const Stories = () => {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
    {stories.map((story, index) => (
        <StoryCard key={index} name={story.name} src={story.src} profile={story.profile} />
    ))}

    </div>
  )
}

export default Stories