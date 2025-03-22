import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import { PortfolioAppInterface } from "@/helpers";
import { Badge } from "./Badge";

export const PortfolioApp = ({ app }: { app: PortfolioAppInterface }) => {
    const { title, src, badges, desc, deploy, github } = app;
    return (
        <div className="flex flex-col items-center w-75 gap-3">
            <h3 className="font-bold text-lg">{title}</h3>
            <Image
                src={`/portfolio/${src}.png`}
                alt="Packages app"
                width={260}
                height={195}
            />
            <p>{desc}</p>
            <div className="flex gap-2 items-center flex-wrap justify-center">
                {badges.map((badge, i) => (
                    <Badge icon={badge.icon} text={badge.text} key={i} />
                ))}
            </div>
            <div className="flex items-center gap-3 grow w-full justify-center">
                <a
                    className="flex items-center justify-evenly bg-white/40 rounded-sm bg-clip-padding border border-gray-400 py-1.5 px-2 gap-3 cursor-pointer"
                    href={github}
                    target="_blank"
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                        className="fa-fw text-2xl"
                    />
                    <p>Github</p>
                </a>
                {app.deploy !== "" && (
                    <a
                        className="flex items-center justify-center bg-white/40 rounded-sm bg-clip-padding border border-gray-400 py-1.5 px-2 gap-3 cursor-pointer"
                        href={deploy}
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            icon={faLink}
                            className="fa-fw text-2xl"
                        />
                        <p>View page</p>
                    </a>
                )}
            </div>
        </div>
    );
};
