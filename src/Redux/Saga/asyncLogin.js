// 可以封装一个全局axios  
// 可以参考 https://github.com/tobescholar/Integration/blob/master/src/plugin/http/index.js
// import Http from '../../Http';

import { call, put, take, takeLatest } from 'redux-saga/effects';
import { loginSuccess, loginPending, loginError } from '../Actions/LoginAction';


const url = 'http://localhost:3030'

function * loginAsync(data) {
    // 触发loading
    yield put(loginPending())
    const result = yield fetch(url + '/api/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data.payload)
    }).then(res => res.ok ? res.json() : '');

    if(result.message === 'success') {
        // 成功回调
        yield put(loginSuccess(result.data))
    } else {
        // 失败回调
        yield put(loginError(result.data))
    }
}



function * LoginFn () {
    // 监听disptch type: A_LOGIN
    yield takeLatest('A_LOGIN', loginAsync);
}

// 数组 可添加多个
const saga = [
    LoginFn
]


export default saga