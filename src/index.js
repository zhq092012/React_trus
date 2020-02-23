import React, { Component } from "react";
import { render } from "react-dom";
import classnames from "classnames";
import "./index.css";
import styled from "styled-components";
const Title = styled.h1`
  color: #f00;
`;
class App extends Component {
  render() {
    const style = { color: "blue" };
    return (
      <div>
        <Title>styled-components的使用</Title>
        <ol>
          <li style={style}>内联样式</li>
          <li className="has-color-red">className样式</li>
          <li className={classnames("a", { b: true, c: false })}>
            classnames选择性样式
          </li>
        </ol>
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
