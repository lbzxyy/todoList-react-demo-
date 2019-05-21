import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, GET_INIT_TODOLIST} from './actionTypes'
const defaultState = {
    inputValue: '',
    list: []
}
export default ( state = defaultState, action ) => {
    console.log('====================================');
    console.log(state,action);
    console.log('====================================');
    const newState = JSON.parse(JSON.stringify(state))

    switch(action.type){
        case CHANGE_INPUT_VALUE:
            newState.inputValue = action.value;
            return newState;
        case ADD_TODO_ITEM:
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
            return newState;
        case DELETE_TODO_ITEM:
            newState.list.splice(action.index,1)
            return newState;
        case GET_INIT_TODOLIST:
            newState.list = action.data;
            return newState;
        default:
            return newState
    }


    // return state;
}