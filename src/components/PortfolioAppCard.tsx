"use client"
import { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

import { PortfolioAppInterface } from "@/helpers";
import { Badge } from "./Badge";

export const PortfolioAppCard = ({ app }: { app: PortfolioAppInterface }) => {
    const { title, src, badges, desc, deploy, github } = app;

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const hasMultipleRepos = typeof github === "object";

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={`relative flex flex-col gap-4 w-full md:flex-row md:items-center md:justify-between md:gap-8 p-5 ${dropdownOpen ? "z-30" : "z-0"}`}>

            <div className="absolute inset-0 rounded-lg border border-white/15 backdrop-blur-md -z-10"
                style={{ background: "var(--glass-bg)" }}
            />

            <div className="flex flex-col gap-4 md:flex-1">
                <h3 className="font-bold text-xl">{title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{desc}</p>

                <div className="flex gap-2 flex-wrap">
                    {badges.map((badge, i) => (
                        <Badge icon={badge.icon} text={badge.text} key={i} />
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    {hasMultipleRepos ? (
                        <div className="relative" ref={dropdownRef}>
                            <button
                                className="glass-btn flex items-center gap-2 py-1.5 px-3 text-sm text-white"
                                onClick={() => setDropdownOpen(prev => !prev)}
                            >
                                <FontAwesomeIcon icon={faGithub} className="fa-fw text-lg" />
                                <span>GitHub</span>
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className={`fa-fw text-xs transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                                />
                            </button>
                            {dropdownOpen && (
                                <div
                                    className="absolute top-full left-0 mt-1 py-1 min-w-36 z-50 rounded-md border border-white/15"
                                    style={{ background: "#1a1a1a" }}
                                >
                                    <a
                                        href={(github as { frontend: string; backend: string }).frontend}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                                        onClick={() => setDropdownOpen(false)}
                                    >
                                        Frontend
                                    </a>
                                    <a
                                        href={(github as { frontend: string; backend: string }).backend}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                                        onClick={() => setDropdownOpen(false)}
                                    >
                                        Backend
                                    </a>
                                </div>
                            )}
                        </div>
                    ) : (
                        <a
                            className="glass-btn flex items-center gap-2 py-1.5 px-3 text-sm text-white"
                            href={github as string}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} className="fa-fw text-lg" />
                            <span>GitHub</span>
                        </a>
                    )}

                    {deploy !== "" && (
                        <a
                            className="glass-btn flex items-center gap-2 py-1.5 px-3 text-sm text-white"
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