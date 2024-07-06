import { projects } from '@/DB/db';
import Card from '../Card/ProjectCard';
import React from 'react';
import { useRouter } from 'next/router';

export default function Projects() {
    const router = useRouter();
    return (
        <div className="mt-16">
            <h4 className="dark:text-white text-black text-2xl mb-5 text-center">
                <code>
                    Projects
                </code>
            </h4>
            <div className="w-full flex flex-row grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-4">
                {projects.slice(0, 3).map((project) => {
                    console.log(project.demo);
                    return (
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
                })}
            </div>
            <div 
            onClick={() => router.push('/Projects')}
            className="w-full flex items-center justify-center mt-5">
                <button className="dark:bg-white bg-black dark:text-black text-white w-48 py-1 rounded-sm text-sm items-center justify-around flex mt-5">
                    View All Projects
                </button>
            </div>
        </div>
    )
}