import React from 'react'
import { Instagram, Linkedin, Mail, GitHub, Twitter } from 'react-feather'
import { useEffect, useState } from 'react'
import { FaAngular, FaDatabase, FaNode, FaReact } from 'react-icons/fa';
import Image from 'next/image';
export default function Technologies() {
    const [windowWidth, setWindowWidth] = useState(0);
    const [hovered, setHovered] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const getSize = () => {
        return windowWidth >= 840 ? 50 : windowWidth < 840 && windowWidth >= 640 ? 40 : 30;
    };

    return (
        <div className='text-white'>
            <h1 className='text-3xl font-bold mb-10 mt-36 text-center'>
                Frameworks and Libraries
            </h1>
            <div className='flex items-center lg:gap-40 justify-center'>
                <FaReact className='inline-block mr-2' size={getSize()} fill='white'/>
                <FaNode className='inline-block' size={getSize()} />
                <FaAngular className='inline-block ml-2' size={getSize()} fill='white'/>
                <FaDatabase className='inline-block ml-2' size={getSize()} />
                <Image src='/nextjs.jpeg' alt='Next.js' width={150} height={150} />
            </div>
        </div>
    )
}
