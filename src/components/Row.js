import React from "react";
import Col from "./Col";

function Row(props) {
  function renderCols() {
    let cols = [];
    for (let i = 0; i < props.columns; i++) {
      cols.push(
        <Col
          defaultColor={props.defaultColor}
          selectedColor={props.selectedColor}
        ></Col>
      );
    }
    return cols;
  }
  return <div className="row">{renderCols()}</div>;
}

export default Row;
