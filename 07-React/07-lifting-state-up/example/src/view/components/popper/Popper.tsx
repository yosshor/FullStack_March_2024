import React, { useState, useRef, useEffect } from 'react';
import './Popper.css';

interface PopperProps {
    content: React.ReactNode;
    children: React.ReactNode;
}

const Popper: React.FC<PopperProps> = ({ content, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const popperRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (popperRef.current && !popperRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="popper-container" ref={popperRef}>
            <div onClick={() => setIsOpen(!isOpen)}>
                {children}
            </div>
            {isOpen && (
                <div className="popper-content">
                    {content}
                </div>
            )}
        </div>
    );
};

export default Popper;