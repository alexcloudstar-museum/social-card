import React from "react";
import "./Description.css";
import Text from "./DescriptionText";

const Description = props => {
  return (
    <div className="Description text-left">
      <Text username={props.username} title={props.title} />
    </div>
  );
};

export default Description;
