import { fork } from 'redux-saga/effects';
import asyncLogin from './asyncLogin';

// 数组、 可添加多个、进行fork
const sagas = [
    ...asyncLogin,
];


export default function *root() {
    yield sagas.map(saga => fork(saga));
};