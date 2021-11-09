import React from 'react';
import Jumbotron from './Jumbotron';
import '../Styles/resume.scss';

export default function Resume() {
    return (
        <div>
            <Jumbotron />
            <div className="resume-container">
                <div className="resume">
                    <div className="resume-left">
                        <h2>SKILLS</h2>
                        <h3>FRONT END</h3>
                        <p>
                            React, React Native, Redux, JavaScript, ES6, HTML5,
                            CSS3, Flexbox, React Router, LESS, SASS, Styled,
                            Bootstrap, Materialize, Canvas, Socket.IO, MUI v5
                        </p>
                        <h3>BACK END</h3>
                        <p>
                            Node.js, Express, Knex, SQLite, Django, Python, REST
                            APIs, MongoDB, Socket.IO
                        </p>
                        <h3>TOOLS</h3>
                        <p>
                            Git, VS Code, Xcode, Android Studio, EXPO, C, Java,
                            Postman, MS Project, Jira, Linux, Heroku, Netlify,
                            Yarn, Npm, Docker, Google Cloud Platform, AWS
                        </p>
                        <h2>EDUCATION</h2>
                        <h3>LAMBDA SCHOOL</h3>
                        <p>(2018 - 2019) Full Stack Web Development</p>
                        <p>
                            Relevant courses:
                            <br />
                            Computer Science, Algorithms, Authentication, Data
                            structures, Node.js, RestAPIs, Python, JavaScript, C
                            programming, Automated unit Testing
                        </p>
                        <h3>LITHUANIA UNIVERSITY</h3>
                        <p>
                            (2001 – 2005) Bachelor of Science Physical Education
                        </p>
                        <h2>CERTIFICATIONS</h2>
                        <ul>
                            <li>
                                Professional Agile and Scrum Certification,
                                issued by EXIN
                            </li>
                            <li>
                                PRINCE2, issued by APMG - International, ID
                                02891362-01-DGTL
                            </li>
                        </ul>
                    </div>
                    <div className="resume-right">
                        <h2>WORK EXPERIENCE</h2>
                        <h3>
                            WORKREACTOR INC. (2021 - current) - California, Long
                            Beach
                        </h3>
                        <p>FULL STACK DEVELOPER</p>
                        <ul>
                            <li>
                                Developed new social media web application from
                                initial design through completion optimizing
                                cross-browser and multi-platform compatibility
                            </li>
                            <li>
                                Cooperated with IT team to deploy frontend and
                                backend applications to AWS cloud-based system.
                                Implemented stringent security guideline and
                                Secure Development Lifecycle practice.
                            </li>
                            <li>
                                Worked closely with other programmers,
                                designers, and clients to meet project
                                requirements, goals, and desired functionality
                            </li>
                            <li>
                                Enhanced user experience and accomplished
                                webpage objectives by creating site structure,
                                navigation, page optimization, and graphics
                                integration
                            </li>
                            <li>
                                Performed unit test, system test, functional
                                test, and integration test during each
                                development phases
                            </li>
                            <li>
                                Deployed bug fixes and implemented enhancements
                                that improved web functionality and
                                responsiveness.
                            </li>
                            <li>
                                Team followed Agile software development process
                            </li>
                        </ul>
                        <h3>
                            REALM (2019 - 2020) - California, Long Beach /
                            Canada, Victoria
                        </h3>
                        <p>REACT NATIVE DEVELOPER</p>
                        <ul>
                            <li>
                                Developed new version of gamers’ social app for
                                multi-platform (IOs/Android)
                            </li>
                            <li>
                                Utilized FFMPEG technology to resize, convert
                                videos to GIFs preview that reduce loading times
                                significantly
                            </li>
                            <li>
                                Applied React Native Animated API, created
                                animated functionalities matched requirements on
                                design and enhanced UI.
                            </li>
                            <li>
                                Developed Camera functions: flash, front/ back
                                facing, take picture and video, timer setting
                                with animated progress bar, media contents
                                preview with simple editing possibilities..
                            </li>
                            <li>
                                Extensive REDUX usage to centralize, maintain
                                and improve quality of code
                            </li>
                            <li>
                                Worked in Scrum – Agile environment,
                                collaborated cross – functional team, performed
                                unit, system, and integration test, ensured data
                                processed successfully
                            </li>
                            <li>
                                Fixed bugs from existing application and
                                implemented enhancements
                            </li>
                        </ul>
                        <h3>
                            IT - ITECH (2016 - 2017) - California, Long Beach
                        </h3>
                        <p>PROJECT COORDINATOR</p>
                        <ul>
                            <li>
                                Established IT – iTech LLC Web project scope by
                                studying strategic business drivers; discovered
                                and validated business technical requirements.
                            </li>
                            <li>
                                Developed Web solution by formulating
                                objectives; planned project life – cycle
                                deliverables and resource availability and
                                application.
                            </li>
                            <li>
                                Coordinated with offshore team to design,
                                develop and release company’s website, mailing
                                and customer management system (CMS).
                            </li>
                            <li>
                                Met cost standards by monitoring expenses and
                                implementing cost saving actions.
                            </li>
                            <li>
                                Conducted website management and maintenance
                                (PHP), refactored home page code for faster
                                rendering.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
