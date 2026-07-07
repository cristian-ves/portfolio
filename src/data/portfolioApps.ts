import {
    IconDefinition,
    faNodeJs,
    faReact,
} from "@fortawesome/free-brands-svg-icons";

export interface BadgeInterface {
    icon: IconDefinition | string;
    text: string;
}

export interface PortfolioAppInterface {
    title: string;
    src: string;
    desc: string;
    badges: BadgeInterface[];
    github: string | { frontend: string; backend: string };
    deploy: string;
    featured: boolean;
    coldStart?: boolean;
    video?: string;
}

export const portfolioApps: PortfolioAppInterface[] = [
    {
        title: "E-Commerce Platform",
        src: "ecommerce",
        desc: "Full-stack e-commerce platform with four role-based dashboards: buyers can browse, filter, and purchase products with real-time cart updates; sellers list items pending moderator approval; logistics manages deliveries; and admins access employee management and sales reports. Built as a solo project with JWT auth, optimistic UI, and demo accounts for instant role switching.",
        badges: [
            { icon: "springboot", text: "Spring Boot" },
            { icon: faReact, text: "React" },
            { icon: "typescript", text: "Typescript" },
            { icon: "postgresql", text: "PostgreSQL" },
            { icon: "redux", text: "Redux" },
            { icon: "java", text: "Java" },
        ],
        github: {
            frontend: "https://github.com/cristian-ves/ecommerce-frontend",
            backend: "https://github.com/cristian-ves/ecommerce-backend",
        },
        deploy: "https://ecommerce-cav.netlify.app",
        featured: true,
        coldStart: true,
        video: "ecommerce",
    },
    {
        title: "Packages app",
        src: "packages",
        desc: "A web system for tracking packages, managing storage, automating logistics and calculating costs, with role-based access for administrators, operators and receptionists.",
        badges: [
            { icon: faReact, text: "React" },
            { icon: "go", text: "Go" },
            { icon: "mysql", text: "MySql" },
            { icon: "tailwind", text: "Tailwind" },
        ],
        github: {
            frontend: "https://github.com/cristian-ves/paqueteria-frontend",
            backend: "https://github.com/cristian-ves/paqueteria-backend",
        },
        deploy: "https://google.com",
        featured: false,
    },
    {
        title: "Hospital Emergency System",
        src: "hospital",
        desc: "Real-time concurrent hospital emergency simulator built with Spring Boot and React. Features priority-based patient triage, semaphore-controlled resource pools, WebSocket live updates via STOMP/SockJS, and Redux Toolkit for reactive state management. Implements deadlock detection and resolution using Coffman conditions.",
        badges: [
            { icon: "springboot", text: "Spring Boot" },
            { icon: faReact, text: "React" },
            { icon: "typescript", text: "Typescript" },
            { icon: "socketdotio", text: "WebSockets" },
            { icon: "java", text: "Java" },
            { icon: "redux", text: "Redux" },
        ],
        github: {
            frontend: "https://github.com/cristian-ves/hospital-frontend",
            backend: "https://github.com/cristian-ves/hospital-backend",
        },
        deploy: "https://hospital-emergency-room.netlify.app",
        featured: true,
        coldStart: true,
        video: "hospital",
    },
    {
        title: "Facade painting showcase",
        src: "manuel-freire",
        desc: "Production website built for a Madrid-based painter (Spain), showcasing facade and house painting work with a contact and quote request form. Delivered remotely as a freelance project.",
        badges: [
            { icon: "next", text: "Next" },
            { icon: faNodeJs, text: "Node" },
            { icon: "sass", text: "SASS" },
        ],
        github: "https://github.com/cristian-ves/manuel-freire",
        deploy: "https://google.com",
        featured: true,
    },
    {
        title: "Typescript compiler",
        src: "compiler",
        desc: "Compiler that takes TypeScript-like code, analyzes it syntactically and semantically, compiles, and displays the result in a console.",
        badges: [
            { icon: "java", text: "Java" },
            { icon: "typescript", text: "Typescript" },
        ],
        github: "https://github.com/cristian-ves/typescript-clone",
        deploy: "",
        featured: false,
    },
];
