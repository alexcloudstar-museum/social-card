import React from 'react';
import './Reactions.css';
import Comments from './Comments';
import Retweet from './Retweet';
import Heart from './Heart';
import Message from './Message';

const Reactions = () => {
    return <div className="Reactions text-left pt-3">
            <Comments />
            <Retweet />
            <Heart />
            <Message />
        </div>
}

export default Reactions; 