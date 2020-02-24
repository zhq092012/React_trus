import React, { useState, useEffect } from "react";
import { render } from "react-dom";

const Counter = () => {
  const [count, setCount] = useState(0);
  //监控更新
  useEffect(() => {
    console.log("更新了");
    document.title=`当前数量为${count}`
  });
  return (
    <div>
      <p>当前数量为{count}</p>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};
render(<Counter />, document.getElementById("root"));
