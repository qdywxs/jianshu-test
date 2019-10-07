import React, { Component } from "react";

import PropTypes from "prop-types";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  } 
  
  render() {
    console.log("TodoItem render")
    
    const {content, test} = this.props
    
    return(
      <div onClick={this.handleClick}> 
      {test}{content}
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
