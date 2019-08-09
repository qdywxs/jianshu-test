/*3️⃣-⑦：引入“常量”GET_INIT_LIST；*/
import {GET_INIT_LIST, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from "./actionTypes";  

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

/*3️⃣-⑧：定义 getInitList；
❗️❗️❗️注意：既然我们没有用 Redux-thunk，那么返回的 action 就还得是“对象”的形式！*/
export const getInitList = () => ({
  type: GET_INIT_LIST
})
