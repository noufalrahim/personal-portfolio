import { Button } from '@material-tailwind/react';
import Image from 'next/image'
import React from 'react'
import { Download, GitHub } from 'react-feather';
import { TypeAnimation } from 'react-type-animation';

export default function Index() {
    return (
        <>
        <div className='text-white flex flex-col items-center justify-center mt-8'>
            <div>
                <Image src='/image.jpg' width={217} height={217} alt={''} className='rounded-full contrast-125'/>
            </div>
            <div className='mt-8 align-center text-center'>
                <h1 className='text-4xl font-bold'>
                    <span
                    className='bg-gradient-to-b from-[#8F00FF] via-[#AE73DC] to-[#FFFFFF] bg-clip-text text-transparent'
                    >Hi! Noufal Rahim here..</span>👋
                </h1>
                {/* <h2 className='text-2xl font-bold mt-4'>
                    I am a Web Developer
                </h2> */}
                <TypeAnimation
                     sequence={[
                        'I am a Full Stack Web Developer',
                        1000,
                        'I am an App Developer',
                        1000,
                        'I am a Foss Enthusiast',
                        1000,
                        'I am a Data Structures and Algorithms Enthusiast',
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      style={{ fontSize: '2em', display: 'inline-block' }}
                      repeat={1}
                      className='text-2xl font-bold mt-4'
                />
                <p className='mt-4 text-md font-medium'>
                    I am a web developer with 2+ years of experience in building web applications. I am passionate about building scalable and maintainable web applications. <br/>I have experience in building web applications using React, NextJS, NodeJS, ExpressJS, MongoDB, and MySQL.
                </p>
            </div>
            <div className='flex mt-8 gap-4'>
                <Button color='white' ripple={true} className='mt-8' placeholder={undefined}>
                    <a href='https://drive.google.com/file/d/1x3Zs9r1z2zrZJ1r1nV2YVf7eU5JZ6qQ-/view?usp=sharing' target='_blank' rel='noreferrer' className='flex gap-2'>
                        Download Resume
                        <Download width={17} height={17} />
                    </a>
                </Button>
                <Button color='white' ripple={true} className='mt-8 flex' placeholder={undefined}>
                    <a href='#ContactMe' className='gap-2 flex'>
                        Github
                        <GitHub width={17} height={17} />
                        </a>
                </Button>
            </div>
        </div>
        </>
    )
}
