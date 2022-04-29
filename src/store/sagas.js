import { put, takeEvery } from 'redux-saga/effects'
import { SOGA_LIST_DATA } from './actionTypes'
import { getListDataAction } from './actionCreators'
import axios from 'axios'

function* sogalist() {
    const res = axios.get('/list.json')
    const action = getListDataAction(res.data)   
    yield put(action)
}
function* mySaga() {
  yield takeEvery(SOGA_LIST_DATA, sogalist);
}

export default mySaga;