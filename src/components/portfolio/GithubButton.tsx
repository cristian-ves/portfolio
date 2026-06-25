"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useDropdown } from "@/hooks/useDropdown";

interface MultiRepo {
    frontend: string;
    backend: string;
}

interface GithubButtonProps {
    github: string | MultiRepo;
}

export const GithubButton = ({ github }: GithubButtonProps) => {
    const { dropdownOpen, toggleDropdown, closeDropdown, dropdownRef } = useDropdown();
    const hasMultipleRepos = typeof github === "object";

    if (!hasMultipleRepos) {
        return (
            <a
                className="glass-btn flex items-center gap-2 py-1.5 px-3 text-sm text-white"
                href={github as string}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faGithub} className="fa-fw text-lg" />
                <span>GitHub</span>
            </a>
        );
    }

    const { frontend, backend } = github as MultiRepo;

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                className="glass-btn flex items-center gap-2 py-1.5 px-3 text-sm text-white"
                onClick={toggleDropdown}
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
                        href={frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                        onClick={closeDropdown}
                    >
                        Frontend
                    </a>
                    <a
                        href={backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                        onClick={closeDropdown}
                    >
                        Backend
                    </a>
                </div>
            )}
        </div>
    );
};