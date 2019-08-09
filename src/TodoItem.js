import React, { Component } from "react";

import PropTypes from "prop-types";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  } 
  
  render() {
    console.log("TodoItem render")  /*2️⃣-③：在页面 input 框输入内容并点击“提交”后，
                                    子组件的 render 函数都会相应执行。
                               ❗️❗️❗️其原因有二：
                               第一，子组件的 content 是从父组件接收的，在父组件 TodoList 里，
                               content 的值是“列表循环出的每一项”。故，当我们输入内容并提交后，
                               “列表循环出的每一项”会随之变化，继而子组件接收到的属性也会变化，
                               子组件的 render 函数相应地会根据新的值进行重新渲染；
                                      
                               第二，当父组件的 render 函数被运行时，它的子组件的 render 函数
                               都将被运行一次！
                               因为，子组件 TodoItem 是被父组件 TodoList 的 render 渲染出来的，
                               那么，父组件的 render 在被重新执行时，子组件的 render 也会被执行。
                               */
    
    const {content, test} = this.props  /*2️⃣-①：this.props 是父组件通过“属性”传递过来的内容；*/
    
    return(
      <div onClick={this.handleClick}> 
      {test}{content}  {/*2️⃣-②：我们将内容项 content 展示在页面；*/}
      </div>
    )
  }
  
  handleClick() {  
    const {itemDelete, index} = this.props  
    
    itemDelete(index)
  }
}

TodoItem.propTypes = {
  
  test: PropTypes.string.isRequired, 
  
  content: PropTypes.string,  
  itemDelete: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  
  test: "hello, " 
}

export default TodoItem;
