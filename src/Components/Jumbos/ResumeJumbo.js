import React from 'react';
import '../../Styles/projects-jumbo.scss';
import dasma from '../../Media/CV/DasMA.pdf';

export default function ResumeJumbo() {
    return (
        <div className="projects-jumbo">
            <a href="/resume">
                <h1>I am a Full Stack Developer</h1>
            </a>
            <h2>
                With background in <span>Project Management</span>.
            </h2>
            <h2>
                Download my{' '}
                <span>
                    <a href={dasma} target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                </span>
                .
            </h2>
        </div>
    );
}
