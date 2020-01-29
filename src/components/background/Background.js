import React from "react";
import "./Background.css";
import Avatar from "../avatar/Avatar";
import Profile from "../profile/Profile";

const Background = props => {
  return (
    <div className="Background mt-4">
      <Avatar />
      <h3 className="mt-5 ml-5 pl-3 text-white heading">{props.title}</h3>
      <Profile name={props.name} />
    </div>
  );
};

export default Background;
