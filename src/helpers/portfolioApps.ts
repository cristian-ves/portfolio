import { IconDefinition, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";

export interface BadgeInterface {
    icon: IconDefinition | string;
    text: string;
}

export interface PortfolioAppInterface{
    title: string;
    src: string;
    desc: string;
    badges: BadgeInterface[];
    github: string;
    deploy:string;
}

export const portfolioApps: PortfolioAppInterface[] = [
    {
        title: "Packages app",
        src: "packages",
        desc: "A web system for tracking pachages, managing storage, automating logistics and calculating costs, with role-based access for administrators, operators and receptionists",
        badges: [
            {
                icon: faReact,
                text: "React",
            },
            {
                icon: "go",
                text: "Go",
            },
            {
                icon: "mysql",
                text: "MySql",
            },
            {
                icon: "tailwind",
                text: "Tailwind",
            },
        ],
        github: "https://github.com/cristian-ves/paqueteria-frontend",
        deploy: "https://google.com", //TODO: add the link
    },
    {
        title: "Facade painting showcase",
        src: "manuel-freire",
        desc: "Website for a Madrid-based Spanish painter showcasing facade and house painting work, with a contact and quote request form.",
        badges: [
            {
                icon: "next",
                text: "Next"
            },
            {
                icon: faNodeJs,
                text: "Node"
            },
            {
                icon: "sass",
                text: "SASS"
            }
        ],
        github: "https://github.com/cristian-ves/manuel-freire",
        deploy: "https://google.com" //TODO: add the link
    },
    {
        title: "Typescript compiler",
        src: "compiler",
        desc: "Compiler that takes TypeScript-like code, analyzes it syntactically and semantically, compiles, and displays the result in a console.",
        badges: [
            {
                icon: "java",
                text: "Java"
            },
            {
                icon: "typescript",
                text: "Typescript"
            }
        ],
        github: "https://github.com/cristian-ves/typescript-clone",
        deploy: ""
    }
]