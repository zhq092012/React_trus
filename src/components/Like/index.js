import React, { Component } from "react";

export default class Like extends Component {
  constructor() {
    super();
    this.state = {
      isLiked: false
    };
  }
  handleLikeClick = () => {
    // this.setState({
    //   isLiked: !this.state.isLiked
    // });
    this.setState(
      prevState => {
        return {
          isLiked: !prevState.isLiked
        };
      },
      () => {
        //异步回调
        // console.log(this.state.isLiked);
      }
    );
  };
  render() {
    return (
      <div>
        {
          <span onClick={this.handleLikeClick}>
            {this.state.isLiked ? "取消 😍" : "喜欢 😡"}
          </span>
        }
      </div>
    );
  }
}
