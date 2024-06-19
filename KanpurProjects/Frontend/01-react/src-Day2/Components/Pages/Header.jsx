import React from "react";

const Header = () => {
  const now = new Date();
  const year = now.getFullYear(); // return year
  const month = now.getMonth() + 1; // return month(0 - 11)
  const date = now.getDate(); // return date (1 - 31)
  const hours = now.getHours(); // return number (0 - 23)
  const minutes = now.getMinutes(); // return number (0 -59)
  return (
    <header>
      <h1>Welcome to React Development</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Debasish Sahoo</p>
      <small>
        {`${date}/${month}/${year} ${hours}:${minutes}`}
      </small>
    </header>
  );
};

export default Header;
