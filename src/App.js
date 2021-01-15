import React from "react";
import "./App.css";
//import reactDOM from "react-dom";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import "bootstrap/dist/css/bootstrap.min.css";
import Table from "./components/Table";
import SelectColor from "./components/SelectColor";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedColor: "white",
      defaultColor: "white",
      rows: 3,
      columns: 3,
    };
  }

  // changeColor() {
  //   this.setState({
  //     selectedColor: "red",
  //   });
  //}
  addRow = () => {
    this.setState((prevState) => {
      return {
        rows: prevState.rows + 1,
      };
    });
  };
  deleteRow = () => {
    this.setState((prevState) => {
      return {
        rows: prevState.rows - 1,
      };
    });
  };
  addCol = () => {
    this.setState((prevState) => {
      return {
        columns: prevState.columns + 1,
      };
    });
  };
  deleteCol = () => {
    this.setState((prevState) => {
      return {
        columns: prevState.columns - 1,
      };
    });
  };

  // clear = () => {
  //   this.forceUpdate();
  // };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    console.log(value);
    console.log(name);
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="App">
        <div id="details">
          <h3>
            Grid: {this.state.rows}x{this.state.columns}
          </h3>
        </div>
        <div id="table">
          <Table
            rows={this.state.rows}
            columns={this.state.columns}
            defaultColor={this.state.defaultColor}
            selectedColor={this.state.selectedColor}
          ></Table>
        </div>
        <SelectColor handleChange={this.handleChange}></SelectColor>
        <div className="options-field">
          <button onClick={this.addRow}>Add rows</button>
          <button onClick={this.deleteRow}>Delete rows</button>
          <button onClick={this.addCol}>Add columns</button>
          <button onClick={this.deleteCol}>Delete columns</button>
        </div>
      </div>
    );
  }
}
export default App;
