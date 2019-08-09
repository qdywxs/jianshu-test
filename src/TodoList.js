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
  
  render() {  /*3️⃣-③：“生命周期函数”render 会执行，根据变化了的“数据”，
              重新“更新”页面；*/
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

  shouldComponentUpdate() {  /*3️⃣-①：这个“生命周期函数”是在“组件”
                             被“更新”之前，会被自动执行；*/
    
    console.log("shouldComponentUpdate")
    return true
    
  }

  componentWillUpdate() {  /*3️⃣-②：这个“生命周期函数”是在“组件”
                           被“更新”之前，shouldComponentUpdate 询问之后，
                           且得到 true 的“答复”后，才自动执行；*/
  
    console.log("componentWillUpdate")
  }

  componentDidUpdate() {  /*3️⃣-④：这个“生命周期函数”是在“组件”
                          被“更新”完成之后，会自动执行。*/
    
    
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
