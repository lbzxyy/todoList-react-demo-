import React, { Component } from 'react'
import PropType from 'prop-types'
export default class TodoItem extends Component {
  
  render() {
    console.log('child-render');
    
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
  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.content !== this.props.content){
      return true;
    }else{
      return false;
    }
  }
  // 　当一个组件要从父组件接受参数
  //   只要父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行
  //    如果这个组件第一次存在于父组件中，不会执行
  //    如果这个组件之前就存在于父组件中，才会执行
  componentWillReceiveProps(){
    console.log('child-componentWillReceiveProps');
    
}
// 当这个组件即将被从页面中剔除的时候，会被执行
componentWillUnmount(){
  console.log('child-componentWillUnmount');
  
}
}
TodoItem.propTypes = {
  content: PropType.string.isRequired,
  handleDelete: PropType.func,
  index: PropType.number
}
TodoItem.defaultProps = {
  // test: 'hello world'
}
