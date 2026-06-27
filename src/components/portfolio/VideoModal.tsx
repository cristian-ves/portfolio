"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faVolumeXmark, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

interface VideoModalProps {
    src: string;
    isPlaying: boolean;
    videoRef: React.RefObject<HTMLVideoElement | null>;
    onClose: () => void;
    togglePlay: () => void;
}

export const VideoModal = ({ src, isPlaying, videoRef, onClose, togglePlay }: VideoModalProps) => {
    const [mounted, setMounted] = useState(false);

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
                    <FontAwesomeIcon icon={faXmark} className="fa-fw text-white text-sm" />
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
                        <FontAwesomeIcon icon={faVolumeXmark} className="fa-fw text-xs" />
                        <span>No audio</span>
                    </div>

                    <button
                        onClick={togglePlay}
                        className="cursor-pointer absolute bottom-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
                    >
                        <FontAwesomeIcon
                            icon={isPlaying ? faPause : faPlay}
                            className="fa-fw text-white text-xs"
                        />
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};