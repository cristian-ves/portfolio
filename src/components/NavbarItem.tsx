import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavbarItemProps {
    icon: any;
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
        className="flex flex-col items-center cursor-pointer"
        onClick={onClick}
    >
        <FontAwesomeIcon
            icon={icon}
            className={`fa-fw text-2xl transition-all duration-300 ${
                isActive ? "text-black/90" : "text-black/70"
            }`}
        />
        <p
            className={`text-xs transition-all duration-300 ${
                isActive ? "text-black/90" : "text-black/70"
            }`}
        >
            {text}
        </p>
    </div>
);
