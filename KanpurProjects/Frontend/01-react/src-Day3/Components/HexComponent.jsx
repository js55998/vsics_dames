import React from "react";

const HexComponent = () => {
  const hexColor = () => {
    let str = "0123456789abcdef";
    let color = "";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      color += str[index];
    }
    return "#" + color;
  };
  const HexColor = () => <div>{hexColor()}</div>;

  return (
    <div>
         <h1 style={{backgroundColor: hexColor()}}><HexColor/></h1>
         <h1 style={{backgroundColor: hexColor()}}><HexColor/></h1>
         <h1 style={{backgroundColor: hexColor()}}><HexColor/></h1>
         <h1 style={{backgroundColor: hexColor()}}><HexColor/></h1>
         <h1 style={{backgroundColor: hexColor()}}><HexColor/></h1>
         <h1 style={{backgroundColor: hexColor()}}><HexColor/></h1>
         <h1 style={{backgroundColor: hexColor()}}><HexColor/></h1>
    </div>
  );
};

export default HexComponent;
