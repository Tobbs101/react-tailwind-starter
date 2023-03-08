import React from "react";

const Post = () => {
  return (
    <div
      className="border border-slate-300 p-2 cursor-pointer rounded-xl bg-white duration-200 hover:h-20"
      style={{
        boxShadow: "0 0 5px 0 #ccc",
        minHeight: "300px",
      }}
    >
      Post
    </div>
  );
};

export default Post;
