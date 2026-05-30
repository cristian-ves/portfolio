"use client";
import { useEffect, useState } from "react";

interface Star {
    id: number;
    top: string;
    left: string;
    duration: string;
}

export const ShootingStars = () => {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        let counter = 0;

        const spawn = () => {
            const id = counter++;
            const star: Star = {
                id,
                top: `${Math.random() * 50}%`,   // only top half of screen
                left: `${Math.random() * 70}%`,   // avoid far right edge
                duration: `${0.8 + Math.random() * 1.2}s`, // 0.8s–1.8s
            };

            setStars(prev => [...prev, star]);

            setTimeout(() => {
                setStars(prev => prev.filter(s => s.id !== id));
            }, 2000);

            const next = 3000 + Math.random() * 2000;
            setTimeout(spawn, next);
        };

        const initial = setTimeout(spawn, 2000);
        return () => clearTimeout(initial);
    }, []);

    return (
        <>
            {stars.map(star => (
                <div
                    key={star.id}
                    className="shooting-star"
                    style={{
                        top: star.top,
                        left: star.left,
                        animationDuration: star.duration,
                    }}
                />
            ))}
        </>
    );
};