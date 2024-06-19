import React from "react";
import UserImage from '../assets/images/user.png'

const MathComponent = () => {
  const numOne = 3;
  const numTwo = 2;

  const result = (
    <p>
      {numOne} + {numTwo} = {numOne + numTwo}
    </p>
  );

  const yearBorn = 1820;
  const currentYear = new Date().getFullYear();
  const age = currentYear - yearBorn;
  const author={
    firstName:'Debasish',
    lastName:'Sahoo'
  }
  const personAge = (
    <p>
      {" "}
      {author.firstName} {author.lastName} is {age} years old
    </p>
  );

  const user_pic = (
    <div>
      <img src={UserImage} alt='Debasish Sahoo Images' />
    </div>
  )

  return (
    <div>
      <h2>The Addition is :{result}</h2>
      <br/>
      <h2>{personAge}</h2>
      <br/>
      {user_pic}
    </div>
  );
};

export default MathComponent;
