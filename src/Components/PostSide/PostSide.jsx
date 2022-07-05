import React from "react";
import Posts from "../Posts/Posts";
import PostShare from "../Postshare/PostShare";

import "./PostSide.css";
const PostSide = () => {
  return (
    <div className="PostSide">
      <PostShare />
      <Posts />
    </div>
  );
};

export default PostSide;
