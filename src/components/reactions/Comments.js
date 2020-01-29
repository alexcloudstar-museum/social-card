import React from "react";

const Comments = props => {
  return (
    <div className="Comments text-left">
      <i className="far fa-comment"></i>
      <span>&nbsp;&nbsp; {props.comments} </span>
    </div>
  );
};

export default Comments;
