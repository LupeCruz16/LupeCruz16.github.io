import { useState, useEffect } from 'react';

function useMobileView() {
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        // Adding a resize event listener to update the mobile view state
        window.addEventListener('resize', handleResize);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobileView;
}

export default useMobileView;
