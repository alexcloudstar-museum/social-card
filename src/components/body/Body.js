import React from 'react';
import './Body.css';
import Author from '../author/Author';
import Description from '../description/Description';
import Background from '../background/Background';
import Post from '../post/Post';
import Reactions from '../reactions/Reactions';

const Body = () => {
    return <div className="col-sm-12 col-md-10 mt-mb-auto">
        <div className="body">
            <Author />
            <Description />
            <Background />
            <Post />
            <Reactions />
        </div>
    </div>
}

export default Body; 