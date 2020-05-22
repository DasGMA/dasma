import React from 'react';
import { useHistory } from "react-router-dom";
import '../Styles/jumbotron.scss';
import HomeJumbo from './Jumbos/HomeJumbo';
import ProjectsJumbo from './Jumbos/ProjectsJumbo';

export default function Jumbotron() {
    const history = useHistory();
    const location = history.location.pathname;

    return (
        <div className='jumbotron'>
            {location === '/' && <HomeJumbo />}
            {location === '/projects' && <ProjectsJumbo />}
        </div>
    )
}