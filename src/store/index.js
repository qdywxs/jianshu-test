import { createStore, applyMiddleware, compose } from "redux";  

import reducer from "./reducer"; 

import createSagaMiddleware from "redux-saga";

/*1️⃣-⑳：从当前目录下的 sagas.js 文件中引入 todoSagas；
❗️❗️❗️之所以在不知道 sagas.js 是什么内容的情况下，就可以在这里导入 todoSagas，
这是由于 ES6 中通过 export default 语法导出的，导入时可以对其进行任意命名！*/
import todoSagas from "./sagas"

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers( 
  applyMiddleware(sagaMiddleware)
);

const store = createStore(
  reducer,
  enhancer  
);  

/*1️⃣-㉑：当使用了这个“中间件”之后，按照官方文档指示，
我们还要调用 sagaMiddleware 的方法 run，让 todoSagas 执行起来！*/
sagaMiddleware.run(todoSagas)

export default store;
