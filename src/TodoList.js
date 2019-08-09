import React, { Component, Fragment } from "react"; 

import TodoItem from "./TodoItem"; 

import axios from "axios";  /*🚀引入 axios 模块。*/

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
    axios.get("http://yapi.demo.qunar.com/mock/82169/api/todolist")  
    
      .then((res) => {
        
        this.setState(() => ({  /*4️⃣-④：调用 setState 方法，传入一个“箭头函数”，
                                让“数据项”list 的值为 res.data。*/
          list: [...res.data]
        }))
      
      })
    
      .catch(() => {alert("error")})  
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
