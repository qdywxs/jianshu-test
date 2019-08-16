import React, { Component, Fragment } from "react";  

/*2️⃣-①：引入 CSSTransition 和 TransitionGroup 这两个“组件”；*/
import {
  CSSTransition,
  TransitionGroup,
} from "react-transition-group";

import "./style.css";

class App extends Component  {
  constructor(props) { 
    super(props);
    
    this.state = {
      list:[]
    }
    
    this.handleAddItem = this.handleAddItem.bind(this); 
  }
  
  render() {
    return (
      /*2️⃣-②：参照官方文档例子，给要添加动画的“多个元素”的最外层包裹一个 TransitionGroup 标签；*/
      /*2️⃣-③：给单个元素包裹 CSSTransition 标签（这个和上文讲的做法一模一样，
      可以直接拷贝过来，❗️但要去掉属性 in）；*/
      <Fragment>
        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  timeout={1000}
                  classNames="fade"
                  unmountOnExit={true}

                  appear={true}

                  onEntered={(el) => {
                    el.innerHTML="hello, 前端一万小时.";
                    el.style.color="red";
                  
                  }} 
                  
                  key={index}
                >
                  <div>hello, qdywxs.</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>

        <button onClick={this.handleAddItem}>toggle</button>

      </Fragment>
    );
  }
  
  handleAddItem() {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, "item"]
      }
    })
  }
}

export default App;