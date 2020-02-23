//通过createRef获取组件或dom元素
import React, { Component, createRef } from "react";
export default class TodoInput extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    };
    this.handleAddClick = this.handleAddClick.bind(this);
    //在constructor中创建ref
    this.inputDOM = createRef();
  }
  handleInputChange = e => {
    this.setState({
      inputValue: e.currentTarget.value
    });
  };

  handleKeyup = e => {
    if (e.keyCode === 13) this.handleAddClick();
  };
  handleAddClick = () => {
    // 验证输入
    if (this.state.inputValue === "") return;

    this.props.addTodo(this.state.inputValue);
    this.setState(
      {
        inputValue: ""
      },
      () => {
        this.inputDOM.current.focus();
      }
    );
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          onKeyUp={this.handleKeyup}
          ref={this.inputDOM}
        ></input>
        <button
          onClick={
            //第一种传参
            // ()=>{this.handleAddClick(123);}

            //第二种传参
            // this.handleAddClick.bind(this, 123)

            //不传递参数
            this.handleAddClick
          }
        >
          {this.props.btnText}
        </button>
      </div>
    );
  }
}
