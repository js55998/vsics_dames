import React from "react";
import './Cards.css'
const Cards = () => {
  return (
    <>
      <h1>This is Cards Components</h1>
      <h2>Card</h2>
      <div className="card">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="img" />
        <div className="container">
          <h4>
            <b>Debasish Sahoo</b>
          </h4>
          <p>Devops Engg</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
