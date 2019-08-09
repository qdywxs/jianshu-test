import React, {Component} from "react";
import 'antd/dist/antd.css';

import { Input, Button, List } from 'antd';  /*7️⃣-①：首先引入 List 组件；*/  

/*7️⃣-②：按官网写法，去声明 data 常量（即，要显示在列表项中的内容）；*/
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];


class TodoList extends Component {
  
  render() {
    return (
      <div style={{marginTop: "10px", marginLeft: "10px"}}>
        <div>
          <Input placeholder="todo info" style={{width: "300px", marginRight: "10px"}} /> 
          
          <Button type="primary">提交</Button>  

          {/*7️⃣-③：直接复制官网写法（把没用的去掉），使用 List 组件：*/}
          {/*7️⃣-④：给 List 加点样式（间距、宽度），使其更好看些。*/}
          <List style={{marginTop: "10px", width: "300px"}} 

            bordered
            dataSource={data}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
          {/*❗️❗️❗️
            borderd 表示：这个列表有一个“边框”；
            dataSource 表示：这个列表到底要渲染什么内容（答：上边声明的 data 里的数据）；
            renderItem 表示：如何渲染（答：会将每条数据渲染成 List.item 这样的小组件，
                       数据内容就是 data 里边每一项数据的内容）。
          */}    
          

        </div>
      </div>
    )
  }
}

export default TodoList;
