/*5️⃣-⑫：引入常量 INIT_LIST_ACTION；*/
import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from "./actionTypes"; 

const defaultState = { 
  inputValue: "", 
  list: []
};

export default (state = defaultState, action) => { 
  
  if(action.type === CHANGE_INPUT_VALUE) {  
    
    const newState = JSON.parse(JSON.stringify(state)); 
  
    newState.inputValue = action.value;  
    
    return newState;  
  }
  
  if(action.type === INIT_LIST_ACTION) {  /*5️⃣-⑬：如果 action 的类型是 
                                          INIT_LIST_ACTION，就执行下边的代码；*/
    
    const newState = JSON.parse(JSON.stringify(state));  /*5️⃣-⑭：同理，拷贝一份数据；*/
  
    newState.list = action.data;  /*5️⃣-⑮：使新数据里的 list 等于 action 的 data;*/
    
    return newState;  /*5️⃣-⑯：同理，返回这个新数据。*/
  }  
  
  if(action.type === ADD_TODO_ITEM) { 
    
    const newState = JSON.parse(JSON.stringify(state)); 
    newState.list.push(newState.inputValue); 
    newState.inputValue = ""; 
    
    return newState; 
  }
  
  if(action.type === DELETE_TODO_ITEM) {  
    
    const newState = JSON.parse(JSON.stringify(state)); 
    
    newState.list.splice(action.index, 1);  

    return newState; 
  }
  
  return state;
}
