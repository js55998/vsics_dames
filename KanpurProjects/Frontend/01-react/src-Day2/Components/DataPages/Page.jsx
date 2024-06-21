import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./style.css";
const Page = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  //ode for main
  const main_tech = "React.js";
  const techs = ["HTML", "CSS", "JavaScript"];
  const techsFormatted = techs.map((tech, index) => (
    <li key={index}>{tech}</li>
  ));


  const copyRight="Copyright 2024"	

  return (
    <>
      <div className="app">
        <Header
          welcome="Welcome to React Development"
          title="Getting Started React"
          subtitle="JavaScript Library"
          author={{ firstName: "Debasish", lastName: "Sahoo" }}
          current_date={`${date}/${month}/${year} ${hours}:${minutes}`}
        />
        
        <Main main_tech={main_tech} techsFormatted={techsFormatted} />

        <Footer copyRight="Copyright 2024"/>
      </div>
    </>
  );
};

export default Page;
