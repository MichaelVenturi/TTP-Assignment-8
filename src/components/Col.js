import React, { useState } from "react";

function Col(props) {
  // let color = props.defaultColor;

  let [color, setColor] = useState(props.defaultColor);

  function changeColor() {
    color = props.selectedColor;
    console.log(color);
    setColor(color);
  }
  return (
    <div
      className="col"
      style={{ backgroundColor: color }}
      onClick={changeColor}
    ></div>
  );
}

export default Col;
