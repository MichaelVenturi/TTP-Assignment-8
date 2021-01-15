import React from "react";
import Row from "./Row";

function Table(props) {
  function renderRows() {
    let rows = [];
    for (let i = 0; i < props.rows; i++) {
      rows.push(
        <Row
          columns={props.columns}
          defaultColor={props.defaultColor}
          selectedColor={props.selectedColor}
        ></Row>
      );
    }
    return rows;
  }

  return <div className="table">{renderRows()}</div>;
}

export default Table;
