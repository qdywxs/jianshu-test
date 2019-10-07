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

  componentWillMount() {
    console.log("componentWillMount") 
  }
  
  render() {
    console.log("parent render")
    
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
  
  componentDidMount() {  
    console.log("componentDidMount")  
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate")
    return true
    
  }

  componentWillUpdate() { 
    console.log("componentWillUpdate")
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
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
