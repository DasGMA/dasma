import React from 'react';
import '../../Styles/home-jumbo.scss';
import profile from '../../Media/profile.png';

export default function HomeJumbo() {
    return (
        <div className="home-jumbo">
            <div className="profile-picture">
                <img src={profile} alt="Profile" />
            </div>
            <h1>Das Ma</h1>
            <h2>
                I love <span>CODING</span>.
            </h2>
        </div>
    );
}
