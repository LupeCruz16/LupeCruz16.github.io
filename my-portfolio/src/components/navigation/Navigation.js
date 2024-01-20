import useHoverScale from '../../effects/useHoverScale.js';
import { Link as ScrollLink } from 'react-scroll';
import { useState, useEffect } from 'react';
import "./navigation.css"

function Navigation() {
    //Hover effect
    const { handleMouseEnter, handleMouseLeave, getScaleStyle } = useHoverScale();
    
    // Adding navigation bar dropdown blur effect
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

    // Simplifies the scrolling to different sections on the home page
    // gc directs the user to the top of the home page
    const scrollLink = (to, label) => {
        const isGcLink = label.toLowerCase() === 'gc';

        return (
            <ScrollLink
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
            </ScrollLink>
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