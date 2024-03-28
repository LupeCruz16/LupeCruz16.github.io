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
        <header className = "primary-header content-grid">
            <div className = "breakout">
                <nav className = "primary-header_layout">
                    {/* Left side of navigation */}
                    {!isMobileView && (
                        <div>
                            <Link to = "/" className = "textSizeS nav-link">gc</Link>
                        </div>
                    )}

                    {/* Right side of navigation */}
                    <div>
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
                            <div className = "nav-links-right">
                                <Link to = "/about" className = "textSizeS nav-link">About Me</Link>
                                <Link to = "/contact" className = "textSizeS nav-link">Contact</Link>
                            </div>
                        )}

                        {/* Mobile Menu Overlay */}
                        {isMobileMenuOpen && (
                            <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
                                <div className="mobile-menu-links">
                                    <div className = "closeNavSVGWrapper">
                                        <CloseSVGIcon onClick={closeMobileMenu}/>
                                    </div>
                                    <Link to = "/" className = "textSizeS nav-link">gc</Link>
                                    <Link to = "/about" className = "textSizeS nav-link">About Me</Link>
                                    <Link to = "/contact" className = "textSizeS nav-link">Contact</Link>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navigation;