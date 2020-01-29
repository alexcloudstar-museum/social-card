import React from 'react';
import './Post.css';
import Title from './Title';
import ShortDescription from './ShortDescription';
import Website from './Website';

const Post = () => {
    return <div className="col-sm-12 p-0">
        <div className="Post pl-3">
            <Title />
            <ShortDescription />
            <Website />
        </div>
    </div>
}

export default Post; 