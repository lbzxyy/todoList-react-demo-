import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    return (
      <div onClick={this.handleClick}>
        {this.props.content}
      </div>
    )
  }
  handleClick = () => {
      this.props.handleDelete(this.props.index)
  }
}
