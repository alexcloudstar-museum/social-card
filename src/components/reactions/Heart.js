import React from "react";

const Heart = props => {
  return (
    <div className="Heart text-left">
      <i className="fas fa-heart"></i>
      <span>&nbsp;&nbsp;{props.heart}</span>
    </div>
  );
};

export default Heart;
