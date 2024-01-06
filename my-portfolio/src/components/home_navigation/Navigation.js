import useHoverScale from '../../effects/useHoverScale.js';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Navigation() {
    //Hover effect
    const { handleMouseEnter, handleMouseLeave, getScaleStyle } = useHoverScale();

    //Adding Navigation bar dropdown blur effect
    const [isSticky, setSticky] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        setSticky(offset > 200);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to create a navigation link
    const scrollLink = (to, label) => {
        const isGcLink = label.toLowerCase() === 'gc';

        return (
            <Link
                to={isGcLink ? 'home' : to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                className="navLinkElem textSizeS"
                style={getScaleStyle(isGcLink ? 'gc' : to)}
                onMouseEnter={() => handleMouseEnter(isGcLink ? 'gc' : to)}
                onMouseLeave={handleMouseLeave}
            >
                {label}
            </Link>
        );
    };

    return (
        <div className = "paddingGlobal">
            <div className = "largeContainer">
                <nav className={`Navigation ${isSticky ? 'sticky' : ''}`}>
                    <div className = "paddingGlobal">
                        <div className="navLinks">
                            <div className = "navLinks-Left">
                                {scrollLink('home', 'gc')}
                            </div>

                            <div className = "navLinks-Right">
                                {scrollLink('home', 'Home')}
                                {scrollLink('aboutMe', 'About\u00A0Me')}
                                {scrollLink('projects', 'Projects')}
                                {scrollLink('testimonials', 'Testimonials')}
                                {scrollLink('contact', 'Contact')}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navigation;