import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./style.css";
const Page = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default Page;
