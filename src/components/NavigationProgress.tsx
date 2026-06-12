"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const NavigationProgress = () => {
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

    const start = () => {
        setComplete(false);
        setActive(true);
    };

    return (
        <>
            {active && (
                <div className={`progress-bar ${complete ? "complete" : ""}`} />
            )}
            <script
                dangerouslySetInnerHTML={{
                    __html: `window.__startProgress = ${start.toString()}`,
                }}
            />
        </>
    );
};