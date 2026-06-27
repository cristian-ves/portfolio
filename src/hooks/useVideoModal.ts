import { useRef, useState } from "react";

interface UseVideoModalReturn {
    modalOpen: boolean;
    isPlaying: boolean;
    videoRef: React.RefObject<HTMLVideoElement | null>;
    openModal: () => void;
    closeModal: () => void;
    togglePlay: () => void;
}

export const useVideoModal = (): UseVideoModalReturn => {
    const [modalOpen, setModalOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const openModal = () => {
        setIsPlaying(true);
        setModalOpen(true);
    };
    const closeModal = () => setModalOpen(false);

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

    return {
        modalOpen,
        isPlaying,
        videoRef,
        openModal,
        closeModal,
        togglePlay,
    };
};
