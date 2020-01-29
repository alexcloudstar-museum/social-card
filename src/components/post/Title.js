import React from "react";

const Title = props => {
  return (
    <div className="Title pt-3">
      <h2 className="text-capitalize">{props.title}</h2>
    </div>
  );
};

export default Title;
