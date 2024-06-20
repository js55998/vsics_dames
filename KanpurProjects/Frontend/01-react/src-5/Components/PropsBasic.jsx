import React from "react";

const PropsBasic = (props) => {
  return (
    <div>
      <h1>
        {props.firstName} {' '}
        {props.lastName}
      </h1>
      <h2>{props.country}</h2>
    </div>
  );
};

export default PropsBasic;
