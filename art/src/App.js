import React, { Component } from "react";
import "./App.scss";
import HomePage from "./homepage/homepage.component";
import Navigation from "./shared/navbar/navigation.component";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import About from "./about/about.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/home" component={HomePage} />
            <Route path="/about" component={About} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
