import React, { Component } from "react";

const withCopyRight = YourComponent => {
  return class WthCopyRight extends Component {
    render() {
      console.log(this.props);

      return (
        <>
          <YourComponent {...this.props} />
          <div>&copy; 2019 &emsp;张&emsp;虎&emsp;强</div>
        </>
      );
    }
  };
};
export default withCopyRight;
