import React from "react";
import { FaDatabase, FaNodeJs, FaReact, FaServer } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoElectron } from "react-icons/io5";

export default function Frameworks() {

    const frameworks = [
        {
            name: "React",
            icon: <FaReact className="text-white" size={48} />,
        },
        {
            name: "Next.js",
            icon: <SiNextdotjs className="text-white" size={48} />,
        },
        {
            name: "Node.js",
            icon: <FaNodeJs className="text-white" size={48} />,
        },
        {
            name: "Database",
            icon: <FaDatabase className="text-white" size={48} />,
        },
        {
            name: "Electron",
            icon: <IoLogoElectron className="text-white" size={48} />,
        }
    ]

    return (
        <div className="w-full mt-16 justify-center items-center flex flex-col mx-10 mb-10">
            <h4 className="text-white text-2xl mb-10 text-center">
                <code>
                    Frameworks and Libraries
                </code>
            </h4>
            <div className="w-full flex justify-around items-center flex-row">
                {
                    frameworks.map((item, index) => (
                        <div key={index} className="flex flex-col items-center justify-center">
                            {item.icon}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}