import React, { Component } from "react";
import { render } from "react-dom";
const Header = () => <h1>类组件</h1>;
//定义组件的第二种方式
class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}
//类组件渲染的原理
// const app = new App({
//   desc: "类组件继承React.Component"
// }).render();
render(
  <App desc="类组件继承React.Component" />,
  document.querySelector("#root")
);
