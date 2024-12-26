import React, { FC } from "react";

import style from "./Modal..module.scss";

interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
}

const Modal: FC<ModalProps> = ({ children, onClose }) => {
    return (
        <div className={style.modal}>
            <div className={style.modalContent}>
                <button className={style.closeButton} onClick={onClose}>Close</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
