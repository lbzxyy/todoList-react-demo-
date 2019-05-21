

import { CHANGE_INPUT_VALUE,  
    ADD_TODO_ITEM, DELETE_TODO_ITEM, 
    GET_INIT_TODOLIST,
    GET_INIT_LIST
} from './actionTypes'
export const getInputChangeAction = (value) => {
    return {
        type: CHANGE_INPUT_VALUE,
        value 
    }
}
export const addTodoListAction = () => {
    return {
        type: ADD_TODO_ITEM
    }
}
export const deleteTodoListAction = (index) => {
    return {
        type: DELETE_TODO_ITEM,
        index
    }
}
export const getInitTodoListAction = (data) => {
    return {
        type: GET_INIT_TODOLIST,
        data
    }
}
export const getInitListAction = () => {
    return {
        type: GET_INIT_LIST,
    }
}
