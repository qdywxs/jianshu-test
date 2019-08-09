import { createStore } from "redux"; 

import reducer from "./reducer";  /*🚀从当前目录下的 reducer.js 引入 reducer。*/

const store = createStore(reducer);  /*❗️❗️❗️将 reducer 作为第一个“参数”传递给“方法”createStore！*/

export default store; 
