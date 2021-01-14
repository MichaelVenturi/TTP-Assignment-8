import React from "react";
import "./App.css";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import "bootstrap/dist/css/bootstrap.min.css";
import Table from "./components/Table";

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <Table></Table>
      </div>
    );
  }
}

export default App;
