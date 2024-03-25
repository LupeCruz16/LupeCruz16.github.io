import { HamburgerMenuSVGIcon, CloseSVGIcon } from '../../assets/SVGs.js';
import useMobileView from '../../functions/useMobileView.js';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./navigation.css"

function Navigation() {
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
                <nav className= "Navigation">
                    <div className = "paddingGlobal">
                        <div className="navLinks">
                            {!isMobileView && (
                                <div className="navLinks-Left">
                                    <Link to = "/" className = "textSizeS navElem">gc</Link>
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
                                        <Link to = "/about" className = "textSizeS navElem">About Me</Link>
                                        <Link to = "/contact" className = "textSizeS navElem">Contact</Link>
                                    </div>
                                )}

                                {/* Mobile Menu Overlay */}
                                {isMobileMenuOpen && (
                                    <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
                                        <div className="mobile-menu-links">
                                            <div className = "closeNavSVGWrapper">
                                                <CloseSVGIcon onClick={closeMobileMenu}/>
                                            </div>
                                            <Link to = "/" className = "textSizeS navElem">gc</Link>
                                            <Link to = "/about" className = "textSizeS navElem">About Me</Link>
                                            <Link to = "/contact" className = "textSizeS navElem">Contact</Link>
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