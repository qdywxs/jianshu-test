const defaultState = { 
  inputValue: "",  /*7️⃣-①：将这里的数据初始化为“空”；*/
  list: []
};

export default (state = defaultState, action) => { 
  
  if(action.type === "change_input_value") {  
    
    const newState = JSON.parse(JSON.stringify(state)); 
  
    newState.inputValue = action.value;  
    
    return newState;  
  }
  
  if(action.type === "add_todo_item") { 
    
    const newState = JSON.parse(JSON.stringify(state)); 
    newState.list.push(newState.inputValue); 
    newState.inputValue = ""; 
    
    return newState; 
  }
  
  if(action.type === "delete_todo_item") {  /*7️⃣-②：如果 action 的类型是 delete_todo_item，
                                         就执行以下代码；*/
    
    const newState = JSON.parse(JSON.stringify(state));  /*7️⃣-③：先对之前的 state 
                                          作一个“深拷贝”，并赋值给 newState；
                                          ❗️❗️❗️之所以这样做，是因为：
                                          reducer 可以接收 state，但绝不能修改 state！*/
    
    newState.list.splice(action.index, 1);  /*7️⃣-④：利用 ES3 数组方法 splice，
                                            删除点击的那一项；*/
    return newState;  /*7️⃣-⑤：注意把“新数据”返回给 store。*/
  }
  
  return state;
}
