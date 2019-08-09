import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  } 
  
  render() {
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

  componentWillReceiveProps() { 
    console.log("child componentWillReciveProps")
  }

  componentWillUnmount() {  /*4️⃣这个“生命周期函数”是在“组件”
                            即将被程序从页面上剔除时，会自动执行。*/
  
    console.log("child componentWillUnmount")
  }

}

export default TodoItem;
