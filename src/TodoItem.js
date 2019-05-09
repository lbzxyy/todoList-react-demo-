import React, { Component } from 'react'

export default class TodoItem extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const { content } = this.props;
    return (
      <div onClick={this.handleClick}>
        {content}
      </div>
    )
  }
  handleClick = () => {
      const { handleDelete, index } = this.props;
      handleDelete(index)
  }
}
