import React from 'react';
import '../../Styles/projects-jumbo.scss';

export default function ProjectsJumbo() {
    return (
        <div className='projects-jumbo'>
            <a href='/projects'><h1>Projects</h1></a>
            <h2>Here is a <span>Collection</span> of my <span>Projects</span>.</h2>
            <h2>A <span>Journey</span> to where i am now.</h2>
            <h2>For more checkout my <span><a href = 'https://github.com/DasGMA' target = '_blank' rel = 'noopener noreferrer'>GitHub</a></span>.</h2>
        </div>
    )
}