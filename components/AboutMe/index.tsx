import React from 'react'
import { TinyCard } from '../TinyCard'
import { FaLaptop, FaPaintBrush, FaPalette, FaServer } from 'react-icons/fa'
import { FaMobileScreen } from 'react-icons/fa6'

const Skills = [
    {
        title: 'Frontend Developement',
        content: 'I create responsive websites that allow the user to experience your website in the best and most appropriate way suited to the device they are using.',
        icon: <FaPalette className='text-white' size={30} />
    },
    {
        title: 'Backend Developement',
        content: 'I create the server, database, and application that powers the website. I create the backend of the website using server-side languages like Node.js, Ruby, PHP, Python, Java, etc.',
        icon: <FaServer className='text-white' size={30} />
    },
    {
        title: 'UI/UX Design',
        content: 'I create the look, layout, and features of a website. The job also includes creating custom graphics, illustrations, and animations.',
        icon: <FaPaintBrush className='text-white' size={30} />
    },
    {
        title: 'Mobile App Development',
        content: 'I create mobile apps for Android and iOS devices. I create both the front end and the back end of the app.',
        icon: <FaMobileScreen className='text-white' size={30} />
    },
    {
        title: 'Desktop App Development',
        content: 'I create desktop applications that run locally on a computer, including web apps that run in a web browser.',
        icon: <FaLaptop className='text-white' size={30} />
    },    

]

export default function Index() {
    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <h1 className='text-xl font-bold text-white text-center mt-36'>
                MY SKILLS
            </h1>
            <h1 className='text-4xl font-bold text-white text-center mt-5'>
                What I Do
            </h1>
            <p className='text-white text-center mt-5 mb-10'>
                Lorem ipsum de dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem
            </p>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full justify-center items-center'>
                    {
                        Skills.map((item, index) => (
                            <TinyCard 
                            key={index} 
                            title={item.title} 
                            content={item.content} 
                            icon={item.icon}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
