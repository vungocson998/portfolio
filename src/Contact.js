import React, { Component } from 'react';

class Contact extends Component {
    render() {
        function handleClick(e) {
            // Open new tab to my facebook profile
            window.open("https://www.facebook.com/vungocson998");
        };
        return (
            <div className="flex-container">
                <button id="contact" onClick={handleClick}>Contact</button>
            </div>
        );
    }
}

export default Contact;