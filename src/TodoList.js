import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List,Typography } from 'antd';
import store from './store';
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionTypes';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    console.log(this.state)
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (
      <div>
        <div>
            <Input placeholder="input info" 
            value={this.state.inputValue} 
            onChange={ this.handleChange }
            style={{ width: '300px', margin: '10px'}}>
            </Input>
            <Button type="primary" onClick={ this.submit }>提交</Button>
        </div>
        <List
            style={{marginTop: '10px', width: '300px'}}
            bordered
            dataSource={this.state.list}
            renderItem={(item,index) => (
                <List.Item onClick={ this.handleDelete.bind(this,index) }>
                <Typography.Text mark>[ITEM]</Typography.Text> {item}
                </List.Item>
            )}
            />
      </div>
    )
  }
  handleChange(e) {
    console.log('====================================');
    console.log(e.target.value);
    console.log('====================================');
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    }
    store.dispatch(action)
  }
  submit =() => {
    const action = {
      type: ADD_TODO_ITEM
    }
    store.dispatch(action)
  }
  handleDelete = (index) => {
    const action = {
      type: DELETE_TODO_ITEM,
      index: index
    }
    store.dispatch(action)
  }
  handleStoreChange =() => {
    console.log('====================================');
    console.log('store change');
    console.log('====================================');
    this.setState(store.getState())
  }
}
