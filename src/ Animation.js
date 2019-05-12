import React, { Component } from 'react'
import './style.css'
import { CSSTransition } from 'react-transition-group'
export default class  Animation extends Component {
  constructor(props){
      super(props);
      this.state = {
          show: true
      }
  }
  render() {
    return (
      <div>
          <CSSTransition
            in={this.state.show}
            timeout={1000}
            classNames = "fade"
          >
             <h1 
               
             >hello</h1>
          </CSSTransition>
        <button onClick={this.toggle}>toggle</button>
      </div>
    )
  }
  toggle =()=>{
    this.setState(()=>{
        return{
            show: this.state.show? false: true
        }
    })
  }
}
