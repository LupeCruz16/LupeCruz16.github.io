import useHoverScale from '../../effects/useHoverScale.js';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Navigation() {
    //Hover effect
    const { handleMouseEnter, handleMouseLeave, getScaleStyle } = useHoverScale();

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
                        <div className="navLinks">
                            <div className = "navLinks-Left">
                            <Link
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={200}
                                className="navLinkElem textSizeS"
                                style={getScaleStyle('gc')}
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
                                style={getScaleStyle('home')}
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
                                style={getScaleStyle('aboutMe')}
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
                                style={getScaleStyle('projects')}
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
                                style={getScaleStyle('testimonials')}
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
                                style={getScaleStyle('contact')}
                                onMouseEnter={() => handleMouseEnter('contact')}
                                onMouseLeave={handleMouseLeave}
                            >
                                Contact
                            </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navigation;