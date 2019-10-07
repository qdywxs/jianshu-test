import React, { Component, Fragment } from "react";

class TodoList extends Component {
  render() {
    return(
      <Fragment>
        <div><input /><button>提交</button></div>
        <ul>
          <li>React 初识</li>
          <li>React 入门</li>
          <li>React 进阶</li>
        </ul>
      </Fragment>
    )
  }
}

export default TodoList;
