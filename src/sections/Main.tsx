'use client'

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
    faAngleDown,
    faCopy,
    faEnvelope,
    faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const icons = [faEnvelope, faFileLines, faGithub, faLinkedin];

export const Main = () => {

    const scrollDown = () => {
        document.getElementById('Portfolio')?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <main
            className="min-h-screen flex flex-col items-center justify-around pt-15 lg:grid lg:grid-cols-2 lg:grid-rows-[auto_auto_auto] lg:w-full"
            id="Home"
        >
            <div className="flex flex-col items-center">
                <div className="relative w-42 h-60 overflow-hidden lg:w-64 lg:h-92">
                    <Image
                        src="/profile.webp"
                        layout="fill"
                        objectFit="cover"
                        alt="Profile picture"
                        quality={90}
                        className="rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/35 opacity-70"></div>
                </div>
                <div className="flex flex-col items-center justify-center m-1">
                    <h2>
                        <strong>Hello, I'm Cristian</strong>
                    </h2>
                    <h1>Software developer</h1>
                    <div className="bg-cyan-700 px-2 py-0.5 rounded-3xl mt-1">
                        <p className="text-xs">Available for work</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 lg:flex-col lg:col-start-1 lg:place-self-center">
                <div className="h-full w-full bg-white/40 rounded-sm bg-clip-padding border border-gray-400 flex items-center pl-1.5 gap-0.5 text-xs text-black lg:px-8">
                    <p>alejandrovasquezesc@gmail.com</p>
                    <FontAwesomeIcon
                        icon={faCopy}
                        className="fa-fw text-xl cursor-pointer p-1.5"
                    />
                </div>
                <div className="flex items-center justify-between lg:justify-evenly">
                    {icons.map((icon, i) => (
                        <FontAwesomeIcon
                            icon={icon}
                            className="fa-fw text-4xl text-white/70 cursor-pointer"
                            key={i}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center cursor-pointer lg:col-span-2" onClick={scrollDown}>
                <p className="text-xs text-white/70">scroll down</p>
                <FontAwesomeIcon
                    icon={faAngleDown}
                    className="fa-fw text-2xl md:text-4xl text-white/70"
                />
            </div>
            <div className="hidden lg:flex lg:flex-col lg:gap-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:place-self-center lg:max-w-96">
                <h2><strong>Frontend & Full-Stack Developer</strong></h2>
                <p>I build modern, responsive web apps using React.js, Next.js, and Java. With a strong focus on UI/UX and performance, I craft seamless user experiences. I also work with Node.js and Golang to develop scalable full-stack solutions.</p>
            </div>
        </main>
    );
};
