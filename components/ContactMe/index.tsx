import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';


export default function ContactMe() {
    return (
        <div className="w-full mt-16 justify-center items-center flex flex-col mx-10 mb-10">
            <h4 className="text-white text-2xl mb-10 text-center">
                <code>
                    Contact Me
                </code>
            </h4>
            <div className="w-full flex justify-around items-center">
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 h-full flex-col justify-center items-center flex">
                    <h1 className="text-white text-2xl text-center">
                        <code>
                            Send me a message
                        </code>
                    </h1>
                    <p className="text-white text-md text-center mt-4">
                        <code>
                            fill up this form to contact me
                        </code>
                    </p>
                    <input type="text" placeholder="Name" className="w-3/4 mt-4 p-2 rounded-md focus:outline-none bg-transparent border-b text-white" />
                    <input type="email" placeholder="Email" className="w-3/4 mt-4 p-2 rounded-md focus:outline-none bg-transparent border-b text-white" />
                    <textarea placeholder="Message" className="w-3/4 mt-4 p-2 rounded-md focus:outline-none bg-transparent border-b text-white" />
                    <button className="bg-white px-2 py-1 w-24 rounded-md text-sm items-center justify-center flex mt-4">
                        send
                        <FaPaperPlane className="inline-block ml-1" />
                    </button>
                </div>
            </div>
        </div>
    )
}