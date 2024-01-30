import { HamburgerMenuSVGIcon, CloseSVGIcon } from '../../assets/SVGs.js';
import useHoverScale from '../../effects/useHoverScale.js';
import useMobileView from '../../functions/useMobileView.js';
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
    const scrollLink = (to, label, classAttributes) => {
        const isGcLink = label.toLowerCase() === 'gc';

        return (
            <ScrollLink
                to={isGcLink ? 'home' : to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
                className={`navLinkElem ${classAttributes}`}
                style={getScaleStyle(isGcLink ? 'gc' : to)}
                onMouseEnter={() => handleMouseEnter(isGcLink ? 'gc' : to)}
                onMouseLeave={handleMouseLeave}
            >
                {label}
            </ScrollLink>
        );
    };

    //Mobile view active for screens less than 768px
    const isMobileView = useMobileView();

    //Mobile menu used for hamburger menu 
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // Declare isMobileMenuOpen state variable

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <div className = "paddingGlobal">
            <div className = "largeContainer">
                <nav className={`Navigation ${isSticky ? 'sticky' : ''}`}>
                    <div className = "paddingGlobal">
                        <div className="navLinks">
                            {!isMobileView && (
                                <div className="navLinks-Left">
                                    {scrollLink('home', 'gc')}
                                </div>
                            )}

                            <div className = "navLinks-Right">
                                {/* Conditionally render regular links or hamburger icon */}
                                {isMobileView ? (
                                    // Mobile Hamburger Menu Icon
                                    <div className="hamburgerSVGWrapper" onClick={toggleMobileMenu}>
                                        {isMobileView && (
                                            <HamburgerMenuSVGIcon className={`line ${isMobileMenuOpen ? 'active' : ''}`} />
                                        )}
                                    </div>
                                ) : (
                                    // Regular Links
                                    <div className="navLinks-Right">
                                        {scrollLink('home', 'Home', 'textSizeS')}
                                        {scrollLink('aboutMe', 'About\u00A0Me', 'textSizeS')}
                                        {scrollLink('projects', 'Projects', 'textSizeS')}
                                        {scrollLink('testimonials', 'Testimonials', 'textSizeS')}
                                        {scrollLink('contact', 'Contact', 'textSizeS')}
                                    </div>
                                )}

                                {/* Mobile Menu Overlay */}
                                {isMobileMenuOpen && (
                                    <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
                                        <div className="mobile-menu-links">
                                            <div className = "closeNavSVGWrapper">
                                                <CloseSVGIcon onClick={closeMobileMenu}/>
                                            </div>
                                            {scrollLink('home', 'Home', 'textSizeM')}
                                            {scrollLink('aboutMe', 'About\u00A0Me', 'textSizeM')}
                                            {scrollLink('projects', 'Projects', 'textSizeM')}
                                            {scrollLink('testimonials', 'Testimonials', 'textSizeM')}
                                            {scrollLink('contact', 'Contact', 'textSizeM')}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navigation;