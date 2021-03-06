import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import SocialWidget from './SocialWidget';

function NavBar() {
    return (
        <div className="nav-bar">
            <div className="header-bar">
                <div className="site-logo">
                    <Link id="title" to="/portfolio">SON VU</Link>
                </div>
                <SocialWidget/>
            </div>
            <div className="main-menu">
                <nav className="main-nav-wrap">
                    <ul id="main-nav">
                        <li className="menu-item"><Link to="/portfolio/blog">BLOG</Link></li>
                        <li className="menu-item"><Link to="/portfolio/projects">PROJECTS</Link></li>
                        <li className="menu-item"><Link to="/portfolio/bio">BIO</Link></li>
                        <li className="menu-item"><Link to="/portfolio/about">ABOUT</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default NavBar