import React, { Component } from "react";
import "./App.scss";
import HomePage from "./homepage/homepage.component";

class App extends Component {
  render() {
    return (
      <div className="App">      
        <HomePage></HomePage>
      </div>
    );
  }
}

export default App;