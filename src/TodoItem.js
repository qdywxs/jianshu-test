import React, { Component } from "react";

import PropTypes from "prop-types";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  } 
  
  render() {
    
    const {content, test} = this.props  /*2️⃣-①：this.props 是父组件通过“属性”传递过来的内容；*/
    
    return(
      <div onClick={this.handleClick}> 
      {test}{content}  {/*2️⃣-②：我们将内容项 content 展示在页面；*/}
      </div>
    )
  }
  
  handleClick() {  
    const {itemDelete, index} = this.props  
    
    itemDelete(index)
  }
}

TodoItem.propTypes = {
  
  test: PropTypes.string.isRequired, 
  
  content: PropTypes.string,  
  itemDelete: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  
  test: "hello, " 
}

export default TodoItem;
