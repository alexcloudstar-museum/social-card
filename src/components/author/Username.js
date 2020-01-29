import React from "react";

const Username = props => {
  return (
    <h3 className="Username">
      &nbsp;<span className="text-grey">@{props.username} &#183;</span>
    </h3>
  );
};

export default Username;
