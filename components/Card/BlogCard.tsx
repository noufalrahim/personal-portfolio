import { BlogProps, CardProps } from "@/utils/types";
import { FaArrowRightFromBracket, FaGithub } from "react-icons/fa6";

export default function BlogCard({
    image,
    title,
    description,
}: BlogProps) {

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
            <div className="items-center text-white justify-center min-h-[20rem]">
                <p className="dark:text-white text-black text-md text-left px-16 w-full my-5">
                    <code>
                        {description}
                    </code>
                </p>
            </div>
        </div>
    )
}
