import React from "react";

const DescriptionText = props => {
  return (
    <React.Fragment>
      <h5 className="text-capitalize">{props.title}</h5>
      <h5>
        {"{"} author: <span>@{props.username}</span> {"}"}
      </h5>
    </React.Fragment>
  );
};

export default DescriptionText;
