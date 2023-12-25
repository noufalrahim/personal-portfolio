import { BlogCard } from '@/components/BlogCard'
import { NavbarMenu } from '@/components/Navbar'
import React from 'react'

export default function Index() {
  return (
    <>
      <main className='bg-black w-full h-full'>
        <NavbarMenu />
        <div>
          <h1 className='text-4xl font-bold text-white text-center pt-48 pb-20'>
            MY BLOGS
          </h1>
        </div>
        <div className='flex flex-col items-center justify-center w-full gap-8 lg:flex py-20'>
          <div className='lg:flex md:flex xl:flex'>
          <BlogCard />
          <BlogCard />
          </div>
          <div className='lg:flex md:flex xl:flex'>
          <BlogCard />
          <BlogCard />
          </div>
        </div>
      </main>
    </>
  )
}
