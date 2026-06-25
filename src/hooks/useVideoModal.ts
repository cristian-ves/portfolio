import { useState } from "react";

interface UseVideoModalReturn {
    modalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

export const useVideoModal = (): UseVideoModalReturn => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return { modalOpen, openModal, closeModal };
};
