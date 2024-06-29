import React from "react"
import { IoMdDownload } from "react-icons/io"
import { FaGithub } from "react-icons/fa"

export default function Hero() {
    return (
        <div className="flex items-center justify-center flex-col w-full">
            <img src="/image.jpg" alt="logo" className="w-48 h-48 rounded-full border-2 border-white" />
            <h1 className="text-white text-3xl font-bold mt-4 text-center">
                <code>Hi! Noufal Rahim here..👋</code>
            </h1>
            <div className="mx-5">
                <p className="text-white text-md text-center mt-4">
                    <code>
                        I am a web and app developer with 2+ years of experience in building web applications. I am passionate about building scalable and maintainable web applications.
                        I have experience in building web and mobile applications using React, React Native, Firebase, NextJS, NodeJS, ExpressJS, MongoDB, MySQL and goes on...
                    </code>
                </p>
            </div>
            <div className="w-full justify-center items-center flex gap-4 my-5">
                <button className="bg-white px-2 py-1 rounded-sm text-sm items-center justify-center flex">
                    Download Resume
                    <IoMdDownload className="inline-block ml-1" />
                </button>
                <button className="bg-white px-2 py-1 rounded-sm text-sm items-center justify-center flex">
                    Github
                    <FaGithub className="inline-block ml-1" />
                </button>
            </div>
        </div>
    )
}