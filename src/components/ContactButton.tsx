import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ContactButtonProps {
    icon: IconDefinition;
    onClick: () => void;
    text: string;
}

export const ContactButton = ({ onClick, icon, text }: ContactButtonProps) => {
    return (
        <div
            className="flex items-center justify-center bg-white/50 rounded-xs bg-clip-padding border border-gray-400 py-2 px-2 gap-2 cursor-pointer w-full font-medium "
            onClick={onClick}
        >
            <FontAwesomeIcon icon={icon} className="fa-fw text-2xl" />
            <p>{text}</p>
        </div>
    );
};
