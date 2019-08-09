/*2️⃣-④：由于这里没用到 Component，故删掉！
import React, {Component} from "react";  
*/
import React from "react"; 

import { Input, Button, List } from 'antd';  

/*2️⃣然后改写成一个函数；*/
const TodoListUI = (props) => {  //2️⃣-①：这个函数会接收一个“参数”props；
  return(
    /*2️⃣-②：然后返回一段 JSX；*/
    /*2️⃣-③：❗️注意用 props 替换 this.props。*/
    <div style={{marginTop: "10px", marginLeft: "10px"}}>
      <div>
        <Input  
          
          value={props.inputValue}

          placeholder="todo info" 
          style={{width: "300px", marginRight: "10px"}} 
          
          onChange={props.handleInputChange}
        /> 
        
        <Button type="primary" onClick={props.handleButtonClick}>提交</Button>

        <List 
          style={{marginTop: "10px", width: "300px"}} 
          bordered
          
          dataSource={props.list}

          renderItem={(item, index) => (<List.Item onClick = {() => {props.handleItemDelete(index)}}>{item}</List.Item>)}

        />  
        
      </div>
    </div>
  )
}

/*1️⃣直接将以下代码全部删除；
class TodoListUI extends Component {

  render() {  
    return(  
      <div style={{marginTop: "10px", marginLeft: "10px"}}>
        <div>
          <Input  
            
            value={this.props.inputValue}

            placeholder="todo info" 
            style={{width: "300px", marginRight: "10px"}} 
            
            onChange={this.props.handleInputChange}
          /> 
          
          <Button type="primary" onClick={this.props.handleButtonClick}>提交</Button>

          <List 
            style={{marginTop: "10px", width: "300px"}} 
            bordered
            
            dataSource={this.props.list}

            renderItem={(item, index) => (<List.Item onClick = {() => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}

          />  
          
        </div>
      </div>
    )
  }
}
*/


export default TodoListUI;
