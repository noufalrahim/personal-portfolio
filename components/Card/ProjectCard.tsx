import { CardProps } from "@/utils/types";
import { FaArrowRightFromBracket, FaGithub } from "react-icons/fa6";
import { useRouter } from "next/router";

export default function ProjectCard({
    image,
    title,
    description,
    github,
    demo,
    techStack
}: CardProps) {

    const router = useRouter();

    console.log(techStack);

    return (
        <div className="dark:text-white text-black py-5 gap-5 flex flex-col">
            <div className="items-center justify-center flex min-h-[15rem]">
                <img src={image} alt="hero" className="w-5/12" />
            </div>
            <div className="items-center text-white justify-center">
                <p className="dark:text-white text-black text-md text-center mt-4">
                    <code>
                        {title}
                    </code>
                </p>
            </div>
            <div>
                {
                    techStack != undefined && (
                        <div className="grid grid-cols-3 mx-10 gap-2 mt-2 justify-center items-center flex">
                            {
                                techStack.map((tech) => (
                                    <div key={tech} className="dark:bg-white bg-black dark:text-black text-white px-1 py-1 rounded-2xl text-sm flex items-center justify-center">
                                        {tech}
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
            <div className="items-center text-white justify-center min-h-[20rem]">
                <p className="dark:text-white text-black text-md text-left px-16 w-full my-5">
                    <code>
                        {description}
                    </code>
                </p>
            </div>
            <div className="w-full flex items-center justify-center">
                {
                    demo != undefined && demo.available && (
                        <button
                            onClick={() => router.push(demo.link)}
                            className="dark:bg-white bg-black dark:text-black text-white w-32 py-1 rounded-sm text-sm items-center justify-around flex mt-5">
                            Demo
                            <FaArrowRightFromBracket className="inline-block ml-1" size={12} />
                        </button>
                    )
                }
                {
                    github != undefined && github.show && (
                        <button
                            onClick={() => router.push(github.link)}
                            className="dark:bg-white bg-black dark:text-black text-white w-32 py-1 rounded-sm text-sm items-center justify-around flex mt-5 ml-5">
                            Github
                            <FaGithub className="inline-block ml-1" size={12} />
                        </button>
                    )
                }
            </div>
        </div>
    )
}
