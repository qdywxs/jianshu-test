import React, { Component, Fragment } from "react"; 

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "", 
      list: []
    };
  }

  render() {
    return(

      <Fragment>
        <div>
      
          <input 
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />

          <button onClick={this.handleBtnClick.bind(this)}>
            提交
          </button>

        </div>
        <ul>
          {
            this.state.list.map((item, index)=>{ 
              return( 
              
                /*1️⃣我们在生成 li 标签的时候，给每一个 li 标签绑定一个“点击”事件，
                使其在被“点击”时，去执行 handleItemDelete 方法；*/
                
                /*3️⃣-①：首先，我们把被“点击”的 li 的“下标”index 传给 handleItemDelete 方法；*/
                <li 
                  key={index} 
                  onClick={this.handleItemDelete.bind(this, index)}
                >  
                  {item}
                </li>
              )  
            })
          }
        
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value  
    })
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],  
      inputValue: ""  
    }) 
  }

  /*2️⃣我们在这里写一个 handleItemDelete 方法；*/
  handleItemDelete(index) {  /*3️⃣-②：这里去接收到这个传递过来的“下标”；*/
    
    /*3️⃣这个“删除”方法的逻辑为：*/
    
    const list = [...this.state.list]  /*3️⃣-③：我定义一个常量等于一个“拷贝”的“数据”项 list；
                              ❗️❗️❗️之所以这样做，是由于 React 中有一个概念叫 immutable，
                              它是指——state 不允许我们做任何的改变！因为它涉及到 React 性能优化相关的问题！
                              如果你想改变，你可以“拷贝”一个副本出来进行操作。
                              */
    
    list.splice(index, 1)  /*3️⃣-④：我们用 ES3 数组里的 splice 方法，将所“点击”项删除。
                           即，所“点击”项的下标为 index，然后从 index 开始，删除 1 项。
                           ❗️splice 方法会破坏原数组，所以最后返回的是已经“删除”了某项的 list。
                           */
    
    this.setState({
      list: list  /*3️⃣-⑤：再调用 setState 方法，将“数据”项 list 变为上一步得到的 list。*/
    }
    )
  }
}

export default TodoList;
