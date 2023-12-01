import React from "react";
import "./CustomField.css";

const CustomField = ({ label, placeholder }) => {
  return (
    <div className="field">
      <label htmlFor="textInput">{label}</label>
      <br />
      <input type="text" id="textInput" placeholder={placeholder} />
    </div>
  );
};

export default CustomField;
