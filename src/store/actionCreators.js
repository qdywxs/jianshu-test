import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from "./actionTypes";  

import axios from "axios"; 

export const getInputChangeAction = (value) => ({ 
  type: CHANGE_INPUT_VALUE, 
  value  
});

export const getAddItem = () => ({
  type: ADD_TODO_ITEM
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const initListAction = (data) => ({  
  type: INIT_LIST_ACTION,                         
  data 
})

export const getTodoList = () => {
  return (dispatch) => {  /*3️⃣-④：返回的“函数”可以接收到 store 的 dispatch 方法；*/
    
    axios.get("http://yapi.demo.qunar.com/mock/82169/api/todolist") 
    .then((res) => {  
      const data = res.data;  
      
      console.log(data)  
      
      /*3️⃣-①：Redux 工作流程告诉我们，要拿获取到的“数据”去改变 store 中的数据，
      你就得重新按“流程图”走一次；*/
      const action = initListAction(data);  /*3️⃣-②：定义 action；*/
      
      /*3️⃣-③：发送 action（❗️注意：由于本文件中并没有 store 这个仓库，所以直接
      写 store.dispatch(action) 是会报错的！
      ❗️❗️❗️好的是，这里在定义 getTodoList 时，由于返回的 action 是一个“函数”，
      这个“函数”可以接收到 store 的 dispatch 方法！）*/
      dispatch(action);  /*3️⃣-⑤：既然接收到了 dispatch 方法，就可以直接调用这个方法
                         传递 action 给 store。*/
   
    })
    .catch(() => {alert("error")})    
  }
}
