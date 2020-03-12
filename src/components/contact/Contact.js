import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        function handleClick(e) {
            // Open new tab to my facebook profile
            window.alert("Your computer is hacked!!");
        };
        return (
            <div className="flex-container">
                <button id="contact" onClick={handleClick}>:D</button>
            </div>
        );
    }
}

export default Contact;