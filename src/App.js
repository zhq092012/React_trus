import React, { Component } from "react";
import { CartList } from "./components";
class App extends Component {
  render() {
    return (
      <div>
        <CartList store={this.props.store} />
      </div>
    );
  }
}
export default App;
