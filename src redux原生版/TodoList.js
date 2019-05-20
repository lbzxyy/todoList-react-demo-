import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store';
import TodoListUI from './todoListUI';
import { getInputChangeAction, addTodoListAction, deleteTodoListAction, getInitTodoListAction } from './store/actionCreators';
import axios from 'axios';
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    console.log(this.state)
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
    axios.get('https://www.easy-mock.com/mock/5cc1d338a292711d4b98d708/example/api/todolist').then((res)=>{
        console.log('====================================');
        console.log(res);
        console.log('====================================');
        const action = getInitTodoListAction(res.data)
        store.dispatch(action)
    })
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
