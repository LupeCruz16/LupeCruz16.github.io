import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Navigation() {
    // Create state to manage hover style for individual links
    const [hoveredLink, setHoveredLink] = React.useState(null);

    // Event handlers for mouse enter and leave
    const handleMouseEnter = (link) => {
        setHoveredLink(link);
    };

    const handleMouseLeave = () => {
        setHoveredLink(null);
    };

    // Function to determine style based on hovered link
    const linkStyle = (link) => ({
        transform: hoveredLink === link ? 'scale(1.1)' : 'none',
        transition: 'transform 0.3s ease',
    });

    //Adding Navigation bar effect
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

    return (
        <div className = "paddingGlobal">
            <div className = "largeContainer">
                <nav className={`Navigation ${isSticky ? 'sticky' : ''}`}>
                    <div className = "paddingGlobal">
                        <div className = "largeContainer">
                        <div className="navLinks">
                            <div className = "navLinks-Left">
                            <Link
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={200}
                                className="navLinkElem textSizeS"
                                style={linkStyle('gc')}
                                onMouseEnter={() => handleMouseEnter('gc')}
                                onMouseLeave={handleMouseLeave}
                            >
                                gc
                            </Link>
                            </div>

                            <div className = "navLinks-Right">
                            <Link
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={200}
                                className="navLinkElem textSizeS"
                                style={linkStyle('home')}
                                onMouseEnter={() => handleMouseEnter('home')}
                                onMouseLeave={handleMouseLeave}
                            >
                                Home
                            </Link>
                            <Link
                                to="aboutMe"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={200}
                                className="navLinkElem textSizeS"
                                style={linkStyle('aboutMe')}
                                onMouseEnter={() => handleMouseEnter('aboutMe')}
                                onMouseLeave={handleMouseLeave}
                            >
                                About&nbsp;Me
                            </Link>
                            <Link
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={200}
                                className="navLinkElem textSizeS"
                                style={linkStyle('projects')}
                                onMouseEnter={() => handleMouseEnter('projects')}
                                onMouseLeave={handleMouseLeave}
                            >
                                Projects
                            </Link>
                            <Link
                                to="testimonials"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={200}
                                className="navLinkElem textSizeS"
                                style={linkStyle('testimonials')}
                                onMouseEnter={() => handleMouseEnter('testimonials')}
                                onMouseLeave={handleMouseLeave}
                            >
                                Testimonials
                            </Link>
                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={200}
                                className="navLinkElem textSizeS"
                                style={linkStyle('contact')}
                                onMouseEnter={() => handleMouseEnter('contact')}
                                onMouseLeave={handleMouseLeave}
                            >
                                Contact
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navigation;