import React from "react";

const Main = (props) => {
  return (
    <main>
      <div className="main-wrapper">
        <p>
          Prerequisite to get started{" "}
          <strong>
            <em>{props.main_tech}</em>
          </strong>
          :
        </p>
        <ul>
          {props.techsFormatted}
        </ul>
      </div>
    </main>
  );
};

export default Main;
