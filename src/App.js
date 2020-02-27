import React, { Component } from "react";
import { Home, Artical, Users, ArticalDetail } from "./views";
import { Route, NavLink as Link, Redirect, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/home">首页</Link>
          </li>
          <li>
            <Link to="/artical">文章</Link>
          </li>
          <li>
            <Link to="/users">用户</Link>
          </li>
        </ul>
        <Switch>
          <Route component={Home} path="/home"></Route>
          <Route component={Users} path="/users"></Route>
          <Route component={Artical} path="/artical"></Route>
          <Route component={ArticalDetail} path="/artical/:id"></Route>
          <Redirect to="/home" from="/"></Redirect>
        </Switch>
      </div>
    );
  }
}
export default App;
