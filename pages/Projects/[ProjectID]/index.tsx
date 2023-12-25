import React from 'react'
import { Button, Typography } from '@material-tailwind/react'
import { NavbarMenu } from '@/components/Navbar'

export default function Index() {
    return (
        <>
        <main className='bg-black w-full h-full lg:flex'>
            <NavbarMenu />
            <div className='flex flex-col items-center justify-center w-full gap-8 lg:flex py-20'>
             <div className='flex flex-col items-left justify-center lg:w-1/2'>
                <img src='https://static.wingify.com/gcp/uploads/sites/3/2021/09/Feature-image-7-ecommerce.png' alt={''} className='contrast-125 px-10 pt-5' />
            </div>
            <div className='flex flex-col items-left justify-center lg:w-1/2'>
                <Typography placeholder={undefined} className='text-5xl font-bold text-white text-left pt-16 pb-5 px-10'>
                    E COMMERCE WEBSITE
                </Typography>
                <Typography placeholder={undefined} className='text-xl text-white/80 text-left pb-5 px-10'>
                    <span className='text-white-400'>Introduction:</span>
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem
                </Typography>
                <Typography placeholder={undefined} className='text-xl text-white/80 text-left pb-5 px-10'>
                    <span
                        className='text-white-400'
                    >Description:</span>
                    <br />
                    Lorem ipsum was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                </Typography>
                <div className='flex flex-row pb-32 gap-8 pt-10 items-right justify-end px-10'>
                <Button color='white' ripple={true} className='mt-10 flex' placeholder={undefined}>
                    Star the repository 
                </Button>
                <Button color='white' ripple={true} className='mt-10' placeholder={undefined}>
                    Visit the website
                </Button>
                </div>
            </div>
            </div>
        </main>
        </>
    )
}
