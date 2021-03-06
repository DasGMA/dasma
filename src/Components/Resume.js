import React from 'react';
import Jumbotron from './Jumbotron';
import '../Styles/resume.scss';

export default function Resume() {
    return (
        <div>
            <Jumbotron />
            <div className='resume-container'>
                <div className='resume'>
                    <div className='resume-left'>
                        <h2>WORK EXPERIENCE</h2>
                        <h3>WORKREACTOR INC. (2021 - current) - California, Long Beach</h3>
                        <p>FULL STACK DEVELOPER</p>
                        <ul>
                            <li>Developed, tested and deployed social media application from scratch, using MERN stack.</li>
                            <li>Planned, designed and implemented MongoDB database.</li>
                            <li>Implemented and validated applications security and ability to interact with multiple APIs.</li>
                            <li>Developed a fully functional web application using React functional components and hooks.</li>
                            <li>Implemented notifications and messaging systems using Socket-io framework.</li>
                            <li>Connected AWS services for storing media (S3 buckets), implemented mailing system (AWS SES), deployed front and back end to AWS</li>
                            <li>Extensive REDUX usage.</li>
                            <li>From the start, implemented Agile Methodologies Workflow, hosted daily stand-up meetings and tracked overall project progress.</li>
                        </ul>
                        <h3>REALM (2019 - 2020) - California, Long Beach / Canada, Victoria</h3>
                        <p>REACT NATIVE DEVELOPER</p>
                        <ul>
                            <li>Developed a new version of a social app for gamers with React Native for Android and iOS platforms.</li>
                            <li>Developed home feed component that incorporated all user subscriptions, other users activities and video/image posts. In order to reduce loading times significantly, I utilized FFMPEG to resize or convert videos to GIFs preview that played automatically on a certain screen position on scroll.</li>
                            <li>Ensured that Media was successfully processed from the back end system and delivered to front end clients.</li>
                            <li>Using React Native Animated API, created animated components: flipping/sliding character cards, auto - hide menus on scroll that met the design and enhanced UI.</li>
                            <li>Developed Camera component that included options: flash, front/ back facing camera, take picture/video, 3s and 10s timer to delay taking picture/video, 20s timer for recording video with animated progress bar, picture/video preview with simple editing possibilities.</li>
                            <li>Created objects from JSON API back-end data, to be suitable to use in front end components.</li>
                            <li>Extensive REDUX usage.</li>
                            <li>Worked in Scrum – Agile environment, collaborated with cross – functional team.</li>
                        </ul>
                        <h3>IT - ITECH (2016 - 2017) - California, Long Beach</h3>
                        <p>PROJECT COORDINATOR</p>
                        <ul>
                            <li>Established IT – iTech LLC Web project scope by studying strategic business drivers; discovered and validated business technical requirements.</li>
                            <li>Developed Web solution by formulating objectives; planned project life – cycle deliverables and resource availability and application.</li>
                            <li>Coordinated with offshore team to design, develop and release company’s website, mailing and customer management system (CMS).</li>
                            <li>Met cost standards by monitoring expenses and implementing cost saving actions.</li>
                            <li>Conducted website management and maintenance (PHP), refactored home page code for faster rendering.</li>
                        </ul>
                        <h2>CERTIFICATIONS</h2>
                        <ul>
                            <li>Professional Agile and Scrum Certification, issued by EXIN</li>
                            <li>PRINCE2, issued by APMG - International, ID 02891362-01-DGTL</li>
                        </ul>
                    </div>
                    <div className='resume-right'>
                        <h2>SKILLS</h2>
                        <h3>FRONT END</h3>
                        <p>React, React Native, Redux, JavaScript, ES6, HTML5, CSS3, Flexbox, React Router, LESS, SASS, Styled, Bootstrap, Materialize, Canvas, Socket.IO</p>
                        <h3>BACK END</h3>
                        <p>Node.js, Express, Knex, SQLite, Django, Python, REST APIs, MongoDB, Socket.IO</p>
                        <h3>TOOLS</h3>
                        <p>Git, VS Code, Xcode, Android Studio, EXPO, C, Java, Postman, MS Project, Jira, Linux, Heroku, Netlify, Yarn, Npm, Docker, Google Cloud Platform</p>
                        <h2>EDUCATION</h2>
                        <h3>LAMBDA SCHOOL</h3>
                        <p>(2018 - 2019)
                        Full Stack Web Development</p>
                        <h3>LITHUANIA SPORT UNIVERSITY</h3>
                        <p>(2001 – 2005)
                        Bachelors in Sports Coaching</p>
                    </div>
                </div>
            </div>
        </div>
    )
}