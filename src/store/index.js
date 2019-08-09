/*1️⃣-⑩：将 compose 函数从 redux 中引入进来；*/
import { createStore, applyMiddleware, compose } from "redux";  

import reducer from "./reducer"; 

import thunk from "redux-thunk";  

/*1️⃣-⑦：直接拷贝官方文档里的代码；*/
const composeEnhancers =
  /*❗️1️⃣-⑧：这行代码可以注释掉，因为浏览器的应用，故 window 的 object 是肯定存在的！
  typeof window === 'object' && 
  */
  
  /*❗️1️⃣-⑨：下面这行代码和之前的意思一样：
  如果 window 下边有 __REDUX_DEVTOOLS_EXTENSION__ 这个变量的话，
  就执行这个变量对应的方法 window.__REDUX_DEVTOOLS_EXTENSION__()。
  否则，
  就执行 compose 函数；*/
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


/*1️⃣-⑫：继续拷贝官网的代码；*/
const enhancer = composeEnhancers(  /*1️⃣-⑬：表示将 composeEnhancers 执行后的
                                    结果赋值给 enhancer；*/
  applyMiddleware(thunk)  /*1️⃣-⑭：顺便把 thunk 通过 applyMiddleware 执行一下（
                             ❗️❗️❗️官方文档里是 ...middleware，但是我们项目代码里
                             并没有 middleware 这个“数组”变量，有的只是 thunk 
                             这一个“中间件”。故，用 thunk 替换掉 ...middleware ）；*/
);

const store = createStore(
  reducer,
  
  /*1️⃣-⑮：继而，我们在创建 store 的时候，就不再使用 applyMiddleware(thunk) 
  这种语法了，故注释掉：
  applyMiddleware(thunk)
  */
  enhancer  /*1️⃣-⑯：取而代之，直接将 enhancer 传递进来即可！*/
  
  
  /*1️⃣-⑪：相应地删除下面这行代码，因为 
  redux-devtools-extension 相关的代码被配置在了 1️⃣-⑨ 中！
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  */
);  

export default store;
