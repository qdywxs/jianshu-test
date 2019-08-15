import React, { Component, Fragment } from "react";  

import "./style.css";

class App extends Component  {
  constructor(props) { 
    super(props);
    
    this.state = {
      show: true  
    }
    
    this.handleBtnToggle = this.handleBtnToggle.bind(this); 
  }
  
  render() {
    return (
      <Fragment>

        <div className={this.state.show ? "show" : "hide"}>hello, qdywxs.</div>

        <button onClick={this.handleBtnToggle}>toggle</button>
      </Fragment>
    );
  }
  
  handleBtnToggle() {
    this.setState({
      show: this.state.show ? false : true
    })
  }
}

export default App;