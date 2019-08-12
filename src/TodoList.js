import React, {Component} from "react";
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd'; 

import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from "./store/actionCreators"; 

import {connect} from "react-redux";

class TodoList extends Component {
  
  render() {
    return (
      <div style={{marginTop: "10px", marginLeft: "10px"}}>
        <div>
      
          <Input 
            value={this.props.inputValue} 
            placeholder="todo info" 
            style={{width: "300px", marginRight: "10px"}} 
            
            onChange={this.props.getInputChangeAction}
          />   
              
          <Button type="primary" onClick={this.props.handleButtonClick}>提交</Button>  

          <List style={{marginTop: "10px", width: "300px"}} 

            bordered
            dataSource={this.props.list}
            renderItem={(item, index) => <List.Item onClick = {() => {this.props.handleItemDelete(index)}}>{item}</List.Item>}
          />

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => { 
  return {  
    inputValue: state.inputValue,  
    list: state.list  
  }
}

const mapDispatchToProps = (dispatch) => {  
  return {  
    getInputChangeAction(e) {  
      const action = getInputChangeAction(e.target.value); 
      dispatch(action);
    },
    
    handleButtonClick() { 
      const action = getAddItemAction();  
      dispatch(action); 
    },

    handleItemDelete(index) { 
      const action = getDeleteItemAction(index);
      dispatch(action); 
    } 

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);  