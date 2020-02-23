import React, { Component, Fragment } from "react";
import { TodoHeader, TodoInput, TodoList } from "./components";
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <TodoHeader desc="今日事今日毕">
          <i>待办事项列表</i>
        </TodoHeader>
        <TodoInput btnText="添加待办事项" />
        <TodoList />
      </Fragment>
      // <>
      //   <TodoHeader />
      //   <TodoInput />
      //   <TodoList />
      // </>
    );
  }
}
