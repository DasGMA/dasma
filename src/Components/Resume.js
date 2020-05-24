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
                        <h3>REALM (2019 - 2020) - California, Long Beach / Canada, Victoria</h3>
                        <p>REACT NATIVE DEVELOPER</p>
                        <ul>
                            <li>Developed various features under minimal supervision using React Native.</li>
                            <li>Created functional components using React Hooks.</li>
                            <li>Designed and developed various components including: Camera/Camera Functions, Animated components, various data and media Posts Feed with automatically playing videos on scroll, Video Player, tab bars, image picker, date picker, push notifications, sign-in/out features, profile management and complex navigation.</li>
                            <li>Extensive usage of Redux and Redux Action Creators.</li>
                            <li>Manipulated and created data objects coming from JSON API back end to be suitable to use in the front end components.</li>
                            <li>Utilized FFMPEG to resize videos, converted videos to GIFs.</li>
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
                        <h3>PROFESSIONAL AND PERSONAL SABBATICAL (2015 – 2016) - United Kingdom</h3>
                        <p>RELOCATION TO USA</p>
                        <ul>
                            <li>Took PMP courses, acquiring PMP Certification from PMI organization.</li>
                            <li>Acquired JAVA OOP Language Certification.</li>
                        </ul>
                        <h3>CONNECT WORLD TRADE LTD (2011 – 2015) - United Kingdom, London</h3>
                        <p>CEO / FOUNDER</p>
                        <ul>
                            <li>From standing start increased revenue to £242,000 per annum.</li>
                            <li>Researched supply and demand market accross Asia and UK to determine the best IT hardware products for trading.</li>
                            <li>Managed cost and chose quality merchandises.</li>
                            <li>Conducted on-premise reviews and quality control with various Asian vendors.</li>
                            <li>Analized market data to make prompt decisions on procurement process.</li>
                        </ul>
                    </div>
                    <div className='resume-right'>
                        <h2>SKILLS</h2>
                        <h3>FRONT END</h3>
                        <p>React, React Native, Redux, JavaScript, ES6, HTML5, CSS3, Flexbox, React Router, LESS, SCSS, Styled, Bootstrap, Materialize, Canvas</p>
                        <h3>BACK END</h3>
                        <p>Node.js, Express, Knex, SQLite, Django, Python, REST APIs, MongoDB</p>
                        <h3>TOOLS</h3>
                        <p>Git, VS Code, Xcode, Android Studio, EXPO, C, Java, Postman, MS Project, Jira, Linux, Heroku, Netlify, Yarn, Npm, Docker, Google Cloud Platform</p>
                        <h2>EDUCATION</h2>
                        <h3>LAMBDA SCHOOL</h3>
                        <p>(2018 - 2019)
                        Full Stack Web Development</p>
                        <h3>LITHUANIA SPORT UNIVERSITY</h3>
                        <p>(2001 – 2005)
                        BS in Sports Coaching</p>
                    </div>
                </div>
            </div>
        </div>
    )
}