import React, { Component } from "react";
const noop = () => {};
export default class TodoItem extends Component {
  handleCheckboxChange = () => {
    // this.props.onCompletedChecked &&
    // this.props.onCompletedChecked(this.props.id);
    const { onCompletedChecked = noop, id } = this.props; //解构this.props
    onCompletedChecked && onCompletedChecked(id);
  };
  render() {
    const { isCompleted, title } = this.props; //解构this.props
    return (
      <li>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={this.handleCheckboxChange}
        ></input>
        <span>
          {title}--
          {isCompleted ? "已完成" : "未完成"}
        </span>
      </li>
    );
  }
}
