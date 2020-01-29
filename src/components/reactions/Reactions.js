import React from "react";
import "./Reactions.css";
import Comments from "./Comments";
import Retweet from "./Retweet";
import Heart from "./Heart";
import Message from "./Message";

const Reactions = props => {
  return (
    <div className="Reactions text-left pt-3">
      <Comments comments={props.comments} />
      <Retweet retweet={props.retweet} />
      <Heart heart={props.heart} />
      <Message comments={props.comments} />
    </div>
  );
};

export default Reactions;
