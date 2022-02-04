import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./page/Home";

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
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
