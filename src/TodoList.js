import React, {Component} from "react";
import 'antd/dist/antd.css';

import { Input, Button, List } from 'antd';  

import store from "./store"; /*🚀引入 store。*/

class TodoList extends Component {
  constructor(props) {
    super(props);
    
    this.state = store.getState();  /*5️⃣-③：在 TodoList.js 里，
                                    可以利用 store 提供给我们的 getState 方法
                                    来获取到 store 中的数据；
                                    ❗️即，组件中 state 数据的来源为 store 中的数据！*/
  }
  
  render() {
    return (
      <div style={{marginTop: "10px", marginLeft: "10px"}}>
        <div>
          {/*5️⃣-④：将获取到的数据 inputValue 展示在页面上；*/}
          <Input value={this.state.inputValue} placeholder="todo info" style={{width: "300px", marginRight: "10px"}} /> 
          
          <Button type="primary">提交</Button>  

          {/*5️⃣-⑤：将获取到的数据 list 展示在页面上；*/}
          <List style={{marginTop: "10px", width: "300px"}} 

            bordered
            dataSource={this.state.list}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
          

        </div>
      </div>
    )
  }
}

export default TodoList;
