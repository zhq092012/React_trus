import React, { Component } from "react";
import PropTypes from "prop-types";
export default class TodoInput extends Component {
  static propTypes = {
    btnText: PropTypes.string
  };
  static defaultProps = {
    btnText: "添加待办事项"
  };
  render() {
    return (
      <div>
        <input type="text"></input>
        <button>{this.props.btnText}</button>
      </div>
    );
  }
}
