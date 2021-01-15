import React from "react";
import "./App.css";
//import reactDOM from "react-dom";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import "bootstrap/dist/css/bootstrap.min.css";
import Table from "./components/Table";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      color: "white",
      rows: 3,
      columns: 3,
    };
  }

  test = () => {
    this.setState((prevState) => {
      return {
        rows: prevState.rows + 1,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <div id="table">
          <Table rows={this.state.rows} columns={this.state.columns}></Table>
        </div>
        <button onClick={this.test}>test</button>
      </div>
    );
  }
}

export default App;
