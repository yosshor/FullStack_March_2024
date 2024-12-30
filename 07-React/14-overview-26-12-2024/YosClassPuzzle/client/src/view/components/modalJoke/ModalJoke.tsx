import React, { FC, useEffect } from "react";
import styles from "./ModalJoke.module.scss";

interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
}

const ModalJoke: FC<ModalProps> = ({ children, onClose }) => {
    useEffect(() => {
        // Add the overlay class to the body
        document.body.style.overflow = "hidden";

        // Cleanup function to reset the body style
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <>
            {/* Background Overlay */}
            <div className={styles.bodyOverlay} onClick={onClose}></div>
            {/* Modal */}
            <div className={styles.body}>
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <button
                            className={styles.closeButton}
                            onClick={onClose}
                        >
                            Close
                        </button>
                        {children}
                        <div className={styles.buttons}>
                            <button className={styles.updateButton} onClick={onClose}>Update</button>
                            <button className={styles.deleteButton} onClick={onClose}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalJoke;
