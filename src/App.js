import React, { Component } from "react";
import { Home, Artical, Users, ArticalDetail, NotFound } from "./views";
import { Route, NavLink as Link, Redirect, Switch } from "react-router-dom";
class App extends Component {
  state = {
    isLogin: false
  };
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
          {/* component不能和render同时使用，同时使用component优先，同时render可以传递参数 */}
          {/* <Route compo nent={Home} path="/home"></Route> */}
          <Route
            path="/home"
            render={props => {
              return <Home {...props} x={1} />;
            }}
          ></Route>
          {/* <Route
            path="/home"
            render={() => <div>这是render出来的路由</div>}
          ></Route> */}
          {/* <Route component={Users} path="/users"></Route> */}
          <Route
            path="/users"
            render={routeProps => {
              return this.state.isLogin ? (
                <Users {...routeProps} />
              ) : (
                <div>请登录</div>
              );
            }}
          ></Route>
          <Route component={Artical} path="/artical" exact></Route>
          <Route component={ArticalDetail} path="/artical/:id"></Route>
          <Route component={NotFound} path="/404"></Route>
          <Redirect to="/home" from="/" exact></Redirect>
          <Redirect to="/404"></Redirect>
        </Switch>
      </div>
    );
  }
}
export default App;
