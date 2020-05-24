import React from 'react';
import '../Styles/projects.scss';
import Jumbotron from './Jumbotron';
import Project from './Project';
import {collection} from './Collection';

export default function Projects() {
    const projectsList = collection.map((project, index) => {
        return <Project
                    key={index}
                    projectImage={project.projectImage}
                    projectName={project.projectName}
                    projectLink={project.projectLink}
                    projectDescription={project.projectDescription}
                />
    })

    return (
        <div>
            <Jumbotron />
            <div className='projects-container'>
                <div className='projects-list'>
                    {projectsList}
                </div>
            </div>
        </div>
    )
}