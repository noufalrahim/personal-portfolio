import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaWhatsapp } from "react-icons/fa";
export default function Connect() {

    const connect = [
        {
            name: "Email",
            icon: <FaMailBulk className="dark:text-white text-black text-4xl" size={48} />,
            link: "mailto:noufalrahim6784@gmail.com"
        },
        {
            name: "Github",
            icon: <FaGithub className="dark:text-white text-black text-4xl" size={48} />,
            link: "https://github.com/noufalrahim"
        },
        {
            name: "Instagram",
            icon: <FaInstagram className="dark:text-white text-black text-4xl" size={48} />,
            link: "https://www.instagram.com/noufal__rahim/"
        },
        {
            name: "Linkedin",
            icon: <FaLinkedin className="dark:text-white text-black text-4xl" size={48} />,
            link: "https://www.linkedin.com/in/noufalrahim"
        },
        {
            name: "Whatsapp",
            icon: <FaWhatsapp className="dark:text-white text-black text-4xl" size={48} />,
            link: "https://wa.me/919778025976"
        },
    ];

    return (
        <div className="w-full flex mt-16 flex-col items-center">
            <h4 className="dark:text-white text-black text-2xl mb-5"><code>
                Connect with me
            </code></h4>
            <div className="w-full flex justify-around items-center flex-row">
                {
                    connect.map((item, index) => (
                        <Link key={index} href={item.link} target="_blank"
                            className="dark:text-white text-black text-4xl m-4"
                        >
                            {item.icon}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}