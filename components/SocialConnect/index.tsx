import React from 'react'
import { Instagram, Linkedin, Mail, GitHub, Twitter } from 'react-feather'
import { useEffect, useState } from 'react'
export default function Index() {
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


    const handleMouseEnter = () => {
        setHovered(true);
    }

    const handleMouseLeave = () => {
        setHovered(false);
    }

    return (
        <div className='text-white'>
            <h1 className='text-3xl font-bold mb-10 mt-36 text-center'>
                Connect With Me
            </h1>
            <div className='flex items-center lg:gap-40 justify-center'>
                <GitHub className='inline-block mr-2' size={getSize()} fill='white'/>
                <Instagram className='inline-block' size={getSize()} />
                <Linkedin className='inline-block ml-2' size={getSize()} fill='white'/>
                <Twitter className='inline-block ml-2' size={getSize()} />
                <Mail className='inline-block ml-2' size={getSize()} />
            </div>
        </div>
    )
}
