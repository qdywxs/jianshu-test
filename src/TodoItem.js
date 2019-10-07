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

  componentWillUnmount() {
    console.log("child componentWillUnmount")
  }

}

export default TodoItem;
