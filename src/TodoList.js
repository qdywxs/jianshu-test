import React, { Component, Fragment } from "react";  //🚀先引入 Fragment；

class TodoList extends Component {
  render() {
    return(
      
      /*🚀再用 Fragment 替代 div。*/
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
