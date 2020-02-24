import React, { Component } from "react";
import AnotherCopy from "./AnotherCopy";
class App extends Component {
  render() {
    return (
      <div>
        App <AnotherCopy name="组件" />
      </div>
    );
  }
}
export default App;
