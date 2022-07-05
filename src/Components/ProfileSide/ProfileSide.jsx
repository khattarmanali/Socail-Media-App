import React from "react";
import FollowerCard from "../FollowerCard/FollowerCard";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../ProfileCard";
import "./profileSide.css";
const ProfileSide = () => {
  return (
    <div className="profileSide">
      <LogoSearch />
      <ProfileCard />
      <FollowerCard />
    </div>
  );
};

export default ProfileSide;
