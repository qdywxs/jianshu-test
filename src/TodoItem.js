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
    this.props.itemDelete(this.props.index)
  }
}

export default TodoItem;
