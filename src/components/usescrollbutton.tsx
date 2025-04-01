'use client';
import { useState, useEffect } from 'react';
function useScrollButton() {
    const [showButton, setShowButton] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const scrollFunction = () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
            
            const protocolmenu = document.querySelector('.protocolmenu');
            if (protocolmenu) {
                const offset = protocolmenu.getBoundingClientRect().top;
                const top = window.scrollY;

                if (top >= offset) {
                    setIsFixed(true);
                } else {
                    setIsFixed(false);
                }
            }
        };

        window.addEventListener('scroll', scrollFunction);
        return () => {
            window.removeEventListener('scroll', scrollFunction);
        };
    }, []);

    function backToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return { showButton, backToTop, isFixed };
}

export default useScrollButton;
