/*2️⃣-④：既然下边用到了“常量”，故这里要先引入“常量”；*/
import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from "./actionTypes";  

export const getInputChangeAction = (value) => ({  /*2️⃣-①：定义一个方法，
                                                   让它等于一个“箭头函数”，并返回一个“对象”*/
  
  type: CHANGE_INPUT_VALUE,  /*2️⃣-②：“箭头函数”返回一个 type 属性，
                             它的值为“常量”CHANGE_INPUT_VALUE；*/
  
  value  /*2️⃣-③：将“接收”的 value 返回出去；*/
});


/*2️⃣-⑤：同理，封装其他的 action 代码：*/
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
