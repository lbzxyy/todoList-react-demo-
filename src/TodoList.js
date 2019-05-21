import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store';

import TodoListUI from './todoListUI';
import { getInputChangeAction, addTodoListAction, deleteTodoListAction
  ,getInitListAction} from './store/actionCreators';
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (
      <TodoListUI
        inputValue={ this.state.inputValue }
        list={ this.state.list }
        handleChange = { this.handleChange }
        submit = { this.submit }
        handleDelete = { this.handleDelete }
      ></TodoListUI>
    )
  }
  componentDidMount() {
    const action = getInitListAction()
      store.dispatch(action)
   

  }

  handleChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  submit =() => {
    const action = addTodoListAction()
    store.dispatch(action)
  }
  handleDelete = (index) => {
    const action = deleteTodoListAction(index)
    store.dispatch(action)
  }
  handleStoreChange =() => {
    this.setState(store.getState())
  }
}
