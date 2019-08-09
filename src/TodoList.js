import React, {Component} from "react";
import 'antd/dist/antd.css';

/*3️⃣-②：把 Antd Design 关于“页面渲染”的内容剪切；
import { Input, Button, List } from 'antd';  
*/

import store from "./store";
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from "./store/actionCreators"; 

import TodoListUI from "./TodoListUI"; 


class TodoList extends Component {
  constructor(props) {
    super(props);
    
    this.state = store.getState();
    
    this.handleInputChange = this.handleInputChange.bind(this);  
    
    this.handleStoreChange = this.handleStoreChange.bind(this);  
    
    this.handleButtonClick = this.handleButtonClick.bind(this); 
    
    /*3️⃣-⑱：在这里对 handleItemDelete 方法的 this 指向作一个修改*/
    this.handleItemDelete = this.handleItemDelete.bind(this);
    
    store.subscribe(this.handleStoreChange);  
    
  }
  
  render() {
    return(
      
      /*3️⃣-⑤、3️⃣-⑧、3️⃣-⑪、3️⃣-⑭、3️⃣-⑰：
      通过“属性”的形式传值给 TodoListUI 组件；*/
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}  
        handleInputChange={this.handleInputChange}
        handleButtonClick={this.handleButtonClick}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }
  
  
  handleInputChange(e) { 

    const action = getInputChangeAction(e.target.value)
    
    store.dispatch(action);  
  }

  handleStoreChange() { 
    
    this.setState(store.getState()); 
  }


  handleButtonClick() { 
    
    const action = getAddItemAction();  
    
    store.dispatch(action); 
  }

  handleItemDelete(index) { 

    const action = getDeleteItemAction(index);
    
    store.dispatch(action); 
  } 

}

export default TodoList;
