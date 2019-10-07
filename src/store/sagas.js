import { takeEvery, put } from "redux-saga/effects";
import { GET_INIT_LIST } from "./actionTypes";
import axios from "axios";
import { initListAction } from "./actionCreators";

function* getInitList() {
  try {
    const res = yield axios.get("http://rap2api.taobao.org/app/mock/232799/api/todolist");
    const action = initListAction(res.data.data);
    yield put(action);
  } catch(e) {
    console.log("获取数据失败~")  
  }
}


function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
