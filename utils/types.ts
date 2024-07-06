export type CardProps = {
    image: string,
    title: string,
    description: string,
    github:{
        show: boolean,
        link: string
    },
    demo: {
        available: boolean,
        link: string
    },
    techStack: string[]
}

export type ProjectProps = {
    id: string,
    image: string,
    title: string,
    description: string,
    techStack: string[],
    github: {
        show: boolean,
        link: string
    }
    demo: {
        available: boolean,
        link: string
    },
    moreInfo: {
        category: string,
        role: {
            id: string,
            title: string
        }
    },
    show: boolean
}

export type BlogProps = {
    id: string,
    image: string,
    title: string,
    description: string,
}