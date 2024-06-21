import React from "react";
const Header = () => {
  const now = new Date();
  const year = now.getFullYear(); 
  const month = now.getMonth() + 1; 
  const date = now.getDate(); 
  const hours = now.getHours(); 
  const minutes = now.getMinutes();
  return (
    <header style={{
      backgroundColor: '#61DBFB',
      fontFamily: 'Helvetica Neue',
      padding: 25,
      lineHeight: 1.5,
    }}>
      <h1>Welcome to React Development</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Debasish Sahoo</p>
      <small>
        Date:{`${date}/${month}/${year} ${hours}:${minutes}`}
      </small>
    </header>
  );
};

export default Header;
