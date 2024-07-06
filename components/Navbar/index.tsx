import Link from "next/link";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa6";

type NavbarProps = {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}
export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);



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

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                document.documentElement.classList.add('dark');
                setDarkMode(true);
            } else {
                document.documentElement.classList.remove('dark');
                setDarkMode(false);
            }
        }
    }, []);

    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        setDarkMode(!darkMode);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-full dark:text-white text-black dark:bg-black bg-white pb-20">
            <div className="flex justify-between items-center py-5 px-10">
                <div className="text-xl cursor-pointer">
                    <code>Noufal Rahim</code>
                </div>
                <div className="hidden md:flex gap-4 cursor-pointer">
                    <Link className="text-md" href="/">
                        <code>Home</code>
                    </Link>
                    <Link className="text-md" href="/Projects">
                        <code>Projects</code>
                    </Link>
                    <Link className="text-md" href="/Blogs">
                        <code>Blogs</code>
                    </Link>
                </div>
                <div className="hidden md:flex gap-4 space-x-4 cursor-pointer">
                    <button onClick={toggleDarkMode}>
                        {darkMode ? <FaMoon color="white" size={24} /> : <FaSun color={'#E69B05'} size={24} />}
                    </button>
                    <Link href="https://www.linkedin.com/in/noufalrahim" target="_blank">
                        <FaLinkedin className="text-2xl" />
                    </Link>
                    <Link href="https://github.com/noufalrahim" target="_blank">
                        <FaGithub className="text-2xl" />
                    </Link>
                </div>
                {
                    isMobile ? (
                        <div className="md:hidden">
                            {isOpen ? (
                                <div className="flex flex-row gap-4">
                                    <button onClick={toggleDarkMode}>
                                        {darkMode ? <FaMoon color="white" size={24} /> : <FaSun color={'#E69B05'} size={24} />}
                                    </button>
                                    <FaTimes onClick={toggleMenu} className="text-2xl" />
                                </div>
                            ) : (
                                <div className="flex flex-row gap-4">
                                    <button onClick={toggleDarkMode}>
                                        {darkMode ? <FaMoon color="white" size={24} /> : <FaSun color={'#E69B05'} size={24} />}
                                    </button>
                                    <FaBars onClick={toggleMenu} className="text-2xl" />
                                </div>
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
                        <Link href="https://www.linkedin.com/in/noufalrahim" target="_blank">
                            <FaLinkedin className="text-2xl" />
                        </Link>
                        <Link href="https://github.com/noufalrahim" target="_blank">
                            <FaGithub className="text-2xl" />
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
