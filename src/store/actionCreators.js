/*5️⃣-⑤：引入“常量”INIT_LIST_ACTION；*/
import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from "./actionTypes";  

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

export const initListAction = (data) => ({  /*5️⃣-⑥：在 actionCreators.js 
                                            里创建一个 initListAction 函数，
                                            这个函数接收一个 data；*/
  
  type: INIT_LIST_ACTION,  /*5️⃣-⑦：❗️❗️❗️在 React 里，action 需要用“对象”的形式来表示。
                           里边有一个 type 属性，用它来告诉 store“你要帮我做的事情是什么？”；*/
                          
  data  /*5️⃣-⑧：将接收到的 data 返回；*/
})
