import React from 'react';

function Sample(props) {
    return (
        <div className="SampleWrapper">
            <h1>Title: {props.title}</h1>
            <p>Description: {props.description}</p>
            <p>Language: {props.language}</p>
            <p>Link: {props.link}</p>            
        </div>
    );
}

export default Sample;