import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './TodoList';

/*5️⃣-③：之前我们是将 Todolist 引入进来，然后在这里去直接挂载并渲染 TodoList 这个组件。
可有了 React-redux 后，这一步就不这样做了！
ReactDOM.render(<TodoList />, document.getElementById('root'));
*/

/*❗️❗️❗️5️⃣-④：有了 React-redux 后，我们会首先从 react-redux 引入一个 Provider 组件（
也是 React-redux 的核心 API 之一）；*/
import {Provider} from "react-redux";

/*5️⃣-⑤：同时，在本文件中引入 store；*/
import store from "./store";


const App = (  /*5️⃣-⑥：然后，用 JSX 语法定义一个 App 组件；*/
  
  /*5️⃣-⑦：里边用 Provider 包裹“组件”TodoList；*/
  <Provider store={store}>  {/*❗️5️⃣-⑧：给 Provider 添加一个“属性”，
                            使其等于“5️⃣-⑤”中引入的 store。
                            这一步的意思就是：
                            “提供器 Provider”连接了 store，那么 Provider 里边的所有
                            “组件”（如这里的 TodoList）都有能力获取到 store 里的数据了！
                            */}
    <TodoList />
  </Provider>
)

/*❗️5️⃣-⑨：最后，把 App 作为“组件”传递给 ReactDOM.render。
即，现在是挂载并渲染 App 组件了！*/
ReactDOM.render(App, document.getElementById('root'));