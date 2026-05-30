import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { PortfolioAppInterface } from "@/helpers";
import { Badge } from "./Badge";

export const PortfolioAppCard = ({ app }: { app: PortfolioAppInterface }) => {
    const { title, src, badges, desc, deploy, github } = app;

    return (
        <div className="glass-card p-5 flex flex-col gap-4 w-full md:flex-row md:items-center md:justify-between md:gap-8">

            <div className="flex flex-col gap-4 md:flex-1">
                <h3 className="font-bold text-xl">{title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{desc}</p>

                <div className="flex gap-2 flex-wrap">
                    {badges.map((badge, i) => (
                        <Badge icon={badge.icon} text={badge.text} key={i} />
                    ))}
                </div>

                <div className="flex items-center gap-3">

                    <a className="glass-btn flex items-center gap-2 py-1.5 px-3 text-sm"
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} className="fa-fw text-lg" />
                        <span>GitHub</span>
                    </a>
                    {deploy !== "" && (
                        <a
                            className="glass-btn flex items-center gap-2 py-1.5 px-3 text-sm"
                            href={deploy}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faLink} className="fa-fw text-lg" />
                            <span>Live site</span>
                        </a>
                    )}
                </div>
            </div>

            {/* Right: image — hidden on mobile, shown md+ */}
            <div className="hidden md:block flex-shrink-0">
                <Image
                    src={`/portfolio/${src}.png`}
                    alt={title}
                    width={300}
                    height={200}
                    className="rounded-md object-cover"
                />
            </div>

            {/* Mobile: image shown below content */}
            <div className="md:hidden w-full">
                <Image
                    src={`/portfolio/${src}.png`}
                    alt={title}
                    width={400}
                    height={250}
                    className="rounded-md object-cover w-full"
                />
            </div>
        </div>
    );
};