import React from 'react';
import { useMatch } from 'react-router-dom';
import '../Styles/jumbotron.scss';
import HomeJumbo from './Jumbos/HomeJumbo';
import ProjectsJumbo from './Jumbos/ProjectsJumbo';
import ResumeJumbo from './Jumbos/ResumeJumbo';

export default function Jumbotron() {
    return (
        <div className="jumbotron">
            {useMatch('/') && <HomeJumbo />}
            {useMatch('/projects') && <ProjectsJumbo />}
            {useMatch('/resume') && <ResumeJumbo />}
        </div>
    );
}
