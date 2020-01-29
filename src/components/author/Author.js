import React from "react";
import "./Author.css";
import Username from "./Username";
import User from "./User";
import Date from "./Date";
import Caret from "./Caret";

const Author = props => {
  return (
    <div className="Author">
      <User name={props.name} />
      <Username username={props.username} />
      <Date />
      <Caret />
    </div>
  );
};

export default Author;
