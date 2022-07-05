import React from "react";
import Cover from "../img/cover.jpg";
import profile from "../img/profileImg.jpg";
import "./ProfileCard.css";
const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={profile} alt="" />
      </div>
      <div className="ProfileName">
        <span>Manali Khattar</span>
        <span> React Developer</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6890</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Follower</span>
          </div>
        </div>
        <hr />
      </div>
      <span>my profile</span>
    </div>
  );
};

export default ProfileCard;
