import React, { Component } from "react";

import { Select, MenuItem } from "@material-ui/core";

class App extends Component {
  state = {
    value: 10
  };

  handleChange = e => {
    this.setState({ value: e.target.value * 1 });
  };

  render() {
    return (
      <div className="App" style={{ padding: "5rem" }}>
        <Select
          label="Age"
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <button type="submit">Send</button>
      </div>
    );
  }
}

export default App;
