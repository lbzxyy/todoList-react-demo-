import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem';
export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '', // 输入框的值
            list: [], // 数组回显
        }
    }
    render() {
        return (
            <Fragment>
                <input value={this.state.inputValue} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>提交</button>
                <ul>
                    {/* 函数有返回值的时候用（）调用 否则不需要（）调用 */}
                  {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
    getTodoItem() {
        return this.state.list.map( (item, index) => {
            return (
              <TodoItem key={index} content={item} index={index} handleDelete={this.handleDelete.bind(this)}></TodoItem>
            )
        })
    }
    handleClick = () => {
        // prevState 改变state之前的数据 等价于this.state
        this.setState((prevState)=>{
            return {
                list: [...prevState.list,prevState.inputValue],
                inputValue: ''
            }
        })
        
    }
    handleChange = (e) => {
        // 这时 这个新写法是异步的
        const value = e.target.value
        this.setState(()=>{
            return {
                inputValue: value
            }
        })
    }
    handleDelete = (index) => {
        let list = [...this.state.list]
        list.splice(index,1)
        this.setState((prevState)=>{
            let list = [...prevState.list]
            return{
                list
            }
        })
        this.setState( {
            list
        })
        
    }
}
