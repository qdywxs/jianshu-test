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
            this.state.list.map((item, index)=>{ 
              return( 
                /*2️⃣-①：通过“属性”的形式，将 index 和 handleItemDelete 方法
                传值给“子组件 TodoItem”；*/
                <TodoItem 
                  content={item}

                  index={index} 
                  itemDelete={this.handleItemDelete.bind(this)}
                />  
                  /*2️⃣-②：注意我在传递 handleItemDelete 方法时，我用了 .bind(this) 
                  的写法。
                  为什么这样写呢？
                  答：“子组件”想要去掉其自身的某项，其实还是在借助“父组件”的方法 handleItemDelete，
                  子组件自己是没有这个方法的！我这里将 this 的“指向”规定为“父组件 TodoList”，
                  后边子组件调用时，this 的指向将不会出错。*/

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
