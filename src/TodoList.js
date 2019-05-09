import React, { Component } from 'react'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: 'hello'
        }
    }
    render() {
        return (
            <div>
                <input value="{this.state.inputValue}" />
                <button >提交</button>
            </div>
        )
    }
}
