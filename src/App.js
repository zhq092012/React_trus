import React, { Component, Fragment } from "react";
import { TodoHeader, TodoInput, TodoList, Like } from "./components";
import { getTodos } from "./services";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "待办事项列表1",
      desc: "今日事今日毕",
      todos: [],
      isLoading: false
    };
  }
  //增加，修改状态
  addTodo = todoTitle => {
    //这是容易犯错的地方 因为push语句返回数组的长度
    // this.setState({
    //   todos: this.state.todos.push({
    //     id: Math.random(),
    //     title: todoTitle,
    //     completed: false
    //   })
    // });

    //第二种方式 这种修改方式是对的
    // this.setState({
    //   todos: this.state.todos.concat({
    //     id: Math.random(),
    //     title: todoTitle,
    //     completed: false
    //   })
    // });

    //第三种方式

    //复制旧的数组
    // const newTodos = this.state.todos.slice();//复制数组1
    const newTodos = [...this.state.todos]; //复制数组21
    newTodos.push({
      id: Math.random(),
      title: todoTitle,
      completed: false
    });
    this.setState({ todos: newTodos });
  };
  //选择checkbox
  onCompletedChecked = id => {
    this.setState(prev => {
      return {
        todos: prev.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      };
    });
  };
  getData = () => {
    this.setState({
      isLoading: true
    });
    getTodos()
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          this.setState({
            todos: res.data
          });
        } else {
          //错误处理
        }
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        this.setState({
          isLoading: false
        });
      });
  };
  componentDidMount() {
    // console.log(this.http.getTodos);
    this.getData();
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
        <TodoInput btnText="添加待办事项" addTodo={this.addTodo} />
        {this.state.isLoading ? (
          <div>Loading...</div>
        ) : (
          <TodoList
            todos={this.state.todos}
            onCompletedChecked={this.onCompletedChecked}
          />
        )}
        <Like />
      </Fragment>
    );
  }
}
