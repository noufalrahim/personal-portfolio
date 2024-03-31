import React from 'react'
import { useEffect, useState } from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaWhatsapp } from 'react-icons/fa';
export default function Index() {
    const [windowWidth, setWindowWidth] = useState(0);
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
                Connect With Me
            </h1>
            <div className='flex items-center lg:gap-40 justify-center'>
                <FaMailBulk className='inline-block ml-2 cursor-pointer' size={getSize()} 
                onClick={() => window.open('mailto:noufalrahim6784@gmail.com')} />
                <FaGithub 
                className='inline-block mr-2 cursor-pointer' size={getSize()}
                onClick={() => window.open('https://github.com/noufalrahim')}
                />
                <FaInstagram className='inline-block cursor-pointer' size={getSize()} 
                onClick={() => window.open('https://www.instagram.com/noufal__rahim/')}
                />
                <FaLinkedin className='inline-block cursor-pointer ml-2' size={getSize()}
                onClick={() => window.open('https://www.linkedin.com/in/noufalrahim/')}
                />
                <FaWhatsapp className='inline-block cursor-pointer ml-2' size={getSize()} 
                onClick={() => window.open('https://wa.me/919778025976')}
                />
            </div>
        </div>
    )
}
