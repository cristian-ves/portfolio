"use client";
import { useEffect } from "react";

export const ScrollRestorer = () => {
    useEffect(() => {
        const saved = sessionStorage.getItem("scroll:/");
        if (saved) {
            document.documentElement.style.scrollBehavior = "auto";
            window.scrollTo(0, parseInt(saved));
            requestAnimationFrame(() => {
                document.documentElement.style.scrollBehavior = "";
            });
            sessionStorage.removeItem("scroll:/");
        }
    }, []);

    return null;
};