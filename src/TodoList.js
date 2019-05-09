import React, { Component } from 'react'

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
            <div>
                <input value={this.state.inputValue} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>提交</button>
                <ul>
                   {
                       this.state.list.map( (item, index) => {
                           return (
                                <li key={index}>
                                     {item}
                                </li>
                           )
                       })
                   }
                </ul>
            </div>
        )
    }
    handleClick = () => {
        let list = [...this.state.list, this.state.inputValue];
        this.setState({
            list: list, // 设置更新数据实现视图更新
            inputValue: '' // 每次输入完后清空输入框的值
        })
        
    }
    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
        
    }
}
