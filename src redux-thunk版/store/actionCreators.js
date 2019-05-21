
import axios from 'axios';

import { CHANGE_INPUT_VALUE,  ADD_TODO_ITEM, DELETE_TODO_ITEM, GET_INIT_TODOLIST} from './actionTypes'
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
// 使用了redux-thunk之后 action可以返回是一个函数了
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5cc1d338a292711d4b98d708/example/api/todolist').then((res)=>{
            const data = res.data;
            const action = getInitTodoListAction(data)
            dispatch(action)
        })
    }
}