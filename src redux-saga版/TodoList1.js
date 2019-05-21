import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem';
import Animation from './ Animation';
import axios from 'axios';
export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '', // 输入框的值
            list: [], // 数组回显
        }
    }
    // 在组件即将被挂载到页面到时刻自动执行  执行一次
    componentWillMount(){
        console.log('componentWillMount');
        
    }
    // 组件被挂载到时候自动执行  执行一次
    componentDidMount(){
        console.log('componentDidMount');
        axios.get('https://www.easy-mock.com/mock/5cc1d338a292711d4b98d708/example/api/todolist').then( (res) => {
            console.log(res.data);
            this.setState(()=>{
                return{
                    list: [...res.data]
                }
            })
        })
        .catch(()=>{
            alert('error')
        })
        
    }
    // 组件被更新之前，它会自动执行
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }
    // 组件被更新之前，它会自动执行,但是它在shouldComponentUpdate之后被执行
    // 如果shouldComponentUpdate返回true它才执行，返回false就不会执行了
    componentWillUpdate(){
        console.log('componentWillUpdate');
        
    }
    // 组件到数据更新到时候执行
    componentDidUpdate(){
        console.log('componentDidUpdate');
        
    }
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
        
    }
    render() {
        console.log('render');
        
        return (
            <Fragment>
                <input
                 ref={(input)=>{
                    this.input = input
                 }}
                 value={this.state.inputValue} 
                 onChange={this.handleChange}/>
                <button onClick={this.handleClick}>提交</button>
                <ul>
                    {/* 函数有返回值的时候用（）调用 否则不需要（）调用 */}
                  {this.getTodoItem()}
                </ul>
                <Animation></Animation>
            </Fragment>
        )
    }
    getTodoItem() {
        return this.state.list.map( (item, index) => {
            return (
              <TodoItem key={index} content={item} test = {index} index={index} handleDelete={this.handleDelete.bind(this)}></TodoItem>
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
        const value = this.input.value
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
