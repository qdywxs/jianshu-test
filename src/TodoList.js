import React, { Component, Fragment } from "react"; 

import TodoItem from "./TodoItem"; 

import "./style.css"; 

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      inputValue: "", 
      list: []
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    
  }

  render() {  
    
    return(
      <Fragment>
        <div>
          <label htmlFor="insertArea">请输入要进行的事项：</label>    
        
          <input 
            id="insertArea"
      
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}

            ref = {(input) => {this.input = input}}
          />
          <button onClick={this.handleBtnClick}>
            提交
          </button>

        </div>

        <ul ref={(ul) => {this.ul = ul}}> 
          {this.getTodoItem()}
        </ul>

      </Fragment>
    )
  }

  getTodoItem() {
    return this.state.list.map((item, index) => { 
      return( 
        <TodoItem 
        key={item}
        
        content={item}
        index={index} 
        itemDelete={this.handleItemDelete}
        />  
      )  
    })
  }
  
  handleInputChange() {
    const value = this.input.value
    
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ""        
    }), () => {
      console.log(this.ul.querySelectorAll("div").length)
    })  /*❓第二个“函数”形式的“参数”什么时候执行呢？
        答：会等到 setState 这个“异步”的方法完全执行好了后，
        作为“回调函数”的第二个参数才会被执行。*/
    
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
