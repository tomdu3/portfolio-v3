import { useEffect, useRef } from 'react';

export const RevealOnScroll = ({ children }) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    ref.current.classList.add('visible-on-scroll');
                } else {
                    ref.current.classList.remove('visible-on-scroll');
                }
            },
            {
                threshold: 0.01,
                rootMargin: '0px'
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={ref} className="show">
            {children}
        </div>
    );
};