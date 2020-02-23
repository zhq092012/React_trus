import React, { Component } from "react";
const noop = () => {};
export default class TodoItem extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     completedText: ""
  //   };
  // }
  // static getDrivedStateFromProps(props) {
  //   return {
  //     completedText: props.completed ? "完成" : "未完成"
  //   };
  // }
  handleCheckboxChange = () => {
    // this.props.onCompletedChecked &&
    // this.props.onCompletedChecked(this.props.id);
    const { onCompletedChecked = noop, id } = this.props; //解构this.props
    onCompletedChecked && onCompletedChecked(id);
  };
  //解决重复render()********优化
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.completed !== this.props.completed;
  }
  render() {
    console.log(`TodoItem${this.props.title}Render`);

    const { completed, title } = this.props; //解构this.props
    return (
      <li>
        <input
          type="checkbox"
          checked={completed}
          onChange={this.handleCheckboxChange}
        ></input>
        <span>
          {title}--
          {completed ? "已完成" : "未完成"}
        </span>
      </li>
    );
  }
}
