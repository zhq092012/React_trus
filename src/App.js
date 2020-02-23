import React, { Component, Fragment } from "react";
import { TodoHeader, TodoInput, TodoList, Like } from "./components";
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
          // assigned: "Leo",
          isCompleted: true
        },
        {
          id: 2,
          title: "睡觉",
          // assigned: "xiao ming",
          isCompleted: false
        }
      ]
    };
  }
  //增加，修改状态
  addTodo = todoTitle => {
    //这是容易犯错的地方 因为push语句返回数组的长度
    // this.setState({
    //   todos: this.state.todos.push({
    //     id: Math.random(),
    //     title: todoTitle,
    //     isCompleted: false
    //   })
    // });

    //这种修改方式是对的
    // this.setState({
    //   todos: this.state.todos.concat({
    //     id: Math.random(),
    //     title: todoTitle,
    //     isCompleted: false
    //   })
    // });

    //第三种方式

    //复制旧的数组
    // const newTodos = this.state.todos.slice();//复制数组1
    const newTodos = [...this.state.todos]; //复制数组2
    newTodos.push({
      id: Math.random(),
      title: todoTitle,
      isCompleted: false
    });
    this.setState({ todos: newTodos });
  };
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
        <TodoInput btnText="添加待办事项" addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} />
        <Like />
      </Fragment>
      // <>
      //   <TodoHeader />
      //   <TodoInput />
      //   <TodoList />
      // </>
    );
  }
}
