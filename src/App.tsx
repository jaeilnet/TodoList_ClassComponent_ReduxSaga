import { createBrowserHistory } from "history";
import React, { Component } from "react";
import { Router } from "react-router-dom";
import "./App.css";
import Layout from "./routes/Layout";

interface AppProps {
  // history: History;
}

type Props = AppProps;

export const history = createBrowserHistory();
export class App extends Component<Props> {
  render() {
    return (
      <>
        <Router history={history}>
          <Layout />
        </Router>
      </>
    );
  }
}

export default App;
