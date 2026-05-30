import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ContactButtonProps {
    icon: IconDefinition;
    onClick: () => void;
    text: string;
}

export const ContactButton = ({ onClick, icon, text }: ContactButtonProps) => {
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