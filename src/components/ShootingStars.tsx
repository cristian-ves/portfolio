"use client";
import { useEffect, useState } from "react";

interface ShootingStar {
    id: number;
    type: "shooting";
    top: string;
    left: string;
    duration: string;
}

interface TwinkleStar {
    id: number;
    type: "twinkle";
    top: string;
    left: string;
    duration: string;
}

type StarItem = ShootingStar | TwinkleStar;

export const ShootingStars = () => {
    const [stars, setStars] = useState<StarItem[]>([]);

    useEffect(() => {
        let counter = 0;

        const spawnShooting = () => {
            const id = counter++;
            setStars(prev => [...prev, {
                id,
                type: "shooting",
                top: `${Math.random() * 50}%`,   // only top half of screen
                left: `${Math.random() * 70}%`,   // avoid far right edge
                duration: `${0.8 + Math.random() * 1.2}s`, // 0.8s–1.8s
            }]);
            setTimeout(() => setStars(prev => prev.filter(s => s.id !== id)), 2000);
            setTimeout(spawnShooting, 3000 + Math.random() * 2000);
        };

        const spawnTwinkle = () => {
            const id = counter++;
            setStars(prev => [...prev, {
                id,
                type: "twinkle",
                top: `${Math.random() * 90}%`,    // anywhere on screen vertically
                left: `${Math.random() * 95}%`,   // anywhere on screen horizontally
                duration: `${0.6 + Math.random() * 1.1}s`, // 0.6s–1.3s
            }]);
            setTimeout(() => setStars(prev => prev.filter(s => s.id !== id)), 2000);
            setTimeout(spawnTwinkle, 2000 + Math.random() * 2000);
        };

        const t1 = setTimeout(spawnShooting, 2000);
        const t2 = setTimeout(spawnTwinkle, 500);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, []);

    return (
        <>
            {stars.map(star => (
                star.type === "shooting" ? (
                    <div
                        key={star.id}
                        className="shooting-star"
                        style={{ top: star.top, left: star.left, animationDuration: star.duration }}
                    />
                ) : (
                    <div
                        key={star.id}
                        className="twinkle-star"
                        style={{
                            top: star.top,
                            left: star.left,
                            ["--duration" as string]: star.duration,
                        }}
                    />
                )
            ))}
        </>
    );
};