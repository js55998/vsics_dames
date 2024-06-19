import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <>
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

export default Card;
