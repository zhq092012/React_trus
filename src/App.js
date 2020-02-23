import React, { Component, Fragment } from "react";
import { TodoHeader, TodoInput, TodoList } from "./components";
export default class App extends Component {
  // state = {
  //   title: "待办事项列表1"
  // };
  constructor() {
    super();
    this.state = {
      title: "待办事项列表1",
      desc: "今日事今日毕",
      // article: "<div><i>文章标题</i><br/><content>文章内容</content><div>",
      todos: [
        {
          id: 1,
          title: "吃饭",
          assigned: "Leo",
          isCompleted: true
        },
        {
          id: 2,
          title: "睡觉",
          assigned: "xiao ming",
          isCompleted: false
        }
      ]
    };
  }
  render() {
    return (
      <Fragment>
        {/* {
           this.state.todos.map(todo => {
          return <div key={todo.id}>{todo.title}</div>;
         
          <div dangerouslySetInnerHTML={{ __html: this.state.article }} />
        } */}
        <TodoHeader desc={this.state.desc}>
          <i>{this.state.title}</i>
        </TodoHeader>
        <TodoInput btnText="添加待办事项" />
        <TodoList todos={this.state.todos} />
      </Fragment>
      // <>
      //   <TodoHeader />
      //   <TodoInput />
      //   <TodoList />
      // </>
    );
  }
}
