import { useEffect, useRef, useState } from "react";

interface UseDropdownReturn {
    dropdownOpen: boolean;
    toggleDropdown: () => void;
    closeDropdown: () => void;
    dropdownRef: React.RefObject<HTMLDivElement | null>;
}

export const useDropdown = (): UseDropdownReturn => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // close dropdown when user clicks anywhere outside of it
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node)
            ) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleDropdown = () => setDropdownOpen((prev) => !prev);
    const closeDropdown = () => setDropdownOpen(false);

    return { dropdownOpen, toggleDropdown, closeDropdown, dropdownRef };
};
