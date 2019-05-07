import React, { Component } from "react";
import Case from "./Case";
import Row from "./Row";

class History extends Component {
  state = {};

  renderColumns(turn) {
    return <div />;
  }

  renderRows() {
    const rows = [];
    this.props.history.forEach(turn => rows.push(<Row />));

    return rows;
  }

  render() {
    return <div />;
  }
}

export default History;
