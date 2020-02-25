import React from "react";
import { render } from "react-dom";
import store from "./store";
import App from "./App";
console.log(store);
window.store = store;
render(<App store={store} />, document.querySelector("#root"));
