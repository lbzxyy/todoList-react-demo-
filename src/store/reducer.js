const defaultState = {
    inputValue: 'hello world',
    list: []
}
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    if(action.type === 'change_input_value'){
        newState.inputValue = action.value
        return newState
    }
    if(action.type === 'add_todo_item'){
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    return state;
}