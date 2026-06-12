"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const NavigationContext = createContext<{ startLoading: () => void }>({
    startLoading: () => { },
});

export const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
    const [active, setActive] = useState(false);
    const [complete, setComplete] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (active) {
            setComplete(true);
            const t = setTimeout(() => {
                setActive(false);
                setComplete(false);
            }, 300);
            return () => clearTimeout(t);
        }
    }, [pathname]);

    const startLoading = () => {
        setComplete(false);
        setActive(true);
    };

    return (
        <NavigationContext.Provider value={{ startLoading }}>
            {active && (
                <div className={`progress-bar ${complete ? "complete" : ""}`} />
            )}
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => useContext(NavigationContext);