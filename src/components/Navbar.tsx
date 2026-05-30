"use client";
import { faAddressCard, faCubes, faFolderOpen, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useNavbarVisibility } from "@/hooks/useNavbarVisibility";
import { NavbarItem } from "./NavbarItem";

const icons = [
    { icon: faHome, text: "Home" },
    { icon: faFolderOpen, text: "Portfolio" },
    { icon: faCubes, text: "Skills" },
    { icon: faUser, text: "About me" },
    { icon: faAddressCard, text: "Contact" },
];

export const Navbar = () => {
    const activeSection = useActiveSection(icons.map(({ text }) => text));
    const isVisible = useNavbarVisibility();

    const handleScrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav
            className={`fixed bottom-10 py-1.5 px-4 bg-white/25 rounded-lg bg-clip-padding  backdrop-filter backdrop-blur-md border border-white/20 flex items-center justify-between gap-6  text-white transition-all duration-500 z-10 w-80 md:w-auto md:px-10
        ${isVisible ? "animate__animated animate__fadeIn visible" : "animate__animated animate__fadeOut invisible"}`}
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
        </nav>
    );
};