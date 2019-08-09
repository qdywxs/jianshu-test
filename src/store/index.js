import { createStore } from "redux"; 

import reducer from "./reducer"; 

const store = createStore(
  reducer,
  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);  /*🚀粘贴过来的这行代码表示：如果 window 下边有 __REDUX_DEVTOOLS_EXTENSION__ 这个变量的话，
    就执行这个变量对应的方法 window.__REDUX_DEVTOOLS_EXTENSION__()。
    
    即，若安装了这个工具，就在页面去使用这个工具！
    */

export default store; 
