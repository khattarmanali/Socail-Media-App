import React from "react";
import PostSide from "../../Components/PostSide/PostSide";
import ProfileCard from "../../Components/ProfileCard";
import ProfileLeft from "../../Components/ProfileLeft/ProfileLeft";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft />
      <div className="Profile-center">
        <ProfileCard />
        <PostSide />
      </div>
    </div>
  );
};

export default Profile;
