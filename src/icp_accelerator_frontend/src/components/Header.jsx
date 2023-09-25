import React from 'react';
import icpLogo from '../../assets/icpLogo.png';

const Header = () => {
    const handleNavItemClick = (event) => {
        // Remove "active" class from all navbar items
        const navItems = document.querySelectorAll('.nav-item');
        console.log('navItems', navItems)
        navItems.forEach((item) => {
            item.classList.remove('active');
        });

        // Add "active" class to the clicked navbar item
        event.currentTarget.classList.add('active');
    };
    return (
        <nav className="container-fluid navbar navbar-expand-lg sticky-top h-bg">
            <div className="container d-flex mb-3" style={{ padding: '3px', borderBottom: '3px solid grey' }}>
                <a className="navbar-brand" href="#" >
                    <img src={icpLogo} height={25} alt="internet computer" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item active" onClick={handleNavItemClick}>
                            <a href="#home" className="nav-link">HOME</a>
                        </li>
                        <li className="nav-item" onClick={handleNavItemClick}>
                            <a href="#about" className="nav-link">ABOUT</a>
                        </li>
                        <li className="nav-item" onClick={handleNavItemClick}>
                            <a href="#events" className="nav-link">EVENTS</a> 
                        </li>
                        <li className="nav-item" onClick={handleNavItemClick}>
                            <a href="#testinomial" className="nav-link">TESTIMONIALS</a> 
                        </li>
                        <li className="nav-item" onClick={handleNavItemClick}>
                            <a href="#contact" className="nav-link">CONTACT</a> 
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
    )
};

export default Header;