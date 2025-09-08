import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds: string[]) => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            let closestSection = "";
            let minDistance = Infinity;
            const viewportCenter = window.innerHeight / 2;

            sectionIds.forEach((id) => {
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    // find section center relative to viewport
                    const sectionCenter = rect.top + rect.height / 2;
                    const distance = Math.abs(sectionCenter - viewportCenter);

                    if (distance < minDistance) {
                        minDistance = distance;
                        closestSection = id;
                    }
                }
            });

            if (closestSection) setActiveSection(closestSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // run on mount
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sectionIds]);

    return activeSection;
};