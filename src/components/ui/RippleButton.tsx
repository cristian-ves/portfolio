"use client";
import { useRef, useState } from "react";

interface Ripple {
    x: number;
    y: number;
    id: number;
}

interface RippleButtonProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    ripple?: boolean;
    as?: "button" | "a";
    href?: string;
    target?: string;
    rel?: string;
    download?: boolean;
}

export const RippleButton = ({
    children,
    className = "",
    style,
    onClick,
    ripple = true,
    as = "button",
    href,
    target,
    rel,
    download,
}: RippleButtonProps) => {
    const [ripples, setRipples] = useState<Ripple[]>([]);
    const nextId = useRef(0);

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        if (!ripple) {
            onClick?.();
            return;
        }

        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = nextId.current++;

        setRipples((prev) => [...prev, { x, y, id }]);
        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== id));
        }, 700);

        onClick?.();
    };

    const baseStyle: React.CSSProperties = {
        position: "relative",
        overflow: "hidden",
        ...style,
    };

    const content = (
        <>
            {children}
            {ripples.map(({ x, y, id }) => (
                <span
                    key={id}
                    style={{
                        position: "absolute",
                        left: x,
                        top: y,
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        border: "1.5px solid rgba(6, 182, 212, 0.9)",
                        boxShadow: "0 0 6px rgba(6, 182, 212, 0.6)",
                        transform: "translate(-50%, -50%) scale(0)",
                        animation: "void-ripple 0.7s ease-out forwards",
                        pointerEvents: "none",
                    }}
                />
            ))}
        </>
    );

    if (as === "a") {
        return (
            <a
                className={className}
                style={baseStyle}
                href={href}
                target={target}
                rel={rel}
                download={download}
                onClick={handleClick}
            >
                {content}
            </a >
        );
    }

    return (
        <button className={className} style={baseStyle} onClick={handleClick}>
            {content}
        </button>
    );
};