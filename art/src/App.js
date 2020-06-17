import React, { Component } from "react";
import "./App.scss";
import HomePage from "./homepage/homepage.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <HomePage></HomePage>
      </div>
    );
  }
}

export default App;
