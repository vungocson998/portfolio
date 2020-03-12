import React, {Component} from 'react';
import './NavBar.css';
import SocialWidget from './SocialWidget';

function NavBar() {
    return (
        <div className="nav-bar">
            <div className="header-bar">
                <div class="site-logo">
                    <a id="title" href="#">SON VU</a>
                </div>
                <SocialWidget/>
            </div>
            <div className="main-menu">
                <nav className="main-nav-wrap">
                    <ul id="main-nav">
                        <li className="menu-item"><a href="#" id="BLOG">BLOG</a></li>
                        <li className="menu-item"><a href="#" id="BLOG">PROJECTS</a></li>
                        <li className="menu-item"><a href="#" id="BLOG">BIO</a></li>
                        <li className="menu-item"><a href="#" id="BLOG">CONTACT</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default NavBar