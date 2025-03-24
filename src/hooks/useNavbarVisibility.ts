import { useEffect, useState } from "react";

export const useNavbarVisibility = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const mainSection = document.getElementById("Home");
            if (mainSection) {
                const mainBottom = mainSection.getBoundingClientRect().bottom;
                setIsVisible(mainBottom + 500 < window.innerHeight);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return isVisible;
};
