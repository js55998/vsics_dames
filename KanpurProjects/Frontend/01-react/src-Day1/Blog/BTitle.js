import React from "react";
import "./Title.css";

const BTitle = (props) => {
const content=props.posts.map((post,index)=>
  <div className="box">
  <h3 key={index}>{post.id}:{post.title}</h3>
  </div>
)


  return (
    <>
      <h2>Blog Title</h2>
        <div className="mainBox">
           {content}
        </div>
    </>
  );
};

export default BTitle;