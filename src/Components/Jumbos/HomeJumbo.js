import React from 'react';
import '../../Styles/home-jumbo.scss';

export default function HomeJumbo() {
    return (
        <div className='home-jumbo'>
            <div className='profile-picture'>
                <img
                    src='https://media-exp1.licdn.com/dms/image/C5603AQF5px_KTE5qxQ/profile-displayphoto-shrink_200_200/0?e=1595462400&v=beta&t=En9UqDsbyGSt1hGXeKhkGbxDDUd3g2MHh8QpFnusxRc'
                    alt='Profile'
                />
            </div>
            <h1>Das Ma</h1>
            <h2>I love <span>CODING</span>, <span>TRAVELING</span> and <span>LIFTING</span> heavy stuff.</h2>
        </div>
    )
}