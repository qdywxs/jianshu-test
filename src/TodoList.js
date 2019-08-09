import React, {Component} from "react";
import 'antd/dist/antd.css';

import { Input, Button, List } from 'antd';  

import store from "./store";

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
          />  {/*1️⃣首先，对组件的每一项进行“点击”事件的绑定；
              ❗️由于我们使用了 Antd Design，故列表项是通过 List.item 渲染的。
              ❗️renderItem 除了接收参数 item，它还可以接收一个参数 index。
              ❗️注意在用 bind 改变 this 的指向时，可以传递一个 index 参数。*/}
          
        </div>
      </div>
    )
  }
  
  handleInputChange(e) { 
    const action = {
      type: "change_input_value", 
      
      value: e.target.value  
    }
    
    store.dispatch(action);  
  }

  handleStoreChange() { 
    
    this.setState(store.getState()); 
  }

  handleButtonClick() { 
    const action = {  
      type: "add_todo_item" 
    };
    
    store.dispatch(action); 
  }

  handleItemDelete(index) {  /*2️⃣在这里写方法的具体逻辑（方法接收一个 index 参数——
                             它表示“点击的每一项的索引”）；*/
    
    const action = {
      type: "delete_todo_item",  /*3️⃣要做的事的类型为 delete_todo_item；*/
      index  /*4️⃣要将“点击的每一项的索引”一并传给 reducer；*/
    };
    
    store.dispatch(action);  /*5️⃣调用 store 的 dispatch 方法，将 action 发送给 store；*/
  } 

}

export default TodoList;
