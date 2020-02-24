import React, { Component } from "react";
import withCopyRight from "./withCopyRight";

@withCopyRight
class AnotherCopy extends Component {
  render() {
    return <div>另一个{this.props.name}</div>;
  }
}
export default AnotherCopy;
// export default withCopyRight(AnotherCopy);
