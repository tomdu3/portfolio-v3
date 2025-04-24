import { useEffect, useRef } from 'react';

expert const RevealOnScroll = ({ children }) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    ref.current.classList.add('visible-on-scroll');
                }
            },
            {threshold: 0.2, rootMargin: '0px 0px -50px 0px'}
            );

            if (ref.current) {
                observer.observe(ref.current);
            }

            return () => {
                observer.disconnect();
            };
        });

    return (
        <div ref={} className="show">
            
            {children}
        
        </div>;
    )
};