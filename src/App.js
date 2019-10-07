import React, { Component, Fragment } from "react";  

import {
  CSSTransition,
  TransitionGroup,
} from "react-transition-group";

import "./style.css";

class App extends Component  {
  constructor(props) { 
    super(props);
    
    this.state = {
      list:[]
    }
    
    this.handleAddItem = this.handleAddItem.bind(this); 
  }
  
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  timeout={1000}
                  classNames="fade"
                  unmountOnExit={true}
                  appear={true}
                  onEntered={(el) => {
                    el.innerHTML="hello, 前端一万小时.";
                    el.style.color="red";
                  }} 
                  key={index}
                >
                  <div>hello, qdywxs.</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>

        <button onClick={this.handleAddItem}>toggle</button>

      </Fragment>
    );
  }
  
  handleAddItem() {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, "item"]
      }
    })
  }
}

export default App;