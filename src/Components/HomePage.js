import React from 'react';
import { useHistory } from 'react-router-dom';
import '../Styles/homepage.scss';
import Jumbotron from './Jumbotron';
import git from '../Media/git.png';
import linkedin from '../Media/linkedin.png';
import email from '../Media/email.png';

export default function HomePage() {
    const history = useHistory();

    const projects = () => {
        history.push('/projects');
    }

    const resume = () => {
        history.push('/resume');
    }


    return (
        <div>
            <Jumbotron />
            <div className='container'>
                <div className='info'>
                    <div className='about-me'>
                        <h2>About me</h2>
                        <p>Recent graduate from <a href='https://lambdaschool.com/about' target = '_blank' rel = 'noopener noreferrer'>Lambda School</a> – awesome Software Engineering Academy with world class Instructors!</p>
                        <p>I have over 2 years of experience as a <span>Software Developer</span> with prior experience in <span>Project Management</span>. 
                        I am proficient <span>Full–Stack Engineer</span> with emphasis in utilizing <span>MERN Stack</span>.</p>
                        <p>While hard engineering problems are often fun to tackle, I am most attracted to solving real customer problems with a business justification. 
                            I am looking for a <span>Software Developer</span> role where I can collaborate with a team, gain experience with architecture, apply my knowledge, and grow with the company.</p>
                        <p>In my free time, I love to get outside for mountain-biking, a good session at the gym, travel with my wife and tackling DIY Projects around the house.
                        For more info, check out my <button className='button' onClick={projects}>Projects</button> and <button className='button' onClick={resume}>Resume</button>.</p>
                    </div>
                    <div className='contact-me'>
                        <h2>Contact</h2>
                        <div className='links'>
                            <a 
                                href = 'https://www.linkedin.com/in/dasma/'
                                target = '_blank'
                                rel = 'noopener noreferrer'
                            >
                                <img
                                    src={linkedin}
                                    alt='LinkedIn'
                                />
                                <p>LinkedIn</p>
                            </a>
                            <a 
                                href = 'https://github.com/DasGMA'
                                target = '_blank'
                                rel = 'noopener noreferrer'
                            >
                                <img
                                    src={git}
                                    alt='GitHub'
                                />
                                <p>GitHub</p>
                            </a>
                            <a href = 'mailto:dasgrigoma@gmail.com'>
                                <img
                                    src={email}
                                    alt='Email'
                                />
                                <p>Email</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}