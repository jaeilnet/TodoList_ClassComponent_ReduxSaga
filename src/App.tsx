import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <BrowserRouter>
          <Route>
            <Home />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
