"use client"
import { useEffect, useRef } from "react";

export default function AnimEasein({ children }) {
    const elementsRef = useRef([]);
    useEffect(() => {
        // Select all elements with the 'ease-in-element' class
        const elements = document.querySelectorAll('.animation-ease-in');

        // Initialize elementsRef with the selected elements
        elementsRef.current = Array.from(elements);

        const onScroll = () => {
            elementsRef.current.forEach((element) => {
                const distanceFromTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (distanceFromTop - windowHeight < 0 ) { 
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                    element.dataset.easedIn = true;
                } else if (element.dataset.easedIn) {
                    element.style.opacity = '0';
                    element.style.transform = 'translateY(6rem)';
                    element.dataset.easedIn = false;
                }
            });
        };

        // Add scroll event listener
        window.addEventListener('scroll', onScroll);

        // Remove scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []); // This effect runs only once when the component mounts

    return (
        <div className="animation-ease-in opacity-50 translate-y-[6rem] duration-1000 ease-in-out">
            {children}
        </div>
    );
}