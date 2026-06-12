import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavbarItemProps {
    icon: IconDefinition;
    text: string;
    isActive: boolean;
    onClick: () => void;
}

export const NavbarItem = ({
    icon,
    text,
    isActive,
    onClick,
}: NavbarItemProps) => (
    <div
        className="flex flex-col items-center cursor-pointer gap-0.5"
        onClick={onClick}
    >
        <FontAwesomeIcon
            icon={icon}
            className={`fa-fw text-2xl transition-all duration-300 ${isActive ? "text-cyan-950" : "text-black/70"
                }`}
        />
        <p className={`text-[11px] md:text-xs transition-all duration-300 ${isActive ? "text-cyan-950" : "text-black/70"
            }`}>
            {text}
        </p>
        <div className={`w-1 h-1 rounded-full bg-cyan-950 transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0"
            }`} />
    </div>
);