"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface VideoModalProps {
    src: string;
    onClose: () => void;
}

export const VideoModal = ({ src, onClose }: VideoModalProps) => {
    const [mounted, setMounted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        setMounted(true);
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEsc);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    if (!mounted) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate__animated animate__fadeIn animate__faster"
            style={{ background: "rgba(5, 5, 8, 0.92)", backdropFilter: "blur(6px)" }}
            onClick={onClose}
        >
            <div
                className="relative max-w-2xl w-full rounded-xl overflow-hidden animate__animated animate__zoomIn animate__faster"
                style={{
                    border: "1px solid rgba(179, 68, 112, 0.3)",
                    boxShadow: "0 0 60px rgba(179, 68, 112, 0.15), 0 20px 50px rgba(0,0,0,0.5)",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="cursor-pointer absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/20"
                    style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(4px)" }}
                    onClick={onClose}
                >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1 1L13 13M13 1L1 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </button>

                <div className="relative group">
                    <video
                        ref={videoRef}
                        src={src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-auto block cursor-pointer"
                        onClick={togglePlay}
                    />

                    <div
                        className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded-full text-xs text-white/70"
                        style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
                    >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M11 5L6 9H2V15H6L11 19V5Z" fill="currentColor" />
                            <path d="M16 9L20 15M20 9L16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <span>No audio</span>
                    </div>

                    <button
                        onClick={togglePlay}
                        className="cursor-pointer absolute bottom-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
                    >
                        {isPlaying ? (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="white">
                                <rect x="2" y="1" width="3" height="10" />
                                <rect x="7" y="1" width="3" height="10" />
                            </svg>
                        ) : (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="white">
                                <path d="M2 1L10 6L2 11V1Z" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};