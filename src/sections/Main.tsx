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
    return (
        <main
            className="min-h-screen flex flex-col items-center justify-around pt-15"
            id="Home"
        >
            <div>
                <div className="relative w-42 h-60 overflow-hidden">
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
            <div>
                <div className="h-full w-full bg-white/40 rounded-sm bg-clip-padding border border-gray-400 flex items-center pl-1.5 gap-0.5 text-xs text-black">
                    <p>alejandrovasquezesc@gmail.com</p>
                    <FontAwesomeIcon
                        icon={faCopy}
                        className="fa-fw text-xl cursor-pointer p-1.5"
                    />
                </div>
                <div className="flex items-center justify-between mt-4">
                    {icons.map((icon, i) => (
                        <FontAwesomeIcon
                            icon={icon}
                            className="fa-fw text-4xl text-white/70 cursor-pointer"
                            key={i}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
                <p className="text-xs text-white/70">scroll down</p>
                <FontAwesomeIcon
                    icon={faAngleDown}
                    className="fa-fw text-2xl text-white/70"
                />
            </div>
        </main>
    );
};
