import React from "react";
import "./Post.css";
import Commet from "../img/comment.png";
import Like from "../img/like.png";
import notlike from "../img/notlike.png";
import Share from "../img/share.png";
const Post = ({ data }) => {
  console.log("parr", data);
  return (
    <div className="Post">
      <img src={data.img} alt="" />
      <div className="PostReaction">
        <img src={data.liked ? Like : notlike} alt="" />
        <img src={Share} alt="" />
        <img src={Commet} alt="" />
      </div>
      <span>
        {data.likes}
        Likes
      </span>
      <div className="details">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
