import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) { 
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        // Check initial window size
        handleResize();

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav className="w-full text-white pb-20">
            <div className="flex justify-between items-center py-5 px-10">
                <div className="text-xl">
                    <code>Noufal Rahim</code>
                </div>
                <div className="hidden md:flex gap-4">
                    <div className="text-md">
                        <code>Projects</code>
                    </div>
                    <div className="text-md">
                        <code>Blogs</code>
                    </div>
                    <div className="text-md">
                        <code>Contact</code>
                    </div>
                </div>
                <div className="hidden md:flex gap-4 space-x-4">
                    <FaLinkedin className="text-2xl" />
                    <FaGithub className="text-2xl" />
                </div>
                {
                    isMobile ? (
                        <div className="md:hidden">
                            {isOpen ? (
                                <FaTimes onClick={toggleMenu} className="text-2xl" />
                            ) : (
                                <FaBars onClick={toggleMenu} className="text-2xl" />
                            )}
                        </div>
                    ) : null
                }
            </div>
            {isOpen && (
                <div className="md:hidden flex flex-col items-center space-y-5 py-5">
                    <div className="py-1">
                        <code>Projects</code>
                    </div>
                    <div className="py-1">
                        <code>Blogs</code>
                    </div>
                    <div className="py-1">
                        <code>Contact</code>
                    </div>
                    <div className="flex space-x-4 gap-4 my-5">
                        <FaLinkedin className="text-2xl" />
                        <FaGithub className="text-2xl" />
                    </div>
                </div>
            )}
        </nav>
    );
}
