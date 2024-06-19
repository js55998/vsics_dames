import React from "react";

const Footer = (props) => {
  return (
    <footer>
      <div className="footer-wrapper">
        <p>{props.copyRight}</p>
      </div>
    </footer>
  );
};

export default Footer;
