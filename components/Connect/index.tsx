import { FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaWhatsapp } from "react-icons/fa";
export default function Connect() {

    const connect = [
        {
            name: "Email",
            icon: <FaMailBulk className="dark:text-white text-black text-4xl" size={48} />,
            link: "mailto:"
        },
        {
            name: "Github",
            icon: <FaGithub className="dark:text-white text-black text-4xl" size={48} />,
            link: ""
        },
        {
            name: "Instagram",
            icon: <FaInstagram className="dark:text-white text-black text-4xl" size={48} />,
            link: ""
        },
        {
            name: "Linkedin",
            icon: <FaLinkedin className="dark:text-white text-black text-4xl" size={48} />,
            link: ""
        },
        {
            name: "Whatsapp",
            icon: <FaWhatsapp className="dark:text-white text-black text-4xl" size={48} />,
            link: ""
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
                        <a key={index} href={item.link}
                            className="dark:text-white text-black text-4xl m-4"
                        >
                            {item.icon}
                        </a>
                    ))
                }
            </div>
        </div>
    )
}