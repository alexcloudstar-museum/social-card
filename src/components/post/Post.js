import React from "react";
import "./Post.css";
import Title from "./Title";
import ShortDescription from "./ShortDescription";
import Website from "./Website";

const Post = props => {
  return (
    <div className="col-sm-12 p-0">
      <div className="Post pl-3">
        <Title title={props.title} />
        <ShortDescription body={props.body} />
        <Website website={props.website} />
      </div>
    </div>
  );
};

export default Post;
