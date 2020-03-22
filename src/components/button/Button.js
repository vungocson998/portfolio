import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn: false};
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            isToggleOn: !this.state.isToggleOn
        });
        if (this.state.isToggleOn){
            document.getElementById('button').innerText = ':)';
            document.getElementById('button').style.background = '#542bff';
        }
        else {
            document.getElementById('button').innerText = ':(';
            document.getElementById('button').style.background = '#fabc30';
        }
    }

    render() {
        return (
            <div className="flex-container">
                <button id="button" onClick={this.handleClick} >:)</button>
            </div>
        );
    }
}

export default Button;