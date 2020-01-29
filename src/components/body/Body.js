import React from "react";
import "./Body.css";
import Author from "../author/Author";
import Description from "../description/Description";
import Background from "../background/Background";
import Post from "../post/Post";
import Reactions from "../reactions/Reactions";

const Body = props => {
  return (
    <div className="col-sm-12 col-md-10 mt-mb-auto">
      <div className="body">
        <Author name={props.name} username={props.username} />
        <Description username={props.username} title={props.title} />
        <Background name={props.name} title={props.title} />
        <Post title={props.title} body={props.body} website={props.website} />
        <Reactions
          comments={props.comments}
          retweet={props.retweet}
          heart={props.heart}
        />
      </div>
    </div>
  );
};

export default Body;
