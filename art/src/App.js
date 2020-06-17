import React, { Component } from "react";
import "./App.scss";
import HomePage from "./homepage/homepage.component";
import Navigation from "./shared/navbar/navigation.component";


class App extends Component {
  render() {
    return (
      <div className="App">   
      <Navigation></Navigation>  
        <HomePage></HomePage>
      </div>
    );
  }
}

export default App;
