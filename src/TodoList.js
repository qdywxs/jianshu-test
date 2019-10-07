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
            onChange={this.handleInputChange.bind(this)}
          />

          <button onClick={this.handleBtnClick.bind(this)}>
            提交
          </button>
        </div>

        <ul>
          {
            this.state.list.map((item, index) => { 
              return( 

                <TodoItem 
                  content={item}
                  
                  index={index} 
                  itemDelete={this.handleItemDelete.bind(this)}
                />
                
              )  
            })
          }
        
        </ul>

      </Fragment>
    )
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value  
    })
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],  
      inputValue: ""  
    }) 
  }

  handleItemDelete(index) { 
    
    const list = [...this.state.list] 
    
    list.splice(index, 1)  
    this.setState({
      list: list 
    }
    )
  }
}

export default TodoList;
