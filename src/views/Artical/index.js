import React, { Component } from "react";
import { Link } from "react-router-dom";
// import ArticalDetail from "./ArticalDetail";
export default class Artical extends Component {
  render() {
    return (
      <div>
        <Link to="/artical/1">文章一</Link>
        <Link to="/artical/2">文章二</Link>
        {/* <Route component={ArticalDetail} path="/artical/:id"></Route> */}
      </div>
    );
  }
}
