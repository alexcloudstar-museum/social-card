import React from "react";
import "./Profile.css";
import ProfilePhoto from "./ProfilePhoto";
import Name from "./Name";

const Profile = props => {
  return (
    <div className="Profile mt-4 pb-2 mr-2">
      <div className="bg-white d-flex">
        <Name name={props.name} />
        <ProfilePhoto />
      </div>
    </div>
  );
};

export default Profile;
