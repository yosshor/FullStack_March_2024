import React, { FC, useEffect, useState } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
    title: string;
}

const Modal: FC<ModalProps> = ({ children, onClose, title }) => {


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
                        <div className={styles.header}>
                            <h3 className={styles.modalTitle}>{title}</h3>
                            <button
                                className={styles.closeButton}
                                onClick={onClose}
                            >
                                Close
                            </button>
                        </div>
                        {children}

                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
