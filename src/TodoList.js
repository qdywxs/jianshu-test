import React, {Component} from "react";
import 'antd/dist/antd.css';
import store from "./store";

/*❗️❗️❗️删除这里的 initListAction！*/
import {getTodoList, getInputChangeAction, getAddItemAction, getDeleteItemAction} from "./store/actionCreators"; 

import TodoListUI from "./TodoListUI"; 

/*❗️❗️❗️这里关于 axios 引入的代码，已被移至 actionCreator 中；
import axios from "axios";
*/

class TodoList extends Component {
  constructor(props) {
    super(props);
    
    this.state = store.getState();
    
    this.handleInputChange = this.handleInputChange.bind(this);  
    
    this.handleStoreChange = this.handleStoreChange.bind(this);  
    
    this.handleButtonClick = this.handleButtonClick.bind(this); 

    this.handleItemDelete = this.handleItemDelete.bind(this);
    
    store.subscribe(this.handleStoreChange);  
    
  }
  
  render() {
    return(
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}  
        handleInputChange={this.handleInputChange}
        handleButtonClick={this.handleButtonClick}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }
  
  componentDidMount() { 
    const action = getTodoList()
    
    /*❗️将 action 发送给 store；*/
    store.dispatch(action)
    
    
    /*下面这行代码可以注释掉了！
    console.log(action)  
    */
    
    /*
    axios.get("http://yapi.demo.qunar.com/mock/82169/api/todolist")  
    .then((res) => {  
      const data = res.data;  
      const action = initListAction(data);  
      store.dispatch(action);
    })
    .catch(() => {alert("error")})
    */
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
