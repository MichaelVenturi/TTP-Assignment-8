import React from "react";

function SelectColor(props) {
  return (
    <div className="options-field">
      Select color:
      <select name="selectedColor" onChange={props.handleChange}>
        <option value="White" selected>
          White
        </option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="pink">Pink</option>
      </select>
    </div>
  );
}

export default SelectColor;
