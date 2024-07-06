import Card from "@/components/Card/ProjectCard";
import Navbar from "@/components/Navbar";
import H4 from "@/components/Typography/H4";
import H6 from "@/components/Typography/H6";
import { projects } from "@/DB/db";
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
                <H4 title="PROJECTS" />
                <H6 title="Self Projects" />
                <div className="w-full flex flex-row grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-4">
                    {projects.map((project) => {
                        console.log(project.demo);
                        return (
                            <>
                                {
                                    project.moreInfo.category === "self" && (
                                        <Card
                                            key={project.id}
                                            image={project.image}
                                            title={project.title}
                                            description={project.description}
                                            github={project.github}
                                            demo={project.demo}
                                            techStack={project.techStack}
                                        />
                                    )
                                }
                            </>
                        )
                    })}
                </div>
            </div>
            <div className="flex flex-col gap-16 my-16">
                <div>
                    <H6 title="Collaborations" />
                    <H6 title="(Internships)" />
                </div>
                <div className="w-full flex flex-row grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-4">
                    {projects.map((project) => {
                        console.log(project.demo);
                        return (
                            <>
                                {
                                    project.moreInfo.category != "self" && (
                                        <Card
                                            key={project.id}
                                            image={project.image}
                                            title={project.title}
                                            description={project.description}
                                            github={project.github}
                                            demo={project.demo}
                                            techStack={project.techStack}
                                        />
                                    )
                                }
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}