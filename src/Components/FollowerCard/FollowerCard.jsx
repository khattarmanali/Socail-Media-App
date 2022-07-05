import React from "react";
// import './FollowerCard.css'
import "./FollowCard.css";
import { Followers } from "../../Data/FollowerData";
const FollowerCard = () => {
  return (
    <div className="FollowerCard">
      <h3>Who is following you</h3>
      {Followers.map((followers, id) => {
        return (
          <div className="follower">
            <div>
              <img src={followers.img} alt="" className="followerImg" />
              <div className="name">
                <span>{followers.name}</span>
                <span>@{followers.username}</span>
              </div>
            </div>
            <button className="button fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowerCard;
