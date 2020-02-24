import React, { Component } from "react";
import { CounterConsumer } from "../../counterStore";
export default class CountBtn extends Component {
  render() {
    return (
      <CounterConsumer>
        {({ onIncrementCount, onDecrementCount }) => {
          let handle =
            this.props.type === "increment"
              ? onIncrementCount
              : onDecrementCount;
          return <button onClick={handle}>{this.props.children}</button>;
        }}
      </CounterConsumer>
    );
  }
}
