import React from 'react';
import './Author.css';
import Username from './Username';
import User from './User';
import Date from './Date';
import Caret from './Caret';


const Author = () => {
    return <div className="Author">
            <User />
            <Username />
            <Date />
            <Caret />
    </div>
}

export default Author;