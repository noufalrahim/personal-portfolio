import { BlogProps, ProjectProps } from "@/utils/types"

export const aboutMe = 'I am a web and app developer with 2+ years of experience in building web applications. I am passionate about building scalable and maintainable web applications.I have experience in building web and mobile applications using React, React Native, Firebase, NextJS, NodeJS, ExpressJS, MongoDB, MySQL and goes on...'
export const projects: ProjectProps[] = [
    {
        id: 'p1',
        image: '/projects/calculus.webp',
        title: 'Calculus',
        description: 'Calculus is a desktop accounting software that helps you manage your business accounts. It streamlines your daily sales and purchases management, inventory management, and financial accounting. Enhances business efficiency and productivity with a user-friendly interface and robust data management capabilities.',
        techStack: ['Electron JS', 'React JS', 'Next JS', 'sqlite 3', 'Tailwind CSS'],
        github: {
            show: true,
            link: 'https://github.com/noufalrahim/Calculus',
        },
        demo: {
            available: false,
            link: ''
        },
        moreInfo: {
            category: 'self',
            role: {
                id: 'FSD',
                title: 'Full Stack'
            }
        },
        show: true
    },
    {
        id: 'p2',
        image: '/projects/allotment.avif',
        title: 'Minor Allotment System for NIT Calicut',
        description: 'A web application that helps students to apply for minors and faculties to allot minors to students. It also helps the administration to manage the minor allotment process. It is currently used by the National Institute of Technology Calicut.',
        techStack: ['Next JS', 'React JS', 'Node JS', 'Express JS', 'Tailwind CSS', 'MongoDB'],
        github: {
            show: false,
            link: ''
        },
        demo: {
            available: true,
            link: 'https://minor-allotment.vercel.app/'
        },
        moreInfo: {
            category: 'collaboration',
            role: {
                id: 'FD',
                title: 'Frontend Development'
            }
        },
        show: true
    },
    {
        id: 'p3',
        image: '/projects/codeit.jpg',
        title: 'CodeIt',
        description: 'CodeIt is an online code editor that helps you to write, compile and run your code online. It supports multiple languages and provides a user-friendly interface to write code. It also provides a feature to auto-save and download your code.',
        techStack: ['Next JS', 'Tailwind CSS', 'React JS', 'Piston API', 'Monaco Editor'],
        github: {
            show: true,
            link: 'https://github.com/noufalrahim/CodeIt',
        },
        demo: {
            available: true,
            link: 'https://codeitnow.vercel.app/'
        },
        moreInfo: {
            category: 'self',
            role: {
                id: 'FD',
                title: 'Frontend Development'
            }
        },
        show: true
    },
    {
        id: 'p4',
        image: '/projects/realyestake.jpg',
        title: 'RealYesTake',
        description: 'RealYesTake is a real estate web application that helps you to buy, sell and rent properties. It provides a user-friendly interface to search for properties and contact the seller. It also provides a feature to list your property for sale or rent.',
        techStack: ['Next JS', 'React JS', 'Tailwind CSS', 'Node JS', 'Express JS', 'MongoDB'],
        github: {
            show: false,
            link: '',
        },
        demo: {
            available: false,
            link: ''
        },
        moreInfo: {
            category: 'collaboration',
            role: {
                id: 'FD',
                title: 'Frontend Development'
            }
        },
        show: true
    },
    {
        id: 'p5',
        image: '/projects/sudoku.avif',
        title: 'Sudoku App & Sudoku Solver',
        description: 'Sudoku App is a mobile application that helps you to play Sudoku. It provides a user-friendly interface to play Sudoku. Sudoku Solver is a web api that helps you to solve Sudoku. It provides a feature to solve any sudoku using backtracking algorithm.',
        techStack: ['React Native', 'Node JS', 'Express JS', 'MongoDB'],
        github: {
            show: true,
            link: 'https://github.com/noufalrahim/Sudoku-App',
        },
        demo: {
            available: false,
            link: ''
        },
        moreInfo: {
            category: 'self',
            role: {
                id: 'FSD',
                title: 'Full Stack Development'
            }
        },
        show: true
    },
    {
        id: 'p6',
        image: '/projects/leetcode.png',
        title: 'LeetCode App',
        description: 'LeetCode App is a mobile application that helps you to track your LeetCode progress using leetcode graphql api. It provides a user-friendly interface to track your progress and solve problems. It also provides a feature to search for any user and view their progress.',
        techStack: ['React Native', 'GraphQL', 'Apollo Client'],
        github: {
            show: true,
            link: 'https://github.com/noufalrahim/LeetCode-App',
        },
        demo: {
            available: false,
            link: ''
        },
        moreInfo: {
            category: 'self',
            role: {
                id: 'FD',
                title: 'Frontend Development'
            }
        },
        show: true
    },
    {
        id: 'p7',
        image: '/projects/insightLink.jpg',
        title: 'InsightLink',
        description: 'InsightLink is a cypher messaging application that helps you to send encrypted messages. It provides a user-friendly interface to send and receive messages. It requires authentication to view encrypted messages.',
        techStack: ['React Native', 'Socket IO', 'Node JS', 'Express JS', 'MongoDB'],
        github: {
            show: true,
            link: 'https://github.com/noufalrahim/insightLink',
        },
        demo: {
            available: false,
            link: ''
        },
        moreInfo: {
            category: 'self',
            role: {
                id: 'FSD',
                title: 'Full Stack Development'
            }
        },
        show: true
    },
    {
        id: 'p8',
        image: '/projects/newspaper.jpg',
        title: 'The Rodentz Gazette',
        description: 'The Rodentz Gazette is a news web application that helps you to read daily news. It provides a user-friendly interface to read news. It also provides a feature to search for news',
        techStack: ['React JS', 'Tailwind CSS', 'News API'],
        github: {
            show: true,
            link: 'https://github.com/noufalrahim/newspaper',
        },
        demo: {
            available: false,
            link: 'https://therodentzgazette.netlify.app/'
        },
        moreInfo: {
            category: 'self',
            role: {
                id: 'FD',
                title: 'Frontend Development'
            }
        },
        show: true
    },
    {
        id: 'p9',
        image: '/projects/reuze.jpg',
        title: 'Reuze',
        description: 'Reuze is a mobile application that helps you to buy and sell used goods. It provides a user-friendly interface to search for used goods and chat the seller. It also provides a feature to list your used goods for sale.',
        techStack: ['React Native', 'Node JS', 'Neo4j', 'Socket IO', 'Express JS'],
        github: {
            show: false,
            link: '',
        },
        demo: {
            available: true,
            link: 'https://mapogo.co.in/'
        },
        moreInfo: {
            category: 'collaboration',
            role: {
                id: 'FD',
                title: 'Frontend Development'
            }
        },
        show: true
    },
    {
        id: 'p10',
        image: '/projects/zinvos.avif',
        title: 'Zinvos Admin Panel',
        description: 'Zinvos is moile application that hepls you to organise and manage your events. It provides a user-friendly interface to manage your events. It also provides a feature to view your event analytics.',
        techStack: ['React JS', 'Tailwind CSS', 'Vite JS', 'ShadCN', 'Fluttr'],
        github: {
            show: false,
            link: '',
        },
        demo: {
            available: false,
            link: ''
        },
        moreInfo: {
            category: 'collaboration',
            role: {
                id: 'FD',
                title: 'Frontend Development'
            }
        },
        show: true
    }
]

