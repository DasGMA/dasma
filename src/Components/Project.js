import React from 'react';
import '../Styles/project.scss';

export default function Project(props) {

    return (
        <div className='project'>
            <div className='image-container'>
                <a 
                    href={props.projectLink} 
                    target = '_blank' 
                    rel = 'noopener noreferrer'
                >
                    <img
                        src={props.projectImage}
                        alt={props.projectName}
                    />
                </a>
            </div>
            <div className='description-container'>
                <a 
                    href={props.projectLink}
                    target = '_blank'
                    rel = 'noopener noreferrer'
                >
                    <h1>{props.projectName}</h1>
                </a>
                <p>{props.projectDescription}</p>
            </div>
        </div>
    )
}