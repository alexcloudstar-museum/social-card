import React from "react";

const Retweet = props => {
  return (
    <div className="Retweet text-left">
      <i className="fas fa-retweet"></i>
      <span>&nbsp;&nbsp; {props.retweet}</span>
    </div>
  );
};

export default Retweet;
