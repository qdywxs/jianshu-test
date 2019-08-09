import React, {Component} from "react";
import 'antd/dist/antd.css';
import store from "./store";

import {getInitList, getInputChangeAction, getAddItemAction, getDeleteItemAction} from "./store/actionCreators"; 

import TodoListUI from "./TodoListUI"; 

/*❗️移除本文件的 axios 的引用！
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
    const action = getInitList();  
    
    /*❗️❗️❗️3️⃣-⑨：将 action 传递出去；
    而这一步就是 Redux-saga 最重要的一步：
    之前，我们没用 Redux-saga 等任何“中间件”时，按照 Redux 工作流程，
    这里的 action 只会传递给 store，然后 store 再拿着之前的 state 和这里的 action 
    传递给 reducer；
    但现在，使用了 Redux-saga 后，除了和上边一样，在 reducer 中能接收到 action 外，
    sagas.js 中也能接收到 action！*/
    store.dispatch(action);
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
