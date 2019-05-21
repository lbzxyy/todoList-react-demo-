import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { getInitTodoListAction } from './actionCreators';

import {
    GET_INIT_LIST
} from './actionTypes'
function* getInitList() {
    try {
        const res = yield axios.get('https://www.easy-mock.com/mock/5cc1d338a292711d4b98d708/example/api/todolist');
        const action = getInitTodoListAction(res.data)
        yield put(action)  
    } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    }
     
   
}
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}
export default mySaga;