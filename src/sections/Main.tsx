"use client";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown, faCopy, faEnvelope, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const socialIcons = [
    { icon: faEnvelope, href: "mailto:alejandrovasquezesc@gmail.com", text: 'email' },
    { icon: faFileLines, href: "/cristian-vasquez-cv.pdf", download: true, text: 'cv' },
    { icon: faGithub, href: "https://github.com/cristian-ves", text: 'github' },
    { icon: faLinkedin, href: "https://linkedin.com/in/cristian-vasquez-web-developer", text: 'linkedin' },
];

export const Main = () => {
    const scrollDown = () => {
        document.getElementById("Portfolio")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main
            className="min-h-screen w-full flex flex-col items-center justify-around pt-16
        lg:grid lg:grid-cols-2 lg:grid-rows-[auto_auto_auto] lg:items-center"
            id="Home"
        >
            {/* Profile card */}
            <div className="flex flex-col items-center gap-3">
                <div className="relative w-40 h-56 lg:w-65 lg:h-90 overflow-hidden rounded-lg">
                    <Image
                        src="/profile.webp"
                        fill
                        className="object-cover rounded-lg"
                        alt="Cristian's profile picture"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/25" />
                </div>
                <div className="flex flex-col items-center gap-1">
                    <h2 className="font-bold text-lg">Hello, I'm Cristian</h2>
                    <h1 className="text-white/70">Software Developer</h1>
                    <p className="text-sm text-cyan-100/50 text-center max-w-48 mb-1">
                        React · Next.js · Java · Spring Boot
                    </p>
                    <div className="bg-cyan-700 px-3 py-0.5 rounded-full mt-1">
                        <p className="text-xs">Available for work</p>
                    </div>
                </div>
            </div>

            {/* Bio — only lg+ */}
            <div className="hidden lg:flex flex-col gap-3 max-w-sm lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:place-self-center">
                <h2 className="font-bold text-2xl leading-snug">Frontend & Full-Stack Developer</h2>
                <p className="text-white/75 leading-relaxed">
                    I build modern, responsive web apps using <strong className="text-white">React.js</strong> and{" "}
                    <strong className="text-white">Next.js</strong>, with a strong focus on UI/UX and performance.
                    On the backend I work with <strong className="text-white">Java</strong> and{" "}
                    <strong className="text-white">Spring Boot</strong> to build scalable REST APIs, and{" "}
                    <strong className="text-white">Node.js</strong> for lightweight full-stack solutions.
                </p>
            </div>

            {/* Email + social links */}
            <div className="flex flex-col md:flex-row gap-4 lg:flex-col lg:col-start-1 lg:place-self-center">
                <div
                    className="glass-btn flex items-center gap-1 px-3 py-2 text-sm text-white/90 w-full"
                    onClick={() => navigator.clipboard.writeText("alejandrovasquezesc@gmail.com")}>
                    <span className="flex-1 truncate">alejandrovasquezesc@gmail.com</span>
                    <FontAwesomeIcon
                        icon={faCopy}
                        className="fa-fw text-lg cursor-pointer shrink-0"
                    />
                </div>
                <div className="flex items-center justify-around lg:gap-6">
                    {socialIcons.map(({ icon, href, text, download }, i) => (
                        <a
                            key={i}
                            href={href}
                            download={download || undefined}
                            target={download ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            className="flex flex-col items-center"
                        >
                            <FontAwesomeIcon
                                icon={icon}
                                className="fa-fw text-3xl text-white/60 hover:text-white transition-colors duration-200 cursor-pointer"
                            />
                            <span className="text-[11px]">{text}</span>
                        </a>
                    ))}
                </div>
            </div>

            <div
                className="flex flex-col items-center cursor-pointer text-white/50 hover:text-white/80 transition-colors lg:col-span-2"
                onClick={scrollDown}
            >
                <p className="text-xs">scroll down</p>
                <FontAwesomeIcon icon={faAngleDown} className="fa-fw text-2xl" />
            </div>
        </main >
    );
};