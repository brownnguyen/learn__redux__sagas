import { takeEvery, call, fork } from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/userApi';
function* getUsers() {
    try {
        const result = yield call(api.getUser);
    }
    catch (err) {
        console.log(err)
    }
}
function* watchGetUserRequest() {
    yield takeEvery(actions.Types.GET_USER_REQUEST, getUsers)
}
const userSagas = [
    fork(watchGetUserRequest)
]
export default userSagas