import React from 'react';
import './Background.css';
import Avatar from '../avatar/Avatar';
import Profile from '../profile/Profile';

const Background = () => {
    return <div className="Background mt-4">
        <Avatar />
        <h3 className="mt-5 ml-5 pl-3 text-white heading">Learning React? Start<br/>Small.</h3>
        <Profile />
    </div>
}

export default Background;