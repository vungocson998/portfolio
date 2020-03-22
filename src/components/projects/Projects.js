import React from 'react';
import './Projects.css';
import Sample from './Sample';

function Projects() {
    return (
        <div className="projects">
            <Sample title="demo1" description="demo1" language="C" link="#" />
            <Sample title="demo1" description="demo1" link="#" />
            <Sample title="demo1" description="demo1" language="C" link="#" />
        </div>
    );
}

export default Projects;