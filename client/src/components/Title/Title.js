import React from "react";
import "./Title.css";

const Title = ({ children }) =>
  <div className="jumbotron jumbotron-fluid text-center bg-" style={{height:200}}>
    {children}
  </div>;

export default Title;
