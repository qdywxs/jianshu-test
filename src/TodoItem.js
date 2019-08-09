import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  } 
  
  /*🏆我们可以在这个“生命周期函数”里去定义一些逻辑：*/
  shouldComponentUpdate(nextProps, nextState) {  /*1️⃣首先，这个函数会接收两个参数：nextProps 和 nextState。
                                  它们分别指，当我的这个组件要被“更新”的时候：
                                  ①nextprops——“接下来，我的 props”会被变成什么样；
                                  ②nextState——“接下来，我的 state”会被变成什么样。
                                  */
    
    if(nextProps.content !== this.props.content) {  /*2️⃣如果“接下来，我的 props”里的 content，
                                                    不等于当前 props 里的 content；*/
      
      return true;  /*3️⃣我就返回 true，因为 content 的值发生了变化，我需要让这个子组件重新渲染；*/
    }else {
      return false;  /*4️⃣否则，返回 false，不用渲染子组件。*/
    }
  
    
  }
  
  render() {
    console.log("child render")  
    const {content} = this.props
    
    return(
      <div onClick={this.handleClick}> 
        {content}  
      </div>
    )
  }
  
  handleClick() {  
    const {itemDelete, index} = this.props
    
    itemDelete(index)
  }
}

export default TodoItem;
