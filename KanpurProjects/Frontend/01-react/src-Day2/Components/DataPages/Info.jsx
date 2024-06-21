import React from "react";

const Age = (props) => <div>The person is {props.age} years old.</div>;

const Weight = (props) => (
  <p>The weight of the object on earth is {props.weight} N.</p>
);

const Status = (props) => {
  let status = props.status ? "Old enough to drive" : "Too young for driving";
  return <p>{status}</p>;
};


export { Age, Weight };
export default Status;
