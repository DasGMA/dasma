import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/homepage.scss';
import Jumbotron from './Jumbotron';
import git from '../Media/git.png';
import linkedin from '../Media/linkedin.png';
import email from '../Media/email.png';

export default function HomePage() {
    const navigate = useNavigate();

    const projects = () => {
        navigate('/projects');
    };

    const resume = () => {
        navigate('/resume');
    };

    return (
        <div>
            <Jumbotron />
            <div className="container">
                <div className="info">
                    <div className="about-me">
                        <h2>About me</h2>
                        <p>
                            I am a <span>Full Stack Developer</span> with over 3
                            years of hands-on experience designing, developing,
                            and implementing applications and solutions using a
                            range of technologies and programming languages.
                            Proficient <span>Full–Stack Engineer</span> with
                            emphasis in utilizing <span>MERN Stack</span>.
                        </p>
                        <p>
                            I seek to leverage broad developement experience and
                            hands-on technical expertise in challenging role as
                            a Full Stack Developer.
                        </p>
                        <p>
                            For more info, check out my{' '}
                            <button className="button" onClick={projects}>
                                Projects
                            </button>{' '}
                            and{' '}
                            <button className="button" onClick={resume}>
                                Resume
                            </button>
                            .
                        </p>
                    </div>
                    <div className="contact-me">
                        <h2>Contact</h2>
                        <div className="links">
                            <a
                                href="https://www.linkedin.com/in/dasma/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={linkedin} alt="LinkedIn" />
                                <p>LinkedIn</p>
                            </a>
                            <a
                                href="https://github.com/DasGMA"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={git} alt="GitHub" />
                                <p>GitHub</p>
                            </a>
                            <a href="mailto:dasgrigoma@gmail.com">
                                <img src={email} alt="Email" />
                                <p>Email</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
