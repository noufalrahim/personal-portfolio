import { CardDefault } from '@/components/Card'
import { NavbarMenu } from '@/components/Navbar'
import { Typography } from '@material-tailwind/react'
import React from 'react'

export default function () {
  return (
    <main className='bg-black w-full h-full'>
      <NavbarMenu />
      <div>
        <h1 className='text-4xl font-bold text-white text-center pt-48'>
          MY PROJECTS
        </h1>
        {/* <div className='flex flex-col items-center justify-center w-full gap-8 py-20'>
          <Typography placeholder={undefined} className='text-xl text-white/80 text-center pb-5 px-10'>
            Featured Projects
          </Typography>
          <div className='md:flex items-center justify-center w-full gap-8 lg:flex'>
            <CardDefault />
            <CardDefault />
            <CardDefault />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center w-full gap-8 lg:flex py-20'>
          <Typography placeholder={undefined} className='text-xl text-white/80 text-center pb-5 px-10'>
            Collaborations
          </Typography>
          <div className='md:flex items-center justify-center w-full gap-8 lg:flex'>
            <CardDefault />
            <CardDefault />
            <CardDefault />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center w-full gap-8 lg:flex py-20'>
          <Typography placeholder={undefined} className='text-xl text-white/80 text-center pb-5 px-10'>
            Personal Projects
          </Typography>
          <div className='md:flex items-center justify-center w-full gap-8 lg:flex'>
            <CardDefault />
            <CardDefault />
            <CardDefault />
          </div>
          <div className='md:flex items-center justify-center w-full gap-8 lg:flex'>
            <CardDefault />
            <CardDefault />
            <CardDefault />
          </div>
        </div> */}
        <div>
          <div className='flex flex-col items-center justify-center w-full gap-8 lg:flex py-20'>
            <Typography placeholder={undefined} className='text-xl text-white/80 text-center pb-5 px-10'>
              Featured Projects
            </Typography>
            <CardDefault />
            <CardDefault />
            <CardDefault />
          </div>
          <div className='flex flex-col items-center justify-center w-full gap-8 lg:flex py-20'>
            <Typography placeholder={undefined} className='text-xl text-white/80 text-center pb-5 px-10'>
              Collaborations
            </Typography>
            <CardDefault />
            <CardDefault />
            <CardDefault />
          </div>
          <div className='flex flex-col items-center justify-center w-full gap-8 lg:flex py-20'>
            <Typography placeholder={undefined} className='text-xl text-white/80 text-center pb-5 px-10'>
              Personal Projects
            </Typography>
            <CardDefault />
            <CardDefault />
            <CardDefault />
          </div>
        </div>
      </div>
    </main>
  )
}
