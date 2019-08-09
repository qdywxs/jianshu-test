import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './TodoList';  /*1️⃣组件 App 被改为 TodoList，那么对应的，
                                    它是来自当前目录下的 TodoList 文件；*/

/*2️⃣对应的，挂载的时候，是将 TodoList 这个组件挂载到 id 为 root 的节点上；*/
ReactDOM.render(<TodoList />, document.getElementById('root'));
