import React from "react";
import './ToDo.css'

const ToDos = (props) => {
const content=props.lists.map((list,index)=>
<div className="box">
<h3 key={index}>{list.id}:{list.title}</h3>
</div>)

    return (
    <>
      <h2>Todo Title</h2>
      <div className="mainBox">
      {content}
      </div>
    </>
  );
};

export default ToDos;