export const blogs: BlogProps[] = [
    {
        id: 'b2',
        image: '/blogs/devikaAI.webp',
        title: 'Devika.ai',
        description: 'In the world of software development, Stition.AI introduces Devika, an open-source AI software engineer designed to redefine the process of building software. This sophisticated AI system is equipped to interpret complex instructions from humans, dissect them into manageable tasks, conduct thorough research, and craft code to fulfill specific goals. Devika AI emerges as a formidable open-source rival to Devin, another AI software engineer crafted by Cognition AI, aiming to democratize intelligent software development tools.'
    },
    {
        id: 'b1',
        image: '/blogs/chatGPT.jpg',
        title: 'ChatGpt: An era of Generative AIs',
        description: 'ChatGPT is a large-scale transformer-based language model that can generate human-like responses. It is trained on a diverse range of internet text and can generate human-like responses to given prompts. It is developed by OpenAI. ChatGPT is a powerful tool that can be used for a variety of tasks, including chatbots, content generation, and more. It is available in several sizes, ranging from 117M to 762M parameters, and can be fine-tuned on specific tasks.'
    },
    {
        id: 'b3',
        image: '/blogs/devinAI.webp',
        title: 'Devin: The AI Software Engineer',
        description: 'Cognition AI introduces Devin, an AI software engineer designed to redefine the process of building software. This sophisticated AI system is equipped to interpret complex instructions from humans, dissect them into manageable tasks, conduct thorough research, and craft code to fulfill specific goals. Devin AI emerges as a formidable rival to human software engineers, aiming to democratize intelligent software development tools.'
    },
    {
        id: 'b4',
        image: '/blogs/openSource.jpg',
        title: 'Why OpenSource?',
        description: 'Open-source software is software that is released with a license that allows anyone to use, modify, and distribute the software for any purpose. Open-source software is developed in a collaborative manner, with developers from around the world contributing to the codebase. Open-source software has many benefits, including cost savings, increased security, and improved quality.'
    }
]