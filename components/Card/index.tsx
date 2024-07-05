import { FaArrowRightFromBracket } from "react-icons/fa6";

export default function Card() {
    return (
        <div className="dark:text-white text-black py-5">
            <div className="items-center justify-center flex">
                <img src="/image.jpg" alt="hero" className="w-5/12" />
            </div>
            <div className="items-center text-white justify-center">
                <p className="dark:text-white text-black text-md text-center mt-4">
                    <code>
                        Calculus
                    </code>
                </p>
            </div>
            <div className="items-center text-white justify-center">
                <p className="dark:text-white text-black text-md text-center px-16 w-full my-5">
                    <code>
                        Calculus is an accounting software developed to help small businesses manage their finances. It is a full-stack application built using Next JS, Electron JS, Tailwind CSS.
                    </code>
                </p>
            </div>
            <div className="w-full flex items-center justify-center">
                <button className="dark:bg-white bg-black dark:text-black text-white w-32 py-1 rounded-sm text-sm items-center justify-around flex mt-5">
                    View Project
                    <FaArrowRightFromBracket className="inline-block ml-1" size={12} />
                </button>
            </div>
        </div>
    )
}