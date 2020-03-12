import React, {Component} from 'react';
import './SocialWidget.css';

class SocialWidget extends Component {
    render(){
        function handleFb(e) {
            // Open new tab to my facebook profile
            window.open("https://www.facebook.com/vungocson998");
        };
        function handleGithub(e) {
            // Open new tab to my github profile
            window.open("https://github.com/vungocson998");
        };
        function handleLinkein(e) {
            // Open new tab to my linkein profile
            window.open("https://www.linkedin.com/in/vungocson998/");
        };
        return (
            <div className="social-widget">
                <div id="linkein" onClick={handleLinkein}></div>
                <div id="github" onClick={handleGithub}></div>
                <div id="fb" onClick={handleFb}></div>                    
            </div>
        );
    }    
}

export default SocialWidget;