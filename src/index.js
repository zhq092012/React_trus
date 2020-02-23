import React from "react";
import { render } from "react-dom";
import App from "./App";
//全局挂载React.Component组件的一些prototype
// import * as services from "./services";
// React.Component.prototype.http = services;

render(<App />, document.getElementById("root"));
