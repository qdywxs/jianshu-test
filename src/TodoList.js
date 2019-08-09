import React, {Component} from "react";
import 'antd/dist/antd.css';

import { Input, Button, List } from 'antd';  

import store from "./store";

/*3️⃣-①：首先，将创建好的“方法”引入；*/
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from "./store/actionCreators"; 

/*3️⃣-⑧：以上几步完成后，下边这行代码在这里就没用了，故删除。*/
/*import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from "./store/actionTypes"; */

class TodoList extends Component {
  constructor(props) {
    super(props);
    
    this.state = store.getState();
    
    this.handleInputChange = this.handleInputChange.bind(this);  
    
    this.handleStoreChange = this.handleStoreChange.bind(this);  
    
    this.handleButtonClick = this.handleButtonClick.bind(this); 
    
    store.subscribe(this.handleStoreChange);  
    
  }
  
  render() {
    return (
      <div style={{marginTop: "10px", marginLeft: "10px"}}>
        <div>
          <Input 
            value={this.state.inputValue} 
            placeholder="todo info" 
            style={{width: "300px", marginRight: "10px"}} 
            
            onChange={this.handleInputChange}  
          /> 
          
          <Button type="primary" onClick={this.handleButtonClick}>提交</Button>  

          <List style={{marginTop: "10px", width: "300px"}} 

            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => <List.Item onClick = {this.handleItemDelete.bind(this, index)}>{item}</List.Item>}
          />  
          
        </div>
      </div>
    )
  }
  
  
  handleInputChange(e) { 
    /*3️⃣-②：将以下几行代码删除；
    const action = {
      type: CHANGE_INPUT_VALUE, 
      
      value: e.target.value  
    }
    */
    /*3️⃣-③：直接调用 getInputChangeAction 方法：*/
    const action = getInputChangeAction(e.target.value)
    
    store.dispatch(action);  
  }

  handleStoreChange() { 
    
    this.setState(store.getState()); 
  }


  handleButtonClick() { 
    /*3️⃣-④：将以下几行代码删除；
    const action = {  
      type: ADD_TODO_ITEM 
    };
    */
    /*3️⃣-⑤：直接调用 getAddItemAction 方法；*/
    const action = getAddItemAction();  
    
    store.dispatch(action); 
  }

  handleItemDelete(index) { 
    /*3️⃣-⑥：将以下几行代码删除；
    const action = {
      type: DELETE_TODO_ITEM,  
      index 
    };
    */
    /*3️⃣-⑦：直接调用 getDeleteItemAction 方法；*/
    const action = getDeleteItemAction(index);
    
    store.dispatch(action); 
  } 

}

export default TodoList;
