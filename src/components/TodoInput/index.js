import React, { Component } from "react";
import PropTypes from "prop-types";
export default class TodoInput extends Component {
  static propTypes = {
    btnText: PropTypes.string
  };
  static defaultProps = {
    btnText: "添加待办事项"
  };
  constructor() {
    super();
    this.state = {
      inputValue: ""
    };
    this.handleAddClick = this.handleAddClick.bind(this);
  }
  handleInputChange = e => {
    // console.log(e);
    this.setState({
      inputValue: e.currentTarget.value
    });
  };
  // handleAddClick = () => {
  //   console.log(this.state);
  // };
  handleAddClick(id) {
    // console.log(id);

    this.props.addTodo(this.state.inputValue);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        ></input>
        <button
          onClick={
            //第一种传参
            () => {
              // this.handleAddClick(123);
              this.handleAddClick();
            }
            //第二种传参
            // this.handleAddClick.bind(this, 123)
          }
        >
          {this.props.btnText}
        </button>
      </div>
    );
  }
}
