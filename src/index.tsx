import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./redux/store";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

// Alter defaults after instance has been created
instance.defaults.headers.common["Authorization"] =
  "Bearer " + Cookies.get("jwt");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
