import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => {
          return (
            <TodoItem
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
