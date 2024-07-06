import BlogCard from "@/components/Card/BlogCard";
import Navbar from "@/components/Navbar";
import H4 from "@/components/Typography/H4";
import { blogs } from "@/DB/db";
import React from "react";

export default function Projects() {
    const [darkMode, setDarkMode] = React.useState(false);
    return (
        <div className="min-h-screen flex flex-col items-center justify-center dark:bg-black bg-white dark:text-black text:white">
            <Navbar
                darkMode={darkMode}
                setDarkMode={(value) => setDarkMode(value)}
            />
            <div>
                <H4 title="BLOGS" />
                <div className="w-full flex flex-row grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 grid-cols-1 gap-4">
                    {blogs.map((blog) => {
                        return (
                            <>
                                {
                                    <BlogCard
                                        key={blog.id}
                                        id={blog.id}
                                        image={blog.image}
                                        title={blog.title}
                                        description={blog.description}
                                    />
                                }
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}