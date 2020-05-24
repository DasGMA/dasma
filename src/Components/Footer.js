import React from 'react';
import '../Styles/footer.scss';
import git from '../Media/git.png';
import linkedin from '../Media/linkedin.png';
import email from '../Media/email.png';

export default function Footer() {
    const date = new Date();
    return (
        <footer>
            <div className='footer'>
                <div className='copyright'>
                    <p>&#169; DAS MA {date.getFullYear()}</p>
                </div>
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
                    </a>
                    <a href = 'mailto:dasgrigoma@gmail.com'>
                        <img
                            src={email}
                            alt='Email'
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}