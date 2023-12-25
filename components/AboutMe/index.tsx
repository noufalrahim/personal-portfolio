import React from 'react'
import { TinyCard } from '../TinyCard'

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
                <div className='lg:flex xl:flex md:flex'>
                    <TinyCard />
                    <TinyCard />
                    <TinyCard />
                </div>
                <div className='lg:flex xl:flex md:flex'>
                    <TinyCard />
                    <TinyCard />
                    <TinyCard />
                </div>
            </div>
        </div>
    )
}
