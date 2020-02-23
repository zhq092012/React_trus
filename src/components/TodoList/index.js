import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
export default class TodoList extends Component {
  //数据校验
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired
      })
    ).isRequired,
    onCompletedChecked: PropTypes.func
  };

  render() {
    return (
      <ul>
        {this.props.todos.map(todo => {
          return (
            <TodoItem
              onCompletedChecked={this.props.onCompletedChecked}
              key={todo.id}
              // id={todo.id}
              // title={todo.title}
              // isCompleted={todo.isCompleted}
              {...todo}
            />
          );
        })}
      </ul>
    );
  }
}
