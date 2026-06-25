import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ContactButtonProps {
    icon: IconDefinition;
    onClick?: () => void;
    text: string;
    href?: string;
    download?: boolean;
}

export const ContactButton = ({ onClick, icon, text, href, download }: ContactButtonProps) => {
    if (href) {
        return (
            <a
                className="glass-btn flex items-center justify-center gap-2 py-2.5 px-4 w-full font-medium text-white"
                href={href}
                download={download}
                target={download ? undefined : "_blank"}
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={icon} className="fa-fw text-xl" />
                <span>{text}</span>
            </a >
        );
    }
    return (
        <button
            className="glass-btn flex items-center justify-center gap-2 py-2.5 px-4 w-full font-medium text-white"
            onClick={onClick}
        >
            <FontAwesomeIcon icon={icon} className="fa-fw text-xl" />
            <span>{text}</span>
        </button>
    );
};