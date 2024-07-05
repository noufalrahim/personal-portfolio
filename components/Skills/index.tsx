import React from "react";
import { FaConnectdevelop, FaLaptop, FaMobile, FaPaintBrush, FaPallet, FaPhone, FaServer } from "react-icons/fa";


export default function Skills() {
    
    const mySkills = [
        {
          icon: <FaPallet className="dark:text-white text-black text-4xl m-4" size={48} />,
          name: "Frontend Web Development",
          content: "I create the front end of the websites using HTML, CSS, and JavaScript, React JS, Next JS, etc."
        },
        {
          icon: <FaServer className="dark:text-white text-black text-4xl m-4" size={48} />,
          name: "Backend Web Development",
          content: "I create the backend of the website using server-side languages like Node.js, Ruby, PHP, Python, Java, etc."
        },
        {
          icon: <FaPaintBrush className="dark:text-white text-black text-4xl m-4" size={48} />,
          name: "UI/UX Design",
          content: "I create the layout and the design of the website, ensuring that it is easy to use and aesthetically pleasing."
        },
        {
          icon: <FaMobile className="dark:text-white text-black text-4xl m-4" size={48} />,
          name: "Mobile App Development",
          content: "I create the front end of the mobile application using React Native, and the backend using server-side languages like Node.js, Node JS, etc."
        },
        {
          icon: <FaLaptop className="dark:text-white text-black text-4xl m-4" size={48} />,
          name: "Desktop App Development",
          content: "I create desktop applications for Windows, macOS, and Linux. I create the front end of the desktop application using Electron."
        },
        {
          icon: <FaConnectdevelop className="dark:text-white text-black text-4xl m-4" size={48} />,
          name: "API Development",
          content: "I create APIs that allow different software applications to communicate with each other. I use REST and GraphQL APIs."
        }
      ]
    
    return (
        <div className="mt-16 justify-center items-center flex flex-col mx-10 mb-10">
            <h4 className="dark:text-white text-black text-2xl mb-5 text-center">
                <code>
                    What Do I Do?
                </code>
            </h4>
            <div className="w-full flex flex-row justify-center items-center mx-10 gap-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-cols-1">
                {
                    mySkills.map((item, index) => (
                        <div key={index} className="flex flex-col items-center justify-center p-5">
                            {item.icon}
                            <h4 className="dark:text-white text-black text-center text-2xl mb-5">
                                <code>
                                    {item.name}
                                </code>
                            </h4>
                            <p className="dark:text-white text-black text-md text-center">
                                <code>
                                    {item.content}
                                </code>
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}