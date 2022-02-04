import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.variable.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import create from "./modules/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={create}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
