"use client";
import {
    faAddressCard,
    faCubes,
    faFolder,
    faHome,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useNavbarVisibility } from "@/hooks/useNavbarVisibility";
import { NavbarItem } from "./NavbarItem";

const icons = [
    { icon: faHome, text: "Home" },
    { icon: faFolder, text: "Portfolio" },
    { icon: faCubes, text: "Skills" },
    { icon: faUser, text: "About Me" },
    { icon: faAddressCard, text: "Contact" },
];

export const Navbar = () => {
    const activeSection = useActiveSection(icons.map(({ text }) => text));
    const isVisible = useNavbarVisibility();

    const handleScrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div
            className={`fixed bottom-12 w-80 py-1 px-3 bg-white/30 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-400 
            flex items-center justify-between text-black/70 transition-all duration-500
            ${
                isVisible
                    ? "animate__animated animate__fadeIn visible"
                    : "animate__animated animate__fadeOut invisible"
            }`}
        >
            {icons.map(({ icon, text }, i) => (
                <NavbarItem
                    key={i}
                    icon={icon}
                    text={text}
                    isActive={activeSection === text}
                    onClick={() => handleScrollToSection(text)}
                />
            ))}
        </div>
    );
};
