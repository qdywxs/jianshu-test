import React, { Component } from "react";

class TodoItem extends Component {

  
  render() {
    return(
      <div onClick={this.handleClick.bind(this)}>  
        {this.props.content}
      </div>
    )
  }
  
  handleClick() {  
    this.props.itemDelete(this.props.index)  /*2️⃣-③：当点击列表中的某项时，
                                             子组件调用父组件的“删除”方法，
                                             并传入“某项”的“下标 index”。*/
  }
}

export default TodoItem;
