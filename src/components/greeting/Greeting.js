import React from 'react';
import Clock from './Clock';
import './Greeting.css';

function Greeting() {
    return (
        <div className="greeting">
            <h1 className="titleWrapper">
                <span>
                    <span className="title">Hi </span>
                    <span className="title">there </span>
                    <span className="title">...</span>
                </span>
            </h1>
            <p>I AM A SELF-TAUGHT WEB DEVELOPER</p>
            <p>A SYSTEM ADMINISTRATOR, AND A SCIENCE LOVER</p>
            <Clock />
        </div>
    );
}

export default Greeting;