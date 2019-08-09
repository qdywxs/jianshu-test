import React, { Component, Fragment } from "react"; 

import TodoItem from "./TodoItem"; 

import "./style.css"; 

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {  /*1️⃣-①：一旦 state 发生改变（我们可以在页面的 input 框输入任意内容，
                    来使 state 发生改变），*/
      inputValue: "", 
      list: []
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    
  }

  render() {  /*1️⃣-②：render 函数就会重新执行（即，重新用新的数据渲染页面）。*/
    console.log("render")  /*1️⃣-③：为了演示 render 函数确实执行了，
                           我们让控制台给我们实时打印一些信息。*/
    
    return(
      <Fragment>
        <div>
          <label htmlFor="insertArea">请输入要进行的事项：</label>    
        
          <input 
            id="insertArea"
      
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />

          <button onClick={this.handleBtnClick}>
            提交
          </button>
        </div>

        <ul>
          {this.getTodoItem()}
        </ul>

      </Fragment>
    )
  }

  getTodoItem() {
    return this.state.list.map((item, index) => { 
      return( 
        <TodoItem 
        key={index}
        
        content={item}
        index={index} 
        itemDelete={this.handleItemDelete}
        />  
      )  
    })
  }
  
  handleInputChange(e) {
    const value = e.target.value
    
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],  
      inputValue: ""        
    }))
  }

  handleItemDelete(index) { 
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
        
      return {list}
 
    })
  }
}

export default TodoList;
