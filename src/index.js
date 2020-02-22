import React from "react";
import ReactDOM from "react-dom";
// const app=<h1>webcome to react</h1>
// const createApp = props => {
//   return (
//     <div>
//       {/* 只要在jsx里插入js代码，就加一层{} */}
//       <h1>webcome to {props.title}</h1>
//       <p>优秀的{props.title}</p>
//     </div>
//   );
// };
// const app = createApp({
//   title: "react 16.8"
// });

//创建组件的第一种方式就是使用=>函数，名字要大写
const App = props => {
  return (
    <div>
      {/* 只要在jsx里插入js代码，就加一层{} */}
      <h1>webcome to {props.title}</h1>
      <p>优秀的{props.title}</p>
    </div>
  );
};
ReactDOM.render(
  <App title="react 1901"></App>,
  document.querySelector("#root")
);
