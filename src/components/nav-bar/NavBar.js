import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './NavBar.css';
import SocialWidget from './SocialWidget';

function NavBar() {
    return (
        <div className="nav-bar">
            <div className="header-bar">
                <div class="site-logo">
                    <Link to="/portfolio">SON VU</Link>
                </div>
                <SocialWidget/>
            </div>
            <div className="main-menu">
                <nav className="main-nav-wrap">
                    <ul id="main-nav">
                        <li className="menu-item"><Link to="blog">BLOG</Link></li>
                        <li className="menu-item"><Link to="projects">PROJECTS</Link></li>
                        <li className="menu-item"><Link to="bio">BIO</Link></li>
                        <li className="menu-item"><Link to="about">ABOUT</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default NavBar