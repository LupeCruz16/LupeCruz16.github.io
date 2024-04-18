import { PersonalLogoSVG, HamburgerMenuSVGIcon, CloseSVGIcon } from '../../assets/SVGs.js';
import useMobileView from '../../functions/useMobileView.js';
import useHoverScale from '../../effects/useHoverScale.js';
import Modal from '../../functions/Modal.js'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './navigation.css';

function Navigation() {
    const { handleMouseEnter, handleMouseLeave, getScaleStyle } = useHoverScale();

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

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <header className = "primary-header content-grid">
            <div className = "primary-header_layout breakout">

                {/* Left side of navigation */}
                {!isMobileView && (
                    <div className = "nav-left">
                        <Link to = "/">
                            <div className = "personal-logo-wapper">
                                <PersonalLogoSVG />
                            </div>
                        </Link>
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
                            <Link to = "/about" className = "text-s nav-link">About Me</Link>
                            <div className="button-styles" style={getScaleStyle('contact')} onMouseEnter={() => handleMouseEnter('contact')} onMouseLeave={handleMouseLeave}>
                                <div onClick={toggleModal} className="text-s text-color-sec">Contact</div>
                            </div>
                            <Modal show={showModal} onClose={toggleModal} />
                        </div>
                    )}
                        
                    {/* Mobile Menu Overlay */}
                    {isMobileMenuOpen && (
                        <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
                            <div className="mobile-menu-links">
                                <div className = "close-nav-svg-wrapper">
                                    <CloseSVGIcon onClick={closeMobileMenu}/>
                                </div>
                                <Link to = "/" className = "text-s nav-link">gc</Link>
                                <Link to = "/about" className = "text-s nav-link">About Me</Link>
                                <Link to = "/contact" className = "text-s nav-link">Contact</Link>
                            </div>
                        </div>
                    )}
                </div>
        </div>
    </header>
    );
}

export default Navigation;