import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    List,
    ListItem,
} from "@material-tailwind/react";
import {
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

function NavList() {

    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1" placeholder={undefined}>
     
                <Link className = '' href="/">
                <ListItem className="flex items-center gap-2 py-2 pr-4 text-white"
                    placeholder={undefined}
                >
                    Home
                </ListItem>
                </Link>
       
           
                <Link href='/Projects'>
                <ListItem className="flex items-center gap-2 py-2 pr-4 text-white"
                    placeholder={undefined}
                >My Projects</ListItem>
                </Link>
            
                <Link href='/Blogs'>
                <ListItem className="flex items-center gap-2 py-2 pr-4 text-white"
                    placeholder={undefined}
                >My Blogs</ListItem>
                </Link>
        </List>
    );
}

export function NavbarMenu() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <Navbar className="mx-auto h-1/6 absolute inset-0 z-30 rounded-none bg-transparent border-black px-4 py-2" placeholder={undefined} color="blue-gray">
            <div className="flex items-center justify-between text-blue-gray-900 bg-black text-white">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 lg:ml-2"
                    placeholder={undefined}
                >
                    NOUFAL RAHIM
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <div className="hidden gap-8 lg:flex">
                    <FaGithub
                        className='inline-block mr-2 cursor-pointer' size={30}
                        onClick={() => window.open('https://github.com/noufalrahim')}
                    />
                    <FaLinkedin className='inline-block cursor-pointer ml-2' size={30}
                        onClick={() => window.open('https://www.linkedin.com/in/noufalrahim/')}
                    />
                </div>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    className="lg:hidden"
                    placeholder={undefined}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
}