import React from "react";
import "./Loader.css";

const Loader = ({ loadColor }) => {
  return (
    <div className="loader">
      <div className="circle" style={{ backgroundColor: loadColor }}></div>
      <div className="circle" style={{ backgroundColor: loadColor }}></div>
      <div className="circle" style={{ backgroundColor: loadColor }}></div>
      <div className="shadow" style={{ backgroundColor: loadColor }}></div>
      <div className="shadow" style={{ backgroundColor: loadColor }}></div>
      <div className="shadow" style={{ backgroundColor: loadColor }}></div>
    </div>
  );
};

export default Loader;
